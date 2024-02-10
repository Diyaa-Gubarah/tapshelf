import { Product } from "../../../../../../types";
import { Reducer } from "react";

// Define a new interface for the state, including an error property
export interface ProductState {
  product: Product | {};
}

export type Action =
  | { type: "UPDATE_FIELD"; fieldName: keyof Product; value: string }
  | { type: "RESET_FORM" }

export const initialState: ProductState = {
  product: {

  },
};

const productReducer: Reducer<ProductState, Action> = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, product: { ...state.product, [action.fieldName]: action.value }, };
    case "RESET_FORM":
      return { ...state, product: {} };

    default:
      return state;
  }
};

export default productReducer;
