import { createAction, createReducer } from '@reduxjs/toolkit';

export const CHANGE_ORDER = 'CHANGE_ORDER';
export const GET_MAIN_CARD_ORDER = 'GET_MAIN_CARD_ORDER';

export const changeOrder = createAction(
  CHANGE_ORDER,
  function prepare(order: string) {
    return {
      payload: order
    };
  }
);

export const getMainCardOrder = createAction(
  GET_MAIN_CARD_ORDER,
  function prepare(query: string) {
    return {
      payload: query
    };
  }
);

const initialState: { value: string } = {
  value: ''
};

const reducer = createReducer(initialState, {
  [changeOrder.type]: (state, action) => {
    state.value = action.payload;
  }
});

export default reducer;
