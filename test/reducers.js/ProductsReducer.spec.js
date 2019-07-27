import expect from "expect";
import ProductsReducer from "../../src/reducers/ProductsReducer";
import {
  GET_PRODUCTS,
  INIT_REQUEST,
  ERROR_PRODUCTS
} from "../../src/actions/Types";

describe("Products reducer", () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      isLoading: false,
      errorMessage: undefined,
      productsList: []
    };
  });

  it("should have an empty initial state", () => {
    expect(
      ProductsReducer(undefined, { type: "@@redux/INIT", payload: null })
    ).toEqual(initialState);
  });

  it("INIT_REQUEST sets isLoading state to true", () => {
    const action = {
      type: INIT_REQUEST
    };
    const newState = ProductsReducer(initialState, action);
    expect(newState.isLoading).toBe(true);
    expect(newState.errorMessage).toEqual(initialState.errorMessage);
    expect(newState.productsList).toEqual(initialState.productsList);
  });

  it("GET_PRODUCTS sets productList to a new array", () => {
    const action = {
      type: GET_PRODUCTS,
      payload: [
        {
          id: 1,
          name: "Test 1",
          price: "$500.00"
        },
        {
          id: 2,
          name: "Test 2",
          price: "$300.00"
        },
        {
          id: 3,
          name: "Test 3",
          price: "$800.00"
        }
      ]
    };

    const newState = ProductsReducer(initialState, action);
    expect(newState.productsList.length).toBe(3);
    expect(newState.isLoading).toBe(false);
    expect(newState.errorMessage).toBeUndefined();
  });

  it("ERROR_PRODUCTS sets errorMessage to a value", () => {
    const action = {
      type: ERROR_PRODUCTS,
      payload: "Fake error message"
    };

    const newState = ProductsReducer(initialState, action);
    expect(newState.productsList).toEqual(initialState.productsList);
    expect(newState.isLoading).toBe(false);
    expect(newState.errorMessage).toBe(action.payload);
  });

  it("should return state if no action match", () => {
    const action = {
      type: "NO_HANDLE_ACTION"
    };

    const newState = ProductsReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});
