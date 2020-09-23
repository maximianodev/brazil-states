import React from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import CityStyle from "./styles";

export default class Cities extends React.Component {
  state = {
    cities: [],
    uf: [],
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    try {
      const response = await api.get(`/estados/${id}/distritos`);
      const response2 = await api.get(`/estados/${id}`);

      this.setState({ cities: response.data, uf: response2.data });
    } catch (err) {
      console.warn(err);
    }
  }

  render() {
    const { cities, uf } = this.state;
    return (
      <CityStyle>
        <Link to="/">Home</Link>

        <div className="title">
          <h1>{uf.nome}</h1>
          <p>{cities.length} Resultados</p>
        </div>

        <div className="cities">
          {cities.map((city) => (
            <div key={city.id} className="city">
              <h3>{city.nome}</h3>
              <p>Região - {city.municipio.microrregiao.nome}</p>
            </div>
          ))}
        </div>
      </CityStyle>
    );
  }
}
