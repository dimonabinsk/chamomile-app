import { createAction, createSlice } from "@reduxjs/toolkit";
import basketService from "../services/basket.service";

const initBasketEntities = [
  {
    userId: null,
    basket: [
      {
        productId: null,
        quantity: 0,
        price: 0,
        totalPrice: 0,
      },
    ],
  },
];

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    entities: initBasketEntities,
    isLoading: true,
    error: null,
  },
  reducers: {
    basketRequested: (state) => {
      state.isLoading = true;
    },
    basketReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    basketRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    basketCreate: (state, action) => {
      state.entities = [action.payload];
      state.isLoading = false;
    },

    basketUpdate: (state, action) => {
      state.entities = [action.payload];
      state.isLoading = false;
    },

    basketDelete: (state, action) => {
      state.entities.products = state.entities.products.filter(
        (el) => el._id !== action.payload
      );
    },
  },
});

const { reducer: basketReducer, actions } = basketSlice;

const {
  basketRequested,
  basketReceived,
  basketRequestFailed,
  basketCreate,
  basketDelete,
  basketUpdate,
} = actions;

const addBasketRequested = createAction("basket/addBasketRequested");
const deleteBasketRequested = createAction("basket/deleteBasketRequested");
const updateBasketRequested = createAction("basket/updateBasketRequested");

export const loadBasketList = (userId) => async (dispatch) => {
  dispatch(basketRequested());
  try {
    const { content } = await basketService.getBasket(userId);
    dispatch(basketReceived(content));
  } catch (error) {
    dispatch(basketRequestFailed(error.message));
  }
};

export const createBasket = (payload) => async (dispatch) => {
  dispatch(addBasketRequested());
  try {
    const { content } = await basketService.createBasket(payload);
    dispatch(basketCreate(content));
  } catch (error) {
    dispatch(basketRequestFailed(error.message));
  }
};

export const deleteBasket = (productId) => async (dispatch) => {
  dispatch(deleteBasketRequested());
  try {
    const { content } = await basketService.deleteBasket(productId);
    if (!content) dispatch(basketDelete(productId));
  } catch (error) {
    dispatch(basketRequestFailed(error.message));
  }
};

export const updateBasket = (payload) => async (dispatch) => {
  dispatch(updateBasketRequested());
  try {
    const { content } = await basketService.updateBasket(payload);
    dispatch(basketUpdate(content));
  } catch (error) {
    dispatch(basketRequestFailed(error.message));
  }
};

export const getBasket = () => (state) => state.basket.entities;

export const getBasketById = (id) => (state) => {
  if (state.basket.entities) {
    return state.basket.entities.find((b) => b.userId === id);
  }
};

export const getBasketLoadingStatus = () => (state) => state.basket.isLoading;

export default basketReducer;
