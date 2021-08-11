//import { render } from '@testing-library/react';
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import {getToken } from "./Common";

var headers = {
  'Authorization': 'Bearer '+getToken()+'',
  'Content-Type': 'application/json'

};
var requestOption = {
  method: 'GET',
  redirect: 'follow',
  headers: headers
  };

    
function PostLists() {
  const [data, setData] = useState();
  useEffect(() => {
     getdata();
    },[]);
  
  async function getdata(){
	let result = await fetch("https://tathayafoods.herokuapp.com/api/products/getall",requestOption);
	result = await result.json();
	setData(result.data); 
  }
 async function deleteOperations(_id){
 	let raw = JSON.stringify({
 		"product_id": ""+_id+""
 	  });
	  
 	  var requestOptions = {
 		method: 'DELETE',
		body: raw,
 		redirect: 'follow',
 		headers: headers
 	  };
	  
 let result=await fetch("https://tathayafoods.herokuapp.com/api/product/delete", requestOptions)
 
 result=await result.json(); 
 console.warn(result)
getdata();

}

  console.log("result", data);

  return (
    <>
      {data != null ? (
        <div>
          <Table>
            <thead>
              <tr>
                <td>productName</td>
                <td>productDescription</td>
                <td>productType</td>
                <td>Supplier</td>
                <td>quantity</td>
                <td>price</td>
			      	<td>createdAt</td>
               <td>Delete</td>
              </tr>
            </thead>
            {data.map((obj) => (
              <tr>
                <td>{obj.productName}</td>

                <td>{obj.productDescription}</td>
                <td>{obj.productType}</td>
                <td>{obj.supplier}</td>
                <td>{obj.quantity}</td>
                <td>{obj.price}</td>

                {/* <td>{obj.ProductImages._id}</td> */}
               {/* <td>
                  <img
                    style={{ width: 100 }}
                    src="obj.ProductImages._img"
                    alt="none"
                  ></img>{" "}
                </td> */}
			        	<td>{(obj.createdAt).slice(0,10)}</td>
                <td><span onClick={()=>deleteOperations(obj._id)} className="delete">delete</span></td>
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
export default PostLists;
