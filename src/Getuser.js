//import { render } from '@testing-library/react';
import { useState, useEffect } from "react";
import {getToken } from "./Common";

import Table from "react-bootstrap/Table";
var headers = {
  'Authorization': 'Bearer '+getToken()+'',
  'Content-Type': 'application/json'

};
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: headers
  };
function GetallUsers() {
  const [data, setData] = useState();
  useEffect(() => {
     getdata();
    },[]);
  
  async function getdata(){
	let result = await fetch("https://tathayafoods.herokuapp.com/api/get/all/users",requestOptions);
	result = await result.json();
	setData(result.user); 
  }
 

  console.log(data);

  return (
    <>
      {data != null ? (
        <div>
          <Table>
            <thead>
              <tr>
                <td>Role</td>
                <td>FistName</td>
                <td>LatName</td>
                <td>Email</td>
				<td>createdAt</td>
              </tr>
            </thead>
            {data.map((obj) => (
              <tr>
                <td>{obj.role}</td>
                <td>{obj.firstName}</td>

                <td>{obj.lastName}</td>
                <td>{obj.email}</td>
        

              
				<td>{(obj.createdAt).slice(0,10)}</td>
              </tr>
            ))}
          </Table>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>

  );
}
export default GetallUsers;
