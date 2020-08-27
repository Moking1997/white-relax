import React from "react";
import styled from "styled-components";
import MyIcon from "./Icons";
const Card = (props) => (
  <Container>
    <Cover>
      <Image />
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <MyIcon name={props.icon} width={44} height={44} />
      <Wrapper>
        <Caption>{props.caption}</Caption>
        <Subtitle>{props.subtitle}</Subtitle>
      </Wrapper>
    </Content>
  </Container>
);

export default Card;
const Container = styled.View`
  background: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin-left: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
`;
const Cover = styled.View`
  height: 180px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;
const Image = styled.Text`
  background-color: blue;
  width: 100%;
  height: 180px;
  position: absolute;
`;
const Title = styled.Text`
  color: white;
  font-size: 28px;
  margin-left: 20px;
  margin-top: 20px;
  font-weight: 600;
  width: 170px;
`;
const Content = styled.View`
  height: 80px;
  flex-direction: row;
  margin-left: 20px;
  align-items: center;
`;
const Logo = styled.View`
  width: 44px;
  height: 44px;
  background-color: #111;
`;
const Wrapper = styled.View`
  margin-left: 10px;
`;
const Caption = styled.Text`
  font-size: 20px;
`;
const Subtitle = styled.Text`
  color: #999;
  text-transform: uppercase;
`;
