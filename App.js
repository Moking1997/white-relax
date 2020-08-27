import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

import MyIcon from "./components/Icons";
import Menu from "./components/Menu";
import Logo from "./components/Logo";
import Card from "./components/Card";
import Course from "./components/Course";

export default function App() {
  const logos = [
    {
      icon: "rainy",
      text: "Framer X",
    },
    {
      icon: "leafage",
      text: "React",
    },
    {
      icon: "rainy",
      text: "Framer X",
    },
    {
      icon: "leafage",
      text: "React",
    },
  ];

  const cards = [
    {
      icon: "leafage",
      title: "React National",
      caption: "React Native",
      subtitle: "welcome back",
    },
    {
      icon: "rainy",
      title: "React National",
      caption: "React Native",
      subtitle: "welcome back",
    },
    {
      icon: "leafage",
      title: "React National",
      caption: "React Native",
      subtitle: "welcome back",
    },
    {
      icon: "rainy",
      title: "React National",
      caption: "React Native",
      subtitle: "welcome back",
    },
  ];
  const courses = [
    {
      icon: "leafage",
      title: "React National",
      caption: "React Native",
      name: "White relax",
      subtitle: "welcome back",
    },
    {
      icon: "rainy",
      title: "React National",
      caption: "React Native",
      name: "White relax",
      subtitle: "welcome back",
    },
    {
      icon: "leafage",
      title: "React National",
      caption: "React Native",
      name: "White relax",
      subtitle: "welcome back",
    },
    {
      icon: "rainy",
      title: "React National",
      caption: "React Native",
      name: "White relax",
      subtitle: "welcome back",
    },
  ];

  return (
    <Container>
      <Menu />
      <SafeAreaView>
        <ScrollView style={{ height: "100%" }}>
          <TitleBar>
            <Avatar>
              <MyIcon name="rainy" width={40} height={40} color="#00a1d6" />
            </Avatar>
            <Title>Welcome back</Title>
            <Name>Mo king</Name>
            <MyIcon
              name="notifications"
              width={30}
              height={30}
              color="#00a1d6"
              style={{
                position: "absolute",
                right: 20,
                top: 10,
              }}
            />
          </TitleBar>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingBottom: 30 }}
            style={{
              marginTop: 30,
              paddingBottom: 10,
            }}
          >
            {logos.map((logo, index) => (
              <Logo key={`logo-${index}`} text={logo.text} icon={logo.icon} />
            ))}
          </ScrollView>
          <Subtitle>Continue Learning</Subtitle>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingBottom: 20 }}
          >
            {cards.map((card, index) => (
              <Card
                key={`card-${index}`}
                icon={card.icon}
                title={card.title}
                caption={card.caption}
                subtitle={card.subtitle}
              />
            ))}
          </ScrollView>
          <Subtitle>Continue Course</Subtitle>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            style={{ paddingBottom: 20 }}
          >
            {courses.map((card, index) => (
              <Course
                key={`card-${index}`}
                icon={card.icon}
                title={card.title}
                caption={card.caption}
                subtitle={card.subtitle}
                name={card.name}
              />
            ))}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;
const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;
const Avatar = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 20px;
  width: 50px;
  height: 50px;
  border: 1px solid #999;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;
const Name = styled.Text`
  font-size: 16px;
  color: #111;
  font-weight: 500;
`;
const Subtitle = styled.Text`
  color: #b8bece;
  margin-top: 30px;
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 15px;
`;
