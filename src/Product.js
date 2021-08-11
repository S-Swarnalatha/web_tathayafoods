import axios from "axios";
import { getToken } from "./Common";
import { useState } from "react";
import "./Product.css";
var myHeaders = new Headers();

myHeaders.append("Authorization", "Bearer " + getToken() + "");

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productType, setProductType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [cowName, setCowName] = useState("");
  const [cowAge, setCowAge] = useState("");
  const [capacity, setCapacity] = useState("");
  const [breed, setBreed] = useState("");
  const [gestation, setGestation] = useState("");
  const [images, setImages] = useState("");
  const [supplier, setSupplier] = useState("");

  async function addProduct() {
    const formdata = new FormData();
    formdata.append("productName", productName);
    formdata.append("productDescription", productDescription);
    formdata.append("productType", productType);
    formdata.append("quantity", quantity);
    formdata.append("price", price);
    formdata.append("cowName", cowName);
    formdata.append("images", images);
    //formdata.append("images", "");
    formdata.append("cowAge", cowAge);
    formdata.append("breed", breed);
    formdata.append("gestation", gestation);
    formdata.append("capacity", capacity);
    formdata.append("supplier", supplier);

    axios
      .post("https://tathayafoods.herokuapp.com/api/product/create", formdata, {
        headers: {
          Authorization: "Bearer " + getToken() + "",
          "Content-Type": "application/json",
        },
      })

      .then((response) => {
        console.log(response);
        alert("product added successfully");
      })
      .catch(() => {
        console.log(productType)
        alert("Please check your data!");
      });
  }

  return (
    <div className="row">
      <div className="col-sm-6 text-center abc">
        <p className="h4 mb-4 text-left">Product Details</p>

        <div className="form-group mb-3">
          <span class="required-field"></span>
          <input
            type="text"
            name="productName"
            onChange={(e) => setProductName(e.target.value)}
            placeholder="ProductName"
            required
            className="form-control rounded-pill border-0 shadow-sm px-4"
          />
        </div>
        <br />
        <div className="form-group mb-3">
          <span class="required-field"></span>

          <input
            type="text"
            name="productDescription"
            onChange={(e) => setProductDescription(e.target.value)}
            placeholder="ProductDescription"
            required
            className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
          />
        </div>
        <br />

        <div className="form-group mb-3">
          <span class="required-field"></span>
          <select
           className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"

            value={productType}
            onChange={(e) => setProductType(e.target.value)}
          >            <option >Choose Product Type</option>

            <option value="500ml">500ml</option>
            <option value="1000ml">1000ml</option>

          </select>

          {/* <input
              type="text"
              name="productType"
              onChange={(e) => setProductType(e.target.value)}
              placeholder="productType"
              required
              className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
            /> */}
        </div>

        <br />

        <div className="form-group mb-3">
          <span class="required-field"></span>

          <input
            type="text"
            name="quantity"
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity"
            required
            className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
          />
        </div>
        <br />

        <div className="form-group mb-3">
          <span class="required-field"></span>

          <input
            type="text"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            required
            className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
          />
        </div>
        <br />

        <input
          type="file"
          name="images"
          onChange={(e) => setImages(e.target.files[0])}
          placeholder="images"
          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
        />
        <br />

        <div className="form-group mb-3">
          <span class="required-field"></span>

          <input
            type="text"
            name="supplier"
            onChange={(e) => setSupplier(e.target.value)}
            placeholder="Supplier"
            required
            className="form-control rounded-pill border-0 shadow-sm  text-primary"
          />
        </div>
      </div>
      <div className="col-sm-6 xyz text-center">
        <p className="h4 mb-4 text-left">Cow Details</p>
        <div className="form-group mb-3">
          <span class="required-field"></span>

          <input
            type="text"
            name="cowName"
            onChange={(e) => setCowName(e.target.value)}
            placeholder="  CowName"
            required
            className="form-control rounded-pill border-0 shadow-sm  text-primary"
          />
        </div>
        <br />

        <div className="form-group mb-3">
          <span class="required-field"></span>

          <input
            type="text"
            name="cowAge"
            onChange={(e) => setCowAge(e.target.value)}
            placeholder="  CowAge"
            required
            className="form-control rounded-pill border-0 shadow-sm  text-primary"
          />
        </div>
        <br />

        <div className="form-group mb-3">
          <span class="required-field"></span>

          <input
            type="text"
            name="breed"
            onChange={(e) => setBreed(e.target.value)}
            placeholder="  Breed"
            required
            className="form-control rounded-pill border-0 shadow-sm  text-primary"
          />
        </div>
        <br />

        <div className="form-group mb-3">
          <span class="required-field"></span>

          <input
            type="text"
            name="capacity"
            onChange={(e) => setCapacity(e.target.value)}
            placeholder="  Capacity"
            required
            className="form-control rounded-pill border-0 shadow-sm  text-primary"
          />
        </div>
        <br />

        <div className="form-group mb-3">
          <span class="required-field"></span>

          <input
            type="text"
            name=" Gestation"
            onChange={(e) => setGestation(e.target.value)}
            placeholder="  Gestation"
            required
            className="form-control rounded-pill border-0 shadow-sm  text-primary"
          />
        </div>
        <br />

        <button
          onClick={addProduct}
          className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm black"
        >
          Addproduct
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
