import React from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import States from "./styles";

export default class Main extends React.Component {
  state = {
    countryStates: [],
  };

  componentDidMount() {
    this.loadApi();
  }

  loadApi = async () => {
    try {
      const response = await api.get(`/estados`);

      this.setState({ countryStates: response.data });
    } catch (err) {
      console.warn(err);
    }
  };

  render() {
    const { countryStates } = this.state;
    return (
      <States>
        <h1>Estados do Brasil</h1>
        <main>
          {countryStates.map((state) => (
            <Link to={`/${state.id}`} key={state.id}>
              {state.nome} - {state.sigla}
            </Link>
          ))}
        </main>
      </States>
    );
  }
}
