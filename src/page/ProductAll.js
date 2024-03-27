import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/hviezda1212/react-project3/products`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <div className="ad-area">회원 혜택:3만원 이상 무료배송 & 첫구매 10% 할인</div>
        <Row>
        {productList.map((menu=> (
          <Col lg={3}>
          <ProductCard item={menu}/>
        </Col>
        )
        ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
