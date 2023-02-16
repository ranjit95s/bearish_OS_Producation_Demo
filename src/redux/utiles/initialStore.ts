export const user = {};
export const auth = {};
export const email = { isShow: false, labelIds: 'INBOX' };
export const apiResponses = [];

export const loader = {
  array: [],
};

const drawerIsOpen = localStorage.getItem("drawerIsOpen") || false;
const drawerIsNarrow = localStorage.getItem("drawerIsNarrow") || false;

export const layout = {
  drawer: {
    isOpen: drawerIsOpen
      ? JSON.parse(drawerIsOpen)
      : true,
    isNarrow: drawerIsNarrow
      ? JSON.parse(drawerIsNarrow)
      : false,
  },
};

export type TableRowType = {
  id: number;
  isSelected: boolean;
  name: string;
  email: string;
  company: string;
  phone: string;
  status: boolean;
};

interface InitialTableState {
  tableData: TableRowType[];
}

export const table: InitialTableState = {
  tableData: [
    {
      id: 1,
      isSelected: false,
      name: "Snow",
      email: "Jon",
      company: "Apple",
      phone: "12324512",
      status: true,
    },
    {
      id: 2,
      isSelected: false,
      name: "Ann",
      email: "Marston",
      company: "Cargoship",
      phone: "21312",
      status: true,
    },
    {
      id: 3,
      isSelected: false,
      name: "Albert",
      email: "gir@com.com",
      company: "Microsoft",
      phone: "+45621312",
      status: true,
    },
    {
      id: 4,
      isSelected: false,
      name: "Ellison",
      email: "ell@gmail.com",
      company: "Microsoft",
      phone: "+26761312",
      status: true,
    },
    {
      id: 5,
      isSelected: false,
      name: "Korgy",
      email: "email@gmail.com",
      company: "Another boring",
      phone: "+545667677",
      status: true,
    },
    {
      id: 6,
      isSelected: false,
      name: "Marston",
      email: "slls@com.com",
      company: "Supra prod",
      phone: "+34521312",
      status: true,
    },
  ],
};
export type TableDataState = typeof table;
