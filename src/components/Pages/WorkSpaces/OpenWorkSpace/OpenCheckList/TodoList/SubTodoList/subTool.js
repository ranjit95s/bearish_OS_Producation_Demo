import checkall from '../../../../../../../Images/Bearish/check_all.svg';
import note from '../../../../../../../Images/Bearish/note.svg';
import justify from '../../../../../../../Images/Bearish/justify.svg'
import alarm from '../../../../../../../Images/Bearish/alarm.svg'
import flag from '../../../../../../../Images/Bearish/flag.svg'
import text from "../../../../../../../Images/Bearish/Light list.svg";
import subtask from "../../../../../../../Images/Bearish/checkbox_unchecked.svg";
import reporter from "../../../../../../../Images/Bearish/profile_circled.svg";
import approval from "../../../../../../../Images/Bearish/multiselect.svg";
import attachment from "../../../../../../../Images/Bearish/attachment.svg";
import priority from "../../../../../../../Images/Bearish/flag.svg";
import status from "../../../../../../../Images/Bearish/check_all.svg";
import more_vertical from '../../../../../../../Images/Bearish/more_vertical-dubbel.svg'

export const Date = {
    name: 'Due Date',
    type: "date",
    icon: alarm,
}

export const Assignee = {
    name: 'Assignee',
    type: "assignee",
    icon: 'MK',
}

export const Priority = {
    name: 'Priority',
    type: "priority",
    icon: flag,
}

export const Text = {
    name: 'Text',
    type: "text",
    icon: text,
}

export const Subtask = {
    name: "Subtask",
    type: "subtask",
    icon: subtask,
}

export const Reporter = {
    name: "Reporter",
    type: "reporter",
    icon: reporter,
}

export const Approval = {
    name: "Approval",
    type: "approval",
    icon: approval,
}

export const Label = {
    name: "Label",
    type: "label",
    icon: reporter,
}

export const Attachment = {
    name: "Attachment",
    type: "attachment",
    icon: attachment,
}

export const Notes = {
    name: "Notes",
    type: "notes",
    icon: priority,
}

export const Status = {
    name: "Status",
    type: "status",
    icon: status,
}

export const header = [
    Date,
    Assignee,
    Priority,
]

export const statusArray = [
    {
        id: 1,
        status: "To Do",
        color: "#000AFF",
        data: [
            {
                id: '1',
                ckeckall: checkall,
                description: 'This is an example of a checklist item to be done 1',
                noteimg: note,
                menu: justify,
                moreimg: more_vertical,
                coloumList: [
                    Date,
                    Assignee,
                    Priority,
                ]
            },
            {
                id: '2',
                ckeckall: checkall,
                description: 'This is an example of a checklist item to be done 2',
                noteimg: note,
                menu: justify,
                moreimg: more_vertical,
                coloumList: [
                    Date,
                    Assignee,
                    Priority
                ]
            },
            {
                id: '3',
                ckeckall: checkall,
                description: 'This is an example of a checklist item to be done 3',
                noteimg: note,
                menu: justify,
                moreimg: more_vertical,
                coloumList: [
                    Date,
                    Assignee,
                    Priority
                ]
            },
            {
                id: '4',
                ckeckall: checkall,
                description: 'This is an example of a checklist item to be done 4',
                noteimg: note,
                menu: justify,
                moreimg: more_vertical,
                coloumList: [
                    Date,
                    Assignee,
                    Priority
                ]
            },
        ]
    },
    {
        id: 2,
        status: "In Progress",
        color: "#FFA700",
        data: [
            {
                id: '5',
                ckeckall: checkall,
                description: 'This is an example of a checklist item to be done 1',
                noteimg: note,
                menu: justify,
                moreimg: more_vertical,
                coloumList: [
                    Date,
                    Assignee,
                    Priority,
                ]
            },
            {
                id: '6',
                ckeckall: checkall,
                description: 'This is an example of a checklist item to be done 2',
                noteimg: note,
                menu: justify,
                moreimg: more_vertical,
                coloumList: [
                    Date,
                    Assignee,
                    Priority
                ]
            },
        ]
    },
]