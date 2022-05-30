import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
  Platform,
  Image
} from "react-native";
import React from "react";

console.disableYellowBox = true;
// import RNFetchBlob from 'react-native-fetch-blob';
export default class FloatingActionButton extends React.Component {
  animation = new Animated.Value(0);

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;

    Animated.spring(this.animation, {
      toValue,
      friction: 5,
    }).start();

    this.open = !this.open;
  };

  render() {
    const opacity = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1],
    });
    const pinStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -80],
          }),
        },
      ],
    };
    const heartStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -200],
          }),
        },
      ],
    };
    const thumbStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -140],
          }),
        },
      ],
    };

    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"],
          }),
        },
      ],
    };
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableWithoutFeedback
          onPress={this.props.oneClick}
        >
          <Animated.View
            style={[styles.button, styles.secondary, opacity, heartStyle]}
          >
            <Text
              style={[
                {
                  backgroundColor: "black",
                  width: 80,
                  position: "absolute",
                  left: -80,
                  color: "white",
                  alignItems: "flex-start",
                },
              ]}
            >
              {this.props.item.width_l}x{this.props.item.height_l}
            </Text>
            <Image source={require('../../Image/download.png')} style={styles.imageIcon}/>
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
        onPress={this.props.cClick}>
          <Animated.View
            style={[styles.button, styles.secondary, opacity, thumbStyle]}
          >
            <Text
              style={[
                {
                  backgroundColor: "black",
                  width: 80,
                  position: "absolute",
                  left: -80,
                  color: "white",
                  alignItems: "flex-start",
                },
              ]}
            >
              
              {this.props.item.width_c}x{this.props.item.height_c}
            </Text>
            <Image source={require('../../Image/download.png')} style={styles.imageIcon}/>
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
        
        onPress={this.props.zClick}>
          <Animated.View
            style={[styles.button, styles.secondary, opacity, pinStyle]}
          >
            <Text
              style={[
                {
                  backgroundColor: "black",
                  width: 80,
                  position: "absolute",
                  left: -80,
                  color: "white",
                  alignItems: "flex-start",
                },
              ]}
            >
              
              {this.props.item.width_z}x{this.props.item.height_z}
            </Text>
            <Image source={require('../../Image/download.png')} style={styles.imageIcon}/>
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View
            style={[styles.button, styles.menu, opacity, rotation]}
          >
            <Image source={require('../../Image/plus.png')} style={styles.imageIcon}/>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "#F02A48",
    shadowOpacity: 0.3,
    shadowOffset: { height: 10 },
    elevation: 3,
  },
  menu: {
    backgroundColor: "#F02A48",
  },
  secondary: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: "#F02A4B",
  },
  imageIcon: {
    width:24,
    height:24
  }
});
