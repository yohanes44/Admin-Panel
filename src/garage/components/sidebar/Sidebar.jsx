import React from "react";

import "./sidebar.scss";

import {
  Dashboard,
  PersonOutline,
  Store,
  CreditCard,
  LocalShipping,
  InsertChart,
  NotificationsNone,
  SettingsSystemDaydreamOutlined,
  PsychologyOutlined,
  SettingsApplications,
  AccountCircleOutlined,
  ExitToApp,

  ManageAccounts,

} from "@mui/icons-material";

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar" >
      <div className="wrapper">
        <div className="top">
          {/* <Link to="/" style={{textDecoration: "none"}}> */}
          <div className="logo">Garage-Booking</div>
        
          {/* </Link> */}
          </div>
        <hr />
        <div className="center">
          <ul>
           
            {/* <Link style={{textDecoration: "none"}}> */}
              <li>
                <ManageAccounts className="icon" />
                <span>User Management</span>
              </li>
            {/* </Link> */}

       
            {/* <Link to="/users" style={{textDecoration: "none"}}> */}
              <li>
                <PersonOutline className="icon" />
                <span>Item/Spare Parts Management</span>
              </li>
            {/* </Link> */}

            {/* <Link to="/products" style={{textDecoration: "none"}}> */}
              <li>
                <Store className="icon" />
                <span>Services Management</span>
              </li>
            {/* </Link> */}
            {/* <Link  style={{textDecoration: "none"}}> */}
              <li>
                <CreditCard className="icon" />
                <span>Item Order Management</span>
              </li>
            {/* </Link> */}
            {/* <Link  style={{textDecoration: "none"}}> */}
              <li>
                <LocalShipping className="icon" />
                <span>Service Order Management</span>
              </li>
            {/* </Link> */}

            {/* <Link  style={{textDecoration: "none"}}> */}
              <li>
                <InsertChart className="icon" />
                <span>Order Check-out Management</span>
              </li>
            {/* </Link> */}
            {/* <Link  style={{textDecoration: "none"}}> */}
              <li>
                <NotificationsNone className="icon" />
                <span>Cart Management</span>
              </li>
            {/* </Link> */}


            {/* <Link  style={{textDecoration: "none"}}> */}
              <li>
                <SettingsSystemDaydreamOutlined className="icon" />
                <span>Visitor</span>
              </li>
            {/* </Link> */}

            {/* <Link  style={{textDecoration: "none"}}> */}
              <li>
                <PsychologyOutlined className="icon" />
                <span>Owner</span>
              </li>
            {/* </Link> */}



            {/* <Link  style={{textDecoration: "none"}}> */}
              <li>
                <SettingsApplications className="icon" />
                <span>Settings</span>
              </li>
            {/* </Link> */}
            
            <p className="title">User</p>
            {/* <Link  style={{textDecoration: "none"}}> */}
              <li>
                <AccountCircleOutlined className="icon" />
                <span>Profile</span>
              </li>
            {/* </Link> */}
            {/* <Link  style={{textDecoration: "none"}}> */}
              <li>
                <ExitToApp className="icon" />
                <span>Logout</span>
              </li>
            {/* </Link> */}
          </ul>
        </div>
        <div className="bottom">
          <div className="bottomOption"></div>
          <div className="bottomOption"></div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
