import { combineReducers } from "redux";

const quoteReducer = (state = "", action) => {
  switch (action.type) {
    case "NEWQUOTE":
      return action.payload;
    default:
      return state;
  }
};

const colorReducer = (state = "", action) => {
  switch (action.type) {
    case "NEWCOLOR":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  quote: quoteReducer,
  color: colorReducer,
});

export default rootReducer;
