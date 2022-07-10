import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const DashboardNav = ({ setShowSidebar, show }) => {
    const { panel } = useParams();
    return (
        <Navbar expand="lg" variant="light" bg="white">
        <Container fluid>
            <button  onClick={() => setShowSidebar(!show)} type="button" id="sidebarCollapse" className={show ? "navbar-btn active" : "navbar-btn"} >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <Navbar.Brand>
                <h2
                    className="d-inline-block ml-md-3 mb-0"
                    style={{ fontSize: "1.4rem", fontWeight: "600" }}>
                    {
                     panel === "inputform" ? "InputForm"
                     :panel === "manageinputform" ? "ManageInputForm"
                     :panel === "show-qr-code" ? "ShowQrCodePage"
                     : ""
                    }
                </h2>
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <div className="ml-auto" >
                    
                </div>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default DashboardNav;
