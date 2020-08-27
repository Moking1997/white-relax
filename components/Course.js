import React from "react";
import styled from "styled-components";
import MyIcon from "./Icons";
const Course = (props) => (
  <Container>
    <Cover>
      <Image />
      <Icon>
        <MyIcon name={props.icon} width={40} height={40} color="#647aa1" />
      </Icon>
      <Subtitle>{props.title}</Subtitle>
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Avatar>
        <MyIcon name={props.icon} width={40} height={40} />
      </Avatar>
      <Name>{props.name}</Name>
      <Caption>{props.caption}</Caption>
    </Content>
  </Container>
);

export default Course;
const Container = styled.View`
  background: white;
  width: 315px;
  height: 300px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
`;
const Cover = styled.View`
  height: 220px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  justify-content: flex-end;
`;
const Image = styled.Text`
  background-color: #647aa1;
  width: 100%;
  height: 220px;
  position: absolute;
`;
const Icon = styled.Text`
  left: 50%;
  top: 30%;
  margin-left: -22px;
  position: absolute;
`;
const Avatar = styled.Text`
  position: absolute;
  left: 0;
`;
const Subtitle = styled.Text`
  margin-left: 20px;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
`;
const Title = styled.Text`
  color: white;
  font-size: 28px;
  font-weight: 600;
  width: 170px;
  margin-left: 20px;
  margin-bottom: 20px;
`;
const Content = styled.View`
  height: 80px;
  margin-left: 20px;
  align-items: center;
  justify-content: center;
`;

const Caption = styled.Text`
  color: #999;
  font-size: 12px;
  margin-left: -100px;
`;

const Name = styled.Text`
  color: #222;
  font-size: 18px;
  margin-left: -60px;
  text-transform: uppercase;
`;
