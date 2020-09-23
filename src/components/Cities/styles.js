import styled from "styled-components";

const CityStyle = styled.div`
  margin: 2rem;

  > a {
    font-weight: bold;

    font-size: 1.5rem;

    border-left: 3px solid #fff;
    border-bottom: 3px solid #fff;

    padding: 0.3rem;
  }

  .title {
    margin: 3rem 0;
  }

  .cities {
    display: flex;
    justify-content: center;

    flex-wrap: wrap;
  }

  .city {
    display: inline-block;

    padding: 0.5rem;
    margin: 0.5rem;

    border: 1px solid #fff;
    border-radius: 0.5rem;
  }
`;

export default CityStyle;
