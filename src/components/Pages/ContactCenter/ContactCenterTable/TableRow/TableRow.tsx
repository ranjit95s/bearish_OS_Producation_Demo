import React from "react";
import styles from "./TableRow.module.css";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import { ChangeEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import doubleCheck from "../../../../../Images/Bearish/check_double.svg";
import { TableRowType } from "../../../../../redux/utiles/initialStore";
import { AppDispatch } from "../../../../../redux/Store";
import { changeTableField } from "../../../../../redux/action/Table/action";

type Props = {
  tableRow: TableRowType;
};

const TableRow: React.FC<Props> = ({ tableRow }) => {
  const { name, email, company, phone } = tableRow;

  const [isOnName, setIsOnName] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  const handleSelectRow = useCallback(() => {
    dispatch(changeTableField("isSelected", !tableRow.isSelected, tableRow.id));
  }, [dispatch, tableRow.isSelected, tableRow.id]);

  const changeField = useCallback(
    (field: keyof TableRowType, value: any) => {
      dispatch(changeTableField(field, value, tableRow.id));
    },
    [dispatch, tableRow.id]
  );

  const handleChangeName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      changeField("name", event.target.value);
    },
    [changeField]
  );

  const handleChangeEmail = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      changeField("email", event.target.value);
    },
    [changeField]
  );

  const handleChangeCompany = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      changeField("company", event.target.value);
    },
    [changeField]
  );

  const handleChangePhone = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      changeField("phone", event.target.value);
    },
    [changeField]
  );

  const handleMouseOnName = useCallback(() => {
    if (isOnName) {
      return;
    }

    setIsOnName(true);
  }, [isOnName]);

  const toggleStatus = useCallback(() => {
    changeField("status", !tableRow.status);
  }, [changeField, tableRow.status]);

  return (
    <tr className={styles.tableRow}>
      <td className={styles.tableDataCheckbox}>
        <Checkbox
          sx={{ "& .MuiSvgIcon-root": { fontSize: 25, color: "black" } }}
          onChange={handleSelectRow}
          checked={tableRow.isSelected}
        />
      </td>
      <td
        className={styles.tableDataName}
        onMouseLeave={() => setIsOnName(false)}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://www.nickiswift.com/img/gallery/what-john-cena-was-like-before-the-fame/intro-1504198576.jpg"
          sx={{ width: 40, height: 40 }}
        />
        <input
          value={name}
          onChange={handleChangeName}
          className={styles.tableRowInput}
          onMouseOver={handleMouseOnName}
        />
        {isOnName && <div className={styles.tableRowPreview}>Preview</div>}
      </td>
      <td className={styles.tableData}>
        <input
          value={email}
          onChange={handleChangeEmail}
          className={styles.tableRowInput}
        />
      </td>
      <td className={styles.tableData}>
        <input
          value={company}
          onChange={handleChangeCompany}
          className={styles.tableRowInput}
        />
      </td>
      <td className={styles.tableData}>
        <input
          value={phone}
          onChange={handleChangePhone}
          className={styles.tableRowInput}
        />
      </td>
      <td className={styles.tableData} onClick={toggleStatus}>
        {tableRow.status && <img src={doubleCheck} alt="check" />}
      </td>
    </tr>
  );
};

export default TableRow;
