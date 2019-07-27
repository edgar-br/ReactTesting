import sinon from "sinon";
import expect from "expect";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { GET_PRODUCTS } from "../../src/actions/Types";
import { getProducts } from "../../src/actions/ProductsActions";

describe("Products actions", () => {
  let dispatch;
  let getState;

  const state = {
    products: {
      isLoading: false,
      errorMessage: undefined,
      productsList: undefined
    }
  };

  beforeEach(() => {
    dispatch = sinon.stub();
    getState = sinon.stub();
  });

  afterEach(() => {
    dispatch.reset();
    getState.reset();
  });

  it("should call getProducts action", () => {
    getState.returns(state);
    getProducts()(dispatch, getState);
    expect(dispatch.calledOnce).toBe(true);
  });

  it("should call axios an return data", () => {
    const axiosMock = new MockAdapter(axios);
    const products = [
      {
        id: 1,
        name: "Test 1",
        price: "400.00"
      },
      {
        id: 2,
        name: "Test 2",
        price: "300.00"
      }
    ];
    axiosMock.onGet("http://localhost:3500/api/products").reply(200, {
      products
    });
    axios.get("http://localhost:3500/api/products").then(response => {
      expect(response.data.products).toEqual(products);
    });
  });

  it("should call axios and return an error", () => {
    const axiosMock = new MockAdapter(axios);
    axiosMock.onGet("http://localhost:3500/api/products").reply(505);
    axios.get("http://localhost:3500/api/products").catch(error => {
      expect(error.response.status).toBe(505);
      expect(error.response.data).toBeUndefined();
    });
  });
});
