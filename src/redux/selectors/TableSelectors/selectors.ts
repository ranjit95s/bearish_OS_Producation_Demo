import { RootState } from "../../Store";
import { TableRowType } from "../../utiles/initialStore";

export const SelectTableData = (state: RootState, sortCriteria: keyof TableRowType, sortType: "asc" | "desc" | "all") => {
  const tableData = state.table.tableData;
  if (sortType === "all") {
    return tableData;
  }
  // sorts table data by sortCriteria and sortType
  const sortedTableData = [...tableData].sort((a, b) => {
    if (["name", "email", "company", "phone"].includes(sortCriteria)) {
      if (a[sortCriteria].toString().localeCompare(b[sortCriteria].toString()) === -1) {
        return sortType === "asc" ? -1 : 1;
      } else {
        return sortType === "asc" ? 1 : -1;
      }
    }

    if (a[sortCriteria] < b[sortCriteria]) {
      return sortType === "asc" ? -1 : 1;
    }
    if (a[sortCriteria] > b[sortCriteria]) {
      return sortType === "asc" ? 1 : -1;
    }
    return 0;
  });

  return sortedTableData;
};
