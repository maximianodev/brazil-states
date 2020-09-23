import styled from "styled-components";

const States = styled.div`
  h1 {
    margin: 3rem 0;
  }

  main {
    width: 50%;
    margin: 0 auto;

    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;

    flex-wrap: wrap;

    a {
      max-width: 300px;

      border: 1px solid #fff;
      border-radius: 0.5rem;

      padding: 1rem;
      margin: 1rem;
    }
  }
`;

export default States;
