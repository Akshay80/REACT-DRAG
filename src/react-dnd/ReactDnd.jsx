import React from "react";
import Table from 'react-bootstrap/Table';
import "./styles.css";
import axios from "axios";

export default function ReactDnd() {
  return (
    <>
    
      <div className="reactTable">
        <div className="row reactBox">
          <div className="col-sm-9">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                5
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    10
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    15
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    All
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <input
              type="search"
              class="form-control"
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
            <tr id="1">
              <td>1</td>
              <td>
                <img
                  src="https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg"
                  alt=""
                />
              </td>
              <td>Russian</td>
              <td>
                <button className="btn btn-primary">Edit</button>
              </td>
            </tr>
            <tr id="2">
              <td>2</td>
              <td>
                <img
                  src="https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg"
                  alt=""
                />
              </td>
              <td>Russian</td>
              <td>
                <button className="btn btn-primary">Edit</button>
              </td>
            </tr>
            <tr id="3">
              <td>3</td>
              <td>
                <img
                  src="https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg"
                  alt=""
                />
              </td>
              <td>Russian</td>
              <td>
                <button className="btn btn-primary">Edit</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
