import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Stack} from "@mui/material";
import classes from "../Prepare.module.css";
import bagIcon from "../../../../../../Images/Bearish/briefcase.svg";
import playIcon from "../../../../../../Images/Bearish/play.svg";
import pickerIcon from "../../../../../../Images/Bearish/eye_dropper.svg";
import Status from "../../CallLog/Status/Status";

const LIST_ARRAY = [
    {
        name: 'Lily Bear',
        email: 'lilybear@company.com',
        company: 'ACME Company',
        status: 'icon',
        statusDropdown: false
    }, {
        name: 'Lily Bear',
        email: 'lilybear@company.com',
        company: 'ACME Company',
        status: 'icon',
        statusDropdown: false
    }, {
        name: 'Lily Bear',
        email: 'lilybear@company.com',
        company: 'ACME Company',
        status: 'icon',
        statusDropdown: false
    },
];

const INITIAL_STATUS_ARRAY = [{
    status: 'New',
    pickerIcon: pickerIcon,
    colorCode: '#5ee2a0',
    isOpen: false
}, {
    status: 'Open',
    pickerIcon: pickerIcon,
    colorCode: '#ffa700',
    isOpen: false
}, {
    status: 'Unqualified',
    pickerIcon: pickerIcon,
    colorCode: '#ff0000',
    isOpen: false
}, {
    status: 'In Progress',
    pickerIcon: pickerIcon,
    colorCode: '#775ee2',
    isOpen: false
}, {
    status: 'Negotiating',
    pickerIcon: pickerIcon,
    colorCode: '#000aff',
    isOpen: false
}, {
    status: 'Connected',
    pickerIcon: pickerIcon,
    colorCode: '#04c3cc',
    isOpen: false
}, {
    status: 'Bad Timing',
    pickerIcon: pickerIcon,
    colorCode: '#ff0000',
    isOpen: false
}];

const PrepareTable = () => {

    const navigate = useNavigate();

    const [list, setList] = useState(LIST_ARRAY);
    const [statusArray, setStatusArray] = useState(INITIAL_STATUS_ARRAY);

    const listName = (name) => {
        const userName = name.split(" ");
        return userName?.[0]?.charAt(0).toLocaleUpperCase() + "" + userName?.[1]?.charAt(0).toLocaleUpperCase()
    };

    const handleStatusDropDown = (index) => {
        setList(pre => pre.map((eachStatus, eachStatusIndex) => {
            return eachStatusIndex === index ?
                {
                    ...eachStatus,
                    statusDropdown: !eachStatus.statusDropdown
                } : eachStatus
        }))
    };

    const handleSelectStatus = (status, index) => {
        setList(pre => pre.map((eachStatus, eachStatusIndex) => {
            return eachStatusIndex === index ?
                {
                    ...eachStatus,
                    colorCode: status.colorCode
                } :
                eachStatus

        }))
    };

    const handleSelectStatusPicker = (index) => {
        setStatusArray(status =>
            status.map((eachStatus, eachStatusIndex) => {
                return eachStatusIndex === index ?
                    {
                        ...eachStatus,
                        isOpen: !eachStatus.isOpen
                    } :
                    {
                        ...eachStatus,
                        isOpen: false
                    }
            }))
    };

    const handleSelectStatusColor = async (colorCode, dropdownIndex, index) => {
        await setStatusArray(priority =>
            priority.map((eachStatus, eachStatusIndex) => {
                return eachStatusIndex === dropdownIndex ?
                    {
                        ...eachStatus,
                        colorCode
                    } : eachStatus
            }));

        setList(pre => pre.map((eachStatus, eachStatusIndex) => {
            return eachStatusIndex === index ?
                {
                    ...eachStatus,
                    colorCode
                } :
                eachStatus

        }))
    };

    return (
        <>
            <Stack gap={'10px'}>
                {(list || []).map((value, index) => (
                    <Stack key={index}>
                        <Stack className={classes.tableRowMain} direction={'row'}>
                            <Stack direction={'row'} gap={'10px'}>
                                <Stack className={classes.userIcon}>
                                    {listName(value.name)}
                                </Stack>
                                <Stack gap={'5px'}>
                                    <Stack className={classes.name}>
                                        {value.name}
                                    </Stack>
                                    <Stack className={classes.email}>
                                        {value.email}
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Stack direction={'row'}>
                                <Stack direction={'row'} gap={'95px'} alignItems={'center'}>
                                    <Stack>
                                        <Stack className={classes.company}>
                                            {value.company}
                                        </Stack>
                                    </Stack>
                                    <Stack direction={'row'} gap={'47px'}>
                                        <Stack direction={'row'} gap={'49px'}>
                                            <Stack>
                                                {value.status === 'icon' ?
                                                    <Stack direction={'row'} width={'80px'} height={'30px'}>
                                                        <Status
                                                            index={index}
                                                            open={value.statusDropdown}
                                                            color={value?.colorCode}
                                                            statusArray={statusArray}
                                                            handleSelectStatusColor={handleSelectStatusColor}
                                                            handleSelectStatusPicker={handleSelectStatusPicker}
                                                            handleStatusDropDown={handleStatusDropDown}
                                                            handleSelectStatus={handleSelectStatus}/>
                                                    </Stack>
                                                    : <>
                                                        <Stack className={classes.newBtn}>
                                                            New
                                                        </Stack>
                                                    </>}

                                            </Stack>
                                            <Stack>
                                                <img src={bagIcon} alt={''} onClick={() => navigate("/pre-meeting")}/>
                                            </Stack>
                                        </Stack>
                                        <Stack>
                                            <img src={playIcon} alt={''}/>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                ))}
            </Stack>
        </>
    )
};
export default PrepareTable;
