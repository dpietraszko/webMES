import React from "react";
import Nav from 'react-bootstrap/Nav';

const Menu = (props) => {
const { menuSelect, machinePanelSelected } = props

  return (
    <Nav variant="pills" defaultActiveKey="zabrze"
    onSelect={menuSelect}
    >
      <Nav.Item>
        <Nav.Link eventKey="zabrze" disabled={machinePanelSelected}>ZABRZE</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="zory" disabled={machinePanelSelected}>ŻORY</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="gliwice 1" disabled={machinePanelSelected}>GLIWICE 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="gliwice 2" disabled={machinePanelSelected}>GLIWICE 2</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Menu;