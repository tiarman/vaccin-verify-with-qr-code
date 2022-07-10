import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './SideBar.css'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaHeart, FaGem, FaGithub, FaClipboardList, FaHireAHelper, FaCheckCircle } from 'react-icons/fa';
import sidebarBg from '../../../Images/bg3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { BsFillCartPlusFill, BsFillBookmarkPlusFill } from "react-icons/bs";
import { MdReviews } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";

const SideBar = ({ show, adminLoading }) => {
  const { panel } = useParams();
  return (
    <nav id="sidebar" className={show ? "active" : ""}>
      <ProSidebar image={sidebarBg} className='sidebar-container'>
        
        <SidebarHeader>
          <div
            style={{ padding: '24px', textTransform: 'uppercase', fontWeight: 'bold', fontSize: 14, letterSpacing: '1px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', }}>
            QR Code Generate
          </div>
        </SidebarHeader>
        <SidebarContent>



          <Menu iconShape="square">
          <MenuItem icon={<FaGem />}>Input Form <Link to="/dashboard/inputform" className={panel === "inputform"} ></Link></MenuItem>
          <MenuItem icon={<FaGem />}>Manage Input Form <Link to="/dashboard/manageinputform" className={panel === "manageinputform"} ></Link></MenuItem>
          <MenuItem icon={<FaGem />}>ShowQrCodePage <Link to="/dashboard/show-qr-code" className={panel === "manageinputform"} ></Link></MenuItem>

          </Menu>

          





        </SidebarContent>


        <ul className="list-unstyled back-button">
             <li>
                    <Link to="/" className="back-home brn btn-info main-button">
                        <FontAwesomeIcon icon={faSignOutAlt} /> Back to Home
                    </Link>
                </li>
             </ul>
        <SidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 24px',
            }}
          >
           
          </div>
        </SidebarFooter>

      </ProSidebar>;
    </nav>
  );
};

export default SideBar;
