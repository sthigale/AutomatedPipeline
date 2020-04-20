import React from "react";
import Select from "react-select";

class ConfigureStage extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOption: null,
      Target: [
        { name: "TT1", value: "Complete" },
        { name: "TT2", value: "Status" }
      ]
    };
  }

  getSelectedTargetValue=(id)=>{
  console.log('id',id);
  
  this.setState({
    selectedOption:id.name
  });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <label>Target </label>
            <Select
              className="react-selectcomponent reactSelect"
              value={this.state.selectedOption}
              placeholder="Choose"
              onChange={id => {
                this.getSelectedTargetValue(id);
              }}
              getOptionLabel={option => `${option.name} ,${option.value}`}
              options={this.state.Target}
            />
          </div>
          <div className="col-sm-3">
            <label>Source </label>

            <Select
              className="react-selectcomponent"
              placeholder="Choose"
              onChange={id => {
                this.getSelectedTargetValue(id);
              }}
              getOptionLabel={option => `${option.name}`}
            />
          </div>
          <div className="col-sm-3">
            <label>Target CDM Total </label>

            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>28</td>
                  <td>5</td>
                  <td>28</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-3">
            <label>Mapped Auto Manual Unmap</label>

            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>18</td>
                  <td>10</td>
                  <td>8</td>
                  <td>8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br></br>
        <div>
          <label>Field Mappings</label>
          <table className="table table-bordered mt-3">
            <thead className="thead-light">
              <tr>
                <th>Target Datatype</th>
                <th>Mapping %</th>
                <th>Source Datatype</th>
                <th>Change Reason</th>
                <th>Config Usage Todos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> TT1 Col1 (date)</td>
                <td> TT1 Col1 (date)</td>
                <td> TT1 Col1 (date)</td>
                <td> TT1 Col1 (date)</td>
                <td> TT1 Col1 (date)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ConfigureStage;