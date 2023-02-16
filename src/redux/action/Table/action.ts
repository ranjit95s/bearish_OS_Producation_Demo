import { CHANGE_TABLE_FIELD, TOGGLE_ALL_ROWS } from "./actionType";
import { TableRowType } from "../../utiles/initialStore";

export const changeTableField = (
  field: keyof TableRowType,
  value: any,
  id: number
) => ({
  type: CHANGE_TABLE_FIELD,
  id,
  field,
  value,
});

export const toggleAllRows = (isAllSelected: boolean) => ({
  type: TOGGLE_ALL_ROWS,
  isAllSelected,
});

export type TableActions = ReturnType<typeof changeTableField> & ReturnType<typeof toggleAllRows>; // | Return...
