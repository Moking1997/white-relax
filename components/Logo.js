import React from "react";
import styled from "styled-components";
import MyIcon from "./Icons";
const Logo = (props) => (
  <Container>
    <MyIcon name={props.icon} width={25} height={25} />
    <Title>{props.text}</Title>
  </Container>
);

export default Logo;
const Container = styled.View`
  background: white;
  border-radius: 14px;
  margin-left: 20px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  box-shadow: 2px 5px 8px rgba(0, 0, 0, 0.1);
`;
const Title = styled.Text`
  font-weight: 600;
  margin-left: 10px;
`;
