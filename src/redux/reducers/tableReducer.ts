import { TableActions } from "../action/Table/action";
import { CHANGE_TABLE_FIELD, TOGGLE_ALL_ROWS } from "../action/Table/actionType";
import { table } from "../utiles/initialStore";

export const TableReducer = (state = table, action: TableActions) => {
  switch (action.type) {
    case CHANGE_TABLE_FIELD:
      const newState = {
        ...state,
        tableData: state.tableData.map((row) => {
          if (row.id === action.id) {
            return {
              ...row,
              [action.field]: action.value,
            };
          }

          return row;
        }),
      };
      return newState;
    
    case TOGGLE_ALL_ROWS:
      return {
        ...state,
        tableData: state.tableData.map((row) => {
          if (action.isAllSelected) {
            return {
              ...row,
              isSelected: true,
            };
          }

          return {
            ...row,
            isSelected: false,
          }
        })
      }

      default:
      return state;
  }
};

export type TableReducerType = typeof TableReducer;
