import { combineReducers } from "redux";
import reduceReducers from "reduce-reducers";
import * as actions from "./actions";
import { validate } from "./utils";

function appState(
  state = {
    isEditModalOpen: false,
    currentEntryId: null,
    currentEntry: {},
    errors: {}
  },
  action
) {
  switch (action.type) {
    case actions.ON_EDIT:
      return {
        ...state,
        isEditModalOpen: true,
        currentEntryId: action.payload.id
      };
    case actions.ON_EDIT_FIELD:
      return {
        ...state,
        currentEntry: {
          ...state.currentEntry,
          [action.payload.fieldName]: action.payload.value
        }
      };
    case actions.ON_CLOSE_EDITTING_MODAL:
      return {
        ...state,
        isEditModalOpen: false,
        currentEntry: {},
        currentEntryId: null,
        errors: {}
      };
    default:
      return state;
  }
}

function data(state = [], action) {
  switch (action.type) {
    case actions.ON_DELETE:
      return state.filter(({ id }) => id !== action.payload.id);
    default:
      return state;
  }
}

function rootReducer(state, action) {
  switch (action.type) {
    case actions.ON_EDIT: {
      const entry = state.data.find(
        ({ id }) => id === state.appState.currentEntryId
      );
      return {
        ...state,
        appState: {
          ...state.appState,
          currentEntry: {
            ...entry
          }
        }
      };
    }
    case actions.ON_SAVE: {
      const errors = validate(state.appState.currentEntry);

      if (Object.keys(errors).length === 0) {
        const isNew =
          state.data.findIndex(
            ({ id }) => id === state.appState.currentEntryId
          ) === -1;

        return {
          ...state,
          data: isNew
            ? [
                ...state.data,
                {
                  ...state.appState.currentEntry,
                  id: state.appState.currentEntryId
                }
              ]
            : state.data.map(function(entry) {
                if (entry.id !== state.appState.currentEntryId) {
                  return entry;
                } else {
                  return { ...state.appState.currentEntry };
                }
              }),
          appState: {
            ...state.appState,
            isEditModalOpen: false,
            currentEntryId: null,
            currentEntry: {},
            errors: {}
          }
        };
      } else {
        return { ...state, appState: { ...state.appState, errors } };
      }
    }
    default:
      return state;
  }
}

export default reduceReducers(
  combineReducers({
    appState,
    data
  }),
  rootReducer
);
