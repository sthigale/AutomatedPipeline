import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import RouterComponet from "./Routing";
function App() {
  return (
    <div className="custom-section">
      <div className="card">
        <div className="card-header text-center font-weight-bolder">
          <span> Fully Automated Pipelines</span>
        </div>
        <div className="card-body">
          <div
            className="col-sm-12 
            "
          >
            <ul className="nav nav-tabs ">
              <li className="col-sm-2">
                <Link to={`/`}> 1.Source</Link>
              </li>
              <li className="col-sm-2">
                <Link to={`/Component/Target`}>2.Target</Link>
              </li>
              <li className="col-sm-2">
                <Link to={`/Component/HistoricalSimilarities`}>
                  3.Historical Similarities
                </Link>
              </li>
              <li className="col-sm-2
             ">
                <Link to={`/Component/ConfigureStage`}>
                  4.Configure & Stage (Temp)
                </Link>
              </li>
              <li className="col-sm-2">
                <Link to={`/Component/ValidateAndProcess`}>
                  5.Validate & Process
                </Link>
              </li>
            </ul>
          </div>
          <br></br>
          <div className="col-sm-12">
            <div className=" view-port-height">
              <RouterComponet></RouterComponet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
