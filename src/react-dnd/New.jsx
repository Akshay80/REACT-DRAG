import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "./styles.css";
import axios from "axios";
import $ from "jquery";

export default function ReactDnd() {
  useEffect(() => {
    test();
  }, []);

  const [apiRes, setApiRes] = useState([]);
  const test = async () => {
    const yourConfig = {
      headers: {
        Authorization:
          "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFETUlOLTAwMDAwMDAwMiIsImZhY2Vib29rSWQiOm51bGwsImVtYWlsIjoibWV5dXNpbmdhcG9yZUBnbWFpbC5jb20iLCJ1c2VyUm9sZSI6NCwiaXNHdWVzdCI6ZmFsc2UsImhhc1Byb2ZpbGUiOnRydWUsInVuaXF1ZUtleSI6ZmFsc2UsImlhdCI6MTY0OTkzNjkxNiwiZXhwIjozMjI3ODE2OTE2fQ.FGU0dfj7RIafQOM1fAG2g9XqQeJy3ui6vLiDbM7WtX4",
      },
    };
    await axios
      .get("http://13.213.151.153:8081/api/common/category", yourConfig)
      .then((response) => {
        setApiRes(response.data.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="reactTable">
        <div className="row reactBox">
          <div className="col-sm-9">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                5
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    10
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    15
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    All
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </div>
        </div>
        <Table striped bordered hover id="table-1">
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Image</th>
              <th>Cuisine</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {apiRes.map((item, index) => ( 
              <tr key={item.id} id={`${index + 1}`}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={`http://13.213.151.153:8081/${item.MediaObjects.map(
                      (element) => element.imageUrl
                    )}`}
                    alt=""
                  />
                </td>
                <td>{item.name}</td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
