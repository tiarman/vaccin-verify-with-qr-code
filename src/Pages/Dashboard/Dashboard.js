import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DashboardNav from '../../Components/HomePageComponents/DashboardNav/DashboardNav';
import ManageInputForm from '../../Components/HomePageComponents/ManageInputForm/ManageInputForm';
import InputForm from '../../Components/HomePageComponents/PagesHome/InputForm/InputForm';
import ShowQrCodePage from '../../Components/HomePageComponents/ShowQrCodePage/ShowQrCodePage';
import SideBar from '../../Components/HomePageComponents/SideBar/SideBar';
import './Dashboard.css'


const Dashboard = () => {
    const { panel } = useParams();
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <main className="dashboard-container">
     <SideBar show={showSidebar} />
            <div  id="content">
            <DashboardNav setShowSidebar={setShowSidebar} show={showSidebar}  />
              
                {
                    panel === "inputform" ?  <InputForm />
                    :panel === "manageinputform" ?  <ManageInputForm />
                    :panel === 'show-qr-code' ? <ShowQrCodePage/>
                    
                    : ""
                }
            </div>
        </main>
    );
};

export default Dashboard;
