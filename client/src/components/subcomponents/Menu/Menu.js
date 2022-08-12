import React from "react";
import Nav from 'react-bootstrap/Nav';

const Menu = (props) => {
const { menuSelect } = props

  return (
    <Nav variant="pills" defaultActiveKey="zabrze"
    // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    onSelect={menuSelect}
    >
      <Nav.Item>
        <Nav.Link eventKey="zabrze">ZABRZE</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="zory">ŻORY</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="gliwice1">GLIWICE 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="gliwice2">GLIWICE 2</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Menu;