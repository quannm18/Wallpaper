import {Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SplashScreen from './src/Views/SplashScreen';
import HomeScreen from './src/Views/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import AndroidGroup from './src/Views/AndroidGroup';
import AboutScreen from './src/Views/AboutScreen';
import DetailScreen from './src/Views/DetailScreen';
const Stack = createNativeStackNavigator();

console.disableYellowBox = true;
export default function App() {
  const [visible, setVisible] = useState(false);
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {showSplashScreen ? (
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : null}

        <Stack.Screen
          style={{backgroundColor: '#000a12'}}
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'QuanNMPH14304',
            headerStyle: {
              backgroundColor: '#000a12',
            },
            headerTitleStyle: {color: 'white'},
            headerRight: () => (
              <View>
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={visible}
                  onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setVisible(!visible);
                  }}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <TouchableOpacity
                        style={[styles.buttonClose]}
                        onPress={() => {
                          setVisible(!visible)
                          
                          navigation.navigate('AndroidGroup')
                        }}>
                        <Text style={styles.textStyle}>Android Group</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          styles.buttonClose,
                          {
                            borderBottomWidth: 0,
                          },
                        ]}
                        onPress={() => {
                          setVisible(!visible)
                          navigation.navigate('AboutScreen')
                        }}>
                        <Text style={styles.textStyle}>About</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
                <TouchableOpacity onPress={() => {setVisible(true)}}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 24, color: 'white'}}>
                    ⁝
                  </Text>
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="AndroidGroup" component={AndroidGroup} options={{
            headerTitleStyle: {color: 'white'},title: 'Contact with us',
            headerStyle: {
              backgroundColor: '#263238',
            },
            headerTintColor: 'white'
            }} />
        <Stack.Screen name="AboutScreen" component={AboutScreen}
         options={{
            headerTitleStyle: {color: 'white'},title: 'About',
            headerStyle: {
              backgroundColor: '#263238',
            },
            headerTintColor: 'white'
            }}/>
      </Stack.Navigator>
      
      <StatusBar backgroundColor="black" barStyle="dark-content"/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginTop: 22,
  },
  modalView: {
    width:120,
    margin: 20,
    backgroundColor: "#190E26",
    borderRadius: 20,
    // padding: 35,
    alignItems: "center",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    borderBottomWidth:1,
    borderColor:'white',
    width:100,
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: "white",
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
