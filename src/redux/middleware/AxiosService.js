import axios from "axios";
import toast from "react-hot-toast";
import { loaderStart, loaderStop } from "../action/Loader/action";
import { isString, randomId } from "../../Utiles";

const TOASTER_OBJECT = {
    loading: null,
    success: true,
    error: true,
};

const getAxiosProps = ({
    method,
    baseURL = process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_BACKEND_BASE_LOCAL_URL
        : process.env.REACT_APP_BACKEND_BASE_URL,
    url,
    payload,
    header = {},
}) => ({
    method,
    baseURL,
    url,
    data: payload,
    headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
        Accept: "application/json",
        ...header,
    },
});

const AxiosService =
    ({ getState }) =>
        (next) =>
            async (action) => {
                const {
                    type = "GET",
                    payload,
                    header,
                    method,
                    baseURL,
                    url,
                    axiosService,
                    toaster = {},
                } = action;
                const {
                    loading = TOASTER_OBJECT.loading,
                    success = TOASTER_OBJECT.success,
                    error = TOASTER_OBJECT.error,
                } = toaster;

                if (axiosService) {
                    const loaderId = randomId();

                    if (loading) {
                        next(loaderStart({ id: loaderId }));
                        if (isString(loading))
                            toast.loading(loading, {
                                id: loaderId,
                            });
                    }
                    await next({
                        type: `${type}_FETCHING`,
                    });

                    try {
                        const response = await axios(
                            getAxiosProps({
                                method,
                                baseURL,
                                url,
                                header,
                                payload,
                            })
                        );

                        if (success)
                            toast.success(isString(success) ? success : response.data.message, {
                                id: loaderId,
                            });
                        else toast.dismiss(loaderId);

                        await next({
                            type: `${type}_SUCCESS`,
                            payload: response.data,
                        });
                    } catch (axiosError) {
                        if (error)
                            toast.error(
                                (isString(error) ? error : axiosError?.response?.data?.error) ||
                                "Something went to wrong !",
                                { id: loaderId }
                            );
                        else toast.dismiss(loaderId);

                        await next({
                            type: `${type}_ERROR`,
                            payload: axiosError,
                        });
                    } finally {
                        if (loading) next(loaderStop({ id: loaderId }));
                    }
                } else {
                    await next(action);
                }

                return getState();
            };

export default AxiosService;
