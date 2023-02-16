import AxiosService from "./AxiosService";

const middleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(AxiosService);

export default middleware;
