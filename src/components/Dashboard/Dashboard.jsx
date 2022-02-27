import React, { useContext } from "react";
import TableInput from '../TableInput/TableInput';
import { GlobalData } from '../../App';
import { useAuth0 } from '@auth0/auth0-react';
import './Dashboard.css'
function Dashboard() {
  let gData = useContext(GlobalData)
  const { logout } = useAuth0();
  return (
    <>
      <div className="table_dashBoard">
        <div className='tabeHeader'></div>
        <div className='tableContaine-bodyGrid'>
          <div className='table_header'>    <div className='createBtnTable_container'>
            <div className='tableBtn'
              onClick={() => logout()}
            > Log Out</div>
          </div></div>
          <div className='filter_createTable_btn'>
            <div className='headFilter_container'></div>
            <div className='createBtnTable_container'>
              <div className='tableBtn'
                onClick={() => {
                  gData.setIsTableComponent(true);
                }}
              > Create Table</div>
            </div>
          </div>
        </div>
      </div>
      {gData.isTableComponent ? <TableInput /> : ''}
    </>
  );
}

export default Dashboard;
