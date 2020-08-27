import React from "react";
import { Animated, Dimensions, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

const screenHeight = Dimensions.get("window").height;
class Menu extends React.Component {
  state = {
    top: new Animated.Value(screenHeight),
  };

  componentDidMount() {
    Animated.spring(this.state.top, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  }

  toggleMenu = () => {
    Animated.spring(this.state.top, {
      toValue: screenHeight,
      useNativeDriver: false,
    }).start();
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover>
          <Image></Image>
          <Title>Moking</Title>
          <Subtitle>welcome to my first app</Subtitle>
        </Cover>
        <TouchableOpacity
          onPress={this.toggleMenu}
          style={{
            position: "absolute",
            top: 120,
            marginLeft: -12,
            left: "50%",
          }}
        >
          <CloseView>
            <AntDesign name="close" size={24} color="black" />
          </CloseView>
        </TouchableOpacity>

        <Content />
      </AnimatedContainer>
    );
  }
}

export default Menu;
const Container = styled.View`
  background: #fefefe;
  width: 100%;
  height: 100%;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: #fff;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  height: 142px;
  background: black;
  align-items: center;
  justify-content: center;
`;
const Image = styled.View`
  height: 100%;
  width: 100%;
  position: absolute;
  background: blue;
`;
const Title = styled.Text`
  color: #fff;
  font-size: 20px;
`;
const Subtitle = styled.Text`
  color: #fefefe;
  font-size: 16px;
  margin-top: 15px;
`;

const Content = styled.View`
  height: ${screenHeight};
`;
