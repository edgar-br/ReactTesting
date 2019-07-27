import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Badge, Col, Preloader } from "react-materialize";

class ProductsTableImpl extends Component {
  renderErrorMessage = () => (
    <Col s={4} className="center-align">
      <Badge id="error-message">{this.props.errorMessage}</Badge>
    </Col>
  );

  renderEmptyMessage = () => (
    <Col s={4} className="center-align">
      <Badge id="empty-message">No products to show</Badge>
    </Col>
  );

  renderLoader = () => (
    <Col s={4} className="center-align">
      <Preloader size="big" />
    </Col>
  );

  renderProductListItems = productList => {
    return productList.map(product => {
      return (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{`$${product.price} usd`}</td>
        </tr>
      );
    });
  };

  renderProductList = () => {
    const { productsList } = this.props;
    return (
      <Table className="responsive-table" hoverable={true}>
        <thead>
          <tr>
            <th data-field="id">ID</th>
            <th data-field="name">Product Name</th>
            <th data-field="price">Product Price</th>
          </tr>
        </thead>
        <tbody>{this.renderProductListItems(productsList)}</tbody>
      </Table>
    );
  };

  handleRender = () => {
    const { isLoading, errorMessage, productsList } = this.props;

    if (isLoading) return this.renderLoader();
    if (errorMessage) return this.renderErrorMessage();
    if (!productsList) return this.renderEmptyMessage();

    return this.renderProductList();
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">{this.handleRender()}</div>
      </React.Fragment>
    );
  }
}

ProductsTableImpl.propTypes = {
  productsList: PropTypes.array,
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string
};

export default ProductsTableImpl;
