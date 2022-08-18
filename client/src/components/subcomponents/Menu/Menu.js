import React from "react";
import Nav from 'react-bootstrap/Nav';

const Menu = (props) => {
const { menuSelect, menuSelected, machinePanelSelected } = props

const isChosen = () => menuSelected

  return (
    <Nav variant="pills" defaultActiveKey="zabrze"
    onSelect={menuSelect}
    style={{fontSize: "20px"}}
    >
      <Nav.Item>
        <Nav.Link eventKey="zabrze" disabled={machinePanelSelected} className={isChosen() === "zabrze" ? "bg-dark" : "text-dark"}>ZABRZE</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="zory" disabled={machinePanelSelected} className={isChosen() === "zory" ? "bg-dark" : "text-dark"}>ŻORY</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="gliwice 1" disabled={machinePanelSelected} className={isChosen() === "gliwice 1" ? "bg-dark" : "text-dark"}>GLIWICE 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="gliwice 2" disabled={machinePanelSelected} className={isChosen() === "gliwice 2" ? "bg-dark" : "text-dark"}>GLIWICE 2</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Menu;