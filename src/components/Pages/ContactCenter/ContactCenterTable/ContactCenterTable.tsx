import { useDispatch, useSelector } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import styles from "./ContactCenterTable.module.css";
import { useCallback, useMemo, useState } from "react";
import { TableRowType } from "../../../../redux/utiles/initialStore";
import TableHeader from "./TableHeader/TableHeader";
import TableRow from "./TableRow/TableRow";
import { SelectTableData } from "../../../../redux/selectors/TableSelectors/selectors";
import { AppDispatch, RootState } from "../../../../redux/Store";
import { toggleAllRows } from "../../../../redux/action/Table/action";

const ContactCenterTable = () => {
  const [sortCriteria, setSortCriteria] = useState<keyof TableRowType>("id");
  const [sortType, setSortType] = useState<"asc" | "desc" | "all">("all");
  const [isAllSelected, setIsAllSelected] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const tableRows = useSelector<RootState, TableRowType[]>((state) =>
    SelectTableData(state, sortCriteria, sortType)
  );

  const sortBy = useCallback(
    (criteria: keyof TableRowType) => {
      setSortCriteria(criteria);
      setSortType((prev) => {
        if (prev === "all") {
          return "asc";
        }

        if (prev === "asc") {
          return "desc";
        }

        return "all";
      });
    },
    []
  );

  const toggleAll = useCallback(() => {
    setIsAllSelected((prev) => !prev);

    dispatch(toggleAllRows(!isAllSelected));
  }, [dispatch, isAllSelected]);

  const isAllRowsSelected = useMemo(() => {
    const allSelected = tableRows.filter((row) => row.isSelected);

    if (allSelected.length === tableRows.length) {
      return true;
    }
    return false;
  }, [tableRows]);

  return (
    <table className={styles.table}>
      <thead className={styles.tableHeading}>
        <tr className={styles.tableHeading}>
          <th className={styles.tableHeaderCheckbox}>
            <Checkbox
              sx={{ "& .MuiSvgIcon-root": { fontSize: 25, color: "black" } }}
              checked={isAllRowsSelected}
              onClick={toggleAll}
            />
          </th>
          <TableHeader
            title="Name"
            onClick={() => sortBy("name")}
            showSortIcon={sortCriteria === "name"}
            sortType={sortType}
          />
          <TableHeader
            title="Email"
            onClick={() => sortBy("email")}
            showSortIcon={sortCriteria === "email"}
            sortType={sortType}
          />
          <TableHeader
            title="Company"
            onClick={() => sortBy("company")}
            showSortIcon={sortCriteria === "company"}
            sortType={sortType}
          />
          <TableHeader
            title="Phone Number"
            onClick={() => sortBy("phone")}
            showSortIcon={sortCriteria === "phone"}
            sortType={sortType}
          />
          <TableHeader title="Status" />
        </tr>
      </thead>

      <tbody className={styles.tableBody}>
        {tableRows.map((tableRow) => (
          <TableRow key={tableRow.id} tableRow={tableRow} />
        ))}
      </tbody>
    </table>
  );
};

export default ContactCenterTable;
