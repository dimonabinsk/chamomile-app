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
    isSubmit: false,
  },
  reducers: {
    catalogRequested: (state) => {
      state.isLoading = true;
      state.isSubmit = false;
    },
    catalogReceived: (state, action) => {
      state.entities = action.payload;
      state.lastFetch = Date.now();
      state.isLoading = false;
    },

    catalogAddReceived: (state, action) => {
      state.entities.push(action.payload);
      state.isLoading = false;
      state.isSubmit = true;
    },
    catalogUpdate: (state, action) => {
      const newProductList = state.entities.map((el) => {
        if (el._id === action.payload._id) {
          el = {
            ...el,
            ...action.payload,
          };
        }
        return el;
      });

      state.entities = newProductList;
      state.isLoading = false;
    },
    catalogRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      state.isSubmit = false;
    },
  },
});

const { reducer: catalogReducer, actions } = catalogSlice;
const {
  catalogRequested,
  catalogReceived,
  catalogRequestFailed,
  catalogAddReceived,
  catalogUpdate,
} = actions;

export const loadCatalogList = () => async (dispatch, getState) => {
  const { lastFetch } = getState().catalog;
  if (isOutdated(lastFetch)) {
    dispatch(catalogRequested());
    try {
      const { content } = await catalogService.getAll();
      dispatch(catalogReceived(content));
    } catch (error) {
      dispatch(catalogRequestFailed(error.message));
    }
  }
};

export const addCatalogProduct = (payload) => async (dispatch) => {
  dispatch(catalogRequested());
  try {
    const { content } = await catalogService.upload(payload);
    dispatch(catalogAddReceived(content));
  } catch (error) {
    dispatch(catalogRequestFailed(error.message));
  }
};

export const updateCatalogProduct =
  (productId, payload, price, idAt) => async (dispatch) => {
    dispatch(catalogRequested());
    try {
      const { content } = await catalogService.update(
        productId,
        payload,
        price,
        idAt
      );
      dispatch(catalogUpdate(content));
    } catch (error) {
      dispatch(catalogRequestFailed(error.message));
    }
  };

export const getProductById = (plantId) => (state) => {
  // console.log("state", state.catalog.entities);
  if (state.catalog.entities) {
    return state.catalog.entities.find((p) => p._id === plantId);
  }
};

export const getCatalog = () => (state) => state.catalog.entities;

export const getCatalogLoadingStatus = () => (state) => state.catalog.isLoading;

export const getSubmitFormStatus = () => (state) => state.catalog.isSubmit;


export default catalogReducer;
