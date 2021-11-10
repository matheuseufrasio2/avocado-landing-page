import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  background-color: black;
  color: white;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 100px;
  font-size: 18px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const ListItem = styled.li`
  display: inline;
  font-size: 14px;
  color: lightgray;
  cursor: pointer;

  & + li {
    margin-left: 30px;
  }
`;
