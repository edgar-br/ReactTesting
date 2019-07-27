import React, { Component } from "react";
import { connect } from "react-redux";
import ProductsTable from "./ProductsTable";
import { getProducts } from "../actions/ProductsActions";

export class ProductsImpl extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <ProductsTable
        isLoading={this.props.isLoading}
        errorMessage={this.props.errorMessage}
        productsList={this.props.productsList}
      />
    );
  }
}

const mapStateToProps = state => {
  const { isLoading, errorMessage, productsList } = state.products;
  return { isLoading, errorMessage, productsList };
};

export default connect(
  mapStateToProps,
  {
    getProducts
  }
)(ProductsImpl);
