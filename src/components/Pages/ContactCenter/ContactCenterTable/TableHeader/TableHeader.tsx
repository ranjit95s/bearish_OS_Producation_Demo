import React from "react";
import styles from "./TableHeader.module.css";
import SortIcon from "../../../../../Images/Bearish/sort.svg";

interface IProps {
  title: string;
  onClick?: () => void;
  showSortIcon?: boolean;
  sortType?: "asc" | "desc" | "all";
}

const TableHeader: React.FC<IProps> = ({ title, onClick, showSortIcon, sortType }) => (
  <th className={styles.tableHeader} onClick={onClick}>
    {title}
    {sortType !== "all" && showSortIcon && (
      <img src={SortIcon} alt={"Sorting order"} className={sortType === "desc" ? styles.sortFlipped : ""} />
    )}
  </th>
);

export default React.memo(TableHeader);
