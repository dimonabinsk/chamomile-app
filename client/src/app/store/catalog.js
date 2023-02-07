import { createSlice } from "@reduxjs/toolkit";
import isOutdated from "../utilities/isOutdated";
import catalogService from "../services/catalog.service";


const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
    lastFetch: null,
  },
  reducers: {
    catalogRequested: (state) => {
      state.isLoading = true;
    },
    catalogReceived: (state, action) => {
      state.entities = action.payload;
      state.lastFetch = Date.now();
      state.isLoading = false;
    },
    catalogRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: catalogReducer, actions } = catalogSlice;
const { catalogRequested, catalogReceived, catalogRequestFailed } = actions;

export const loadCatalogList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().catalog;
    if (isOutdated(lastFetch)) {
        dispatch(catalogRequested());
        try {
          const { content } = await catalogService.getAll();
          // console.log(content);
            dispatch(catalogReceived(content));
        } catch (error) {
            dispatch(catalogRequestFailed(error.message));
        }
    }
}

export const getProductById = (plantId) => (state) => {
  // console.log("state", state.catalog.entities);
  if (state.catalog.entities) {
    return state.catalog.entities.find((p) => p._id === plantId);
  }
};

export const getCatalog = () => (state) => state.catalog.entities;

export const getCatalogLoadingStatus = () => (state) => state.catalog.isLoading;

export default catalogReducer;