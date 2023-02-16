import alarm from '../../../../../Images/Bearish/alarm.svg'
import note from '../../../../../Images/Bearish/note.svg'
import flag from '../../../../../Images/Bearish/flag.svg'
import assign from '../../../../../Images/Bearish/privacy.svg'

export const BoardStatusArray = [
    {
        id: '1',
        status: 'To Do',
        color: '#000AFF',
        data: [
            {
                title: 'List Name',
                description: 'This is an example of a board task with a task card. This section can get bigger to make room.1',
                time: '00/00/00',
                timeImg: alarm,
                editIcon: note,
                flagIcon: flag,
                assignIcon: assign,
                id: '1',
            },
            {
                title: 'List Name',
                description: 'This is an example of a board task with a task card. This section can get bigger to make room.2',
                time: '00/00/00',
                timeImg: alarm,
                editIcon: note,
                flagIcon: flag,
                assignIcon: assign,
                id: '2',
            }
        ]
    },
    {
        id: '2',
        status: 'In Progress',
        color: '#FFA700',
        data: [
            {
                title: 'List Name',
                description: 'This is an example of a board task with a task card. This section can get bigger to make room.',
                time: '00/00/00',
                timeImg: alarm,
                editIcon: note,
                flagIcon: flag,
                assignIcon: assign,
                id: '3',
            }
        ]
    },
]