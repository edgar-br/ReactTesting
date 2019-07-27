import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import ProductsTable from "../../src/components/ProductsTable";
import { Table, Badge, Col, Preloader } from "react-materialize";

describe("Products Table Component", () => {
  const defaultProps = {
    isLoading: false,
    errorMessage: undefined,
    productsList: [
      {
        id: 1,
        name: "Test 1",
        price: "500.00"
      },
      {
        id: 2,
        name: "Test 2",
        price: "300.00"
      },
      {
        id: 3,
        name: "Test 3",
        price: "800.00"
      }
    ]
  };

  it("should render a loader", () => {
      const wrapper = shallow(<ProductsTable {...{...defaultProps, isLoading: true}} />);
      expect(wrapper.find(Preloader).length).toBe(1);
      expect(wrapper.find(Table).length).toBe(0);
      expect(wrapper.find(Badge).length).toBe(0);
  });

  it('should render an error message', () => {
    const fakeErrorMessage = 'Fake error message';
    const wrapper = shallow(<ProductsTable {...{...defaultProps, errorMessage:fakeErrorMessage}} />);
    expect(wrapper.find(Preloader).length).toBe(0);
    expect(wrapper.find(Table).length).toBe(0);
    expect(wrapper.find('#error-message').length).toBe(1);
  });

  it('should render an empty message', () =>{
    const wrapper = shallow(<ProductsTable {...{...defaultProps, productsList: undefined}}/>);
    expect(wrapper.find(Preloader).length).toBe(0);
    expect(wrapper.find(Table).length).toBe(0);
    expect(wrapper.find('#empty-message').length).toBe(1);
  });

  it('should render a list of items', () => {
    const fakeErrorMessage = 'Fake error message';
    const wrapper = shallow(<ProductsTable {...defaultProps} />);
    expect(wrapper.find(Preloader).length).toBe(0);
    expect(wrapper.find(Table).length).toBe(1);
    expect(wrapper.find(Badge).length).toBe(0);
  });
});
