import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";
export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView style={{ height: "100%" }}>
          <TitleBar>
            <Avatar />
            <Title>Welcome back</Title>
            <Name>Mo king</Name>
          </TitleBar>
          <Subtitle>Continue Learning</Subtitle>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingBottom: 30 }}
          >
            <Card
              title="React National"
              caption="React Native"
              subtitle="welcome back"
            />
            <Card
              title="React National"
              caption="React Native"
              subtitle="welcome back"
            />
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
  width: 44px;
  height: 44px;
  background-color: #111;
  border-radius: 22px;
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
  margin-top: 50px;
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 15px;
`;
