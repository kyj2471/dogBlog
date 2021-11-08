import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import mainPage from './mainPageReducer';
import order from './orderReducer';

const RootReducer = (state: any, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default: {
      const combineReducer = combineReducers({
        mainPage,
        order
      });
      return combineReducer(state, action);
    }
  }
};

export default RootReducer;
