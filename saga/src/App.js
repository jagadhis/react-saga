import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "React";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function App() {
  return (
    <Container>
      <Row className="row">
        <Col xs={12}>
          <h1>My New React APP with React-Saga</h1>
          <Button> Click me</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
