import React, { Component } from "react";
import axios from "axios";

const CalegItem = props => {
  return (
    <table className="table table-bordered" style={{ marginBottom: "20px" }}>
      <tr>
        <td>{props.caleg.name}</td>
        <td rowSpan="2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => props.addSuara(props.caleg)}
          >
            Tambah Suara (+)
          </button>
        </td>
      </tr>
      <tr style={{ border: "1px solid black" }}>
        <td>Perolehan Suara: {props.caleg.earned_vote}</td>
      </tr>
    </table>
  );
};

class App extends Component {
  state = {
    daftarCaleg: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:4001/caleg")
      .then(res => {
        this.setState({ daftarCaleg: res.data.data });
        console.log(res.data.data);
      })
      .catch(err => console.log(err));
  }

  addSuara = caleg => {
    axios
      .post("http://localhost:4001/caleg/" + caleg.id, caleg)
      .then(res => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  calegList = () => {
    return this.state.daftarCaleg.map(caleg => {
      return <CalegItem caleg={caleg} addSuara={this.addSuara} />;
    });
  };

  render() {
    return <div>{this.calegList()}</div>;
  }
}

export default App;
