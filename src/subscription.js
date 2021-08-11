//import { render } from '@testing-library/react';
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { getToken } from "./Common";
var headers = {
  Authorization: "Bearer " + getToken() + "",
  "Content-Type": "application/json",
};
var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: headers,
};
function GetSubscription() {
  const [data, setData] = useState();
  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    let result = await fetch(
      "https://tathayafoods.herokuapp.com/api/subscribe/getall",
      requestOptions
    );
    result = await result.json();
    setData(result.data);
  }

  console.log(data);

  return (
    <>
      {data != null ? (
        <div>
          <Table>
            <thead>
              <tr>
                <td>Customer Name</td>
                <td>Customer Email</td>
                <td>Product Name</td>
                <td>Farmer Email</td>
                <td>Start Date</td>
                <td>End Date</td>
              </tr>
            </thead>

            {data.map((obj) => {
              if(obj.Product!=null){
              return (
                <tr>
                  <td>{obj.user.firstName}</td>

                  <td>{obj.user.email}</td>
                    <td>{obj.Product.productName}</td>
                    <td>{obj.Product.supplier}</td>
                  <td>{obj.start.slice(0, 10)}</td>
                  <td>{obj.end.slice(0, 10)}</td>
                </tr>
              );
            }})}
          </Table>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}
export default GetSubscription;
