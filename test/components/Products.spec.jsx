import React from "react";
import expect from "expect";
import configureStore from "redux-mock-store";
import { shallow } from "enzyme";
import Products, { ProductsImpl } from "../../src/components/Products";
import ProductsTable from "../../src/components/ProductsTable";
import { getProducts } from "../../src/actions/ProductsActions";

const isLoadingProp = false;
const errorMessageProp = undefined;
const productsListProp = [];

describe("Products component", () => {
  const defaultProps = {
    isLoading: false,
    errorMessage: undefined,
    productsList: [
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
    ],
    getProducts
  };

  it("should be connected to the correct props", () => {
    const defaultStore = {
      products: {
        isLoading: isLoadingProp,
        errorMessage: errorMessageProp,
        productsList: productsListProp
      }
    };

    const mockStore = configureStore();
    const store = mockStore(defaultStore);

    const wrapper = shallow(
      <Products store={store} getProducts={getProducts} />
    );
    //console.log(wrapper.props());
    const { isLoading, errorMessage, productsList } = wrapper.props().children.props;
    expect(isLoading).toBe(isLoadingProp);
    expect(errorMessage).toBe(errorMessageProp);
    expect(productsList).toEqual(productsListProp);
  });

  it("should render the correct components", () => {
    const wrapper = shallow(<ProductsImpl {...defaultProps} />);
    expect(wrapper.find(ProductsTable).length).toBe(1);
  });
});
