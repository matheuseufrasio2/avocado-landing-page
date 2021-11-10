import styled from "styled-components";

export const Container = styled.div`
  width: 100%auto;
  height: calc(100vh - 50px);

  display: flex;
  overflow: hidden;
  position: relative;
`;
export const Card = styled.div`
  position: relative;
  flex: 1;
  padding: 100px;
  padding-right: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    font-size: 50px;

    span {
      color: green;
    }
  }

  p {
    font-size: 20px;
    margin: 0;
  }

  button {
    border: none;
    background-color: green;
    color: white;
    font-weight: bold;
    width: 100px;
    padding: 20px 1px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
