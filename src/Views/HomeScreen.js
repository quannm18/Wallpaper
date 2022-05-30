import { StatusBar } from 'expo-status-bar';
import React,{ useEffect, useState } from 'react';
import { Button, FlatList, Image, RefreshControl, StyleSheet, Text, View } from 'react-native';
import RowImg from './Rows/RowImg';

console.disableYellowBox = true;
export default function HomeScreen({ navigation }) {
  const [myList,setMyList] = useState([]);
  const [per_page, setPerPage] = useState(10);
  const [Refreshing, setRefreshing] = useState(false);
  const LINK = `https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=cd60896a59d20b49a037d660c281368d&user_id=55910595%40N05&extras=description%2C+license%2C+date_upload%2C+date_taken%2C+owner_name%2C+icon_server%2C+original_format%2C+last_update%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&per_page=${per_page}&page=1&format=json&nojsoncallback=1`;
  const getImgFromApi = () => {
    fetch(LINK)
      .then((response) => response.json())
      .then((json) => {
        setMyList(json.photos.photo);
        console.log(myList.length);
        return json.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  function onRefresh(){
    setRefreshing(true);
    setRefreshing(false);
  }
  useEffect(getImgFromApi,[])
  return (
    <View style={styles.container}>
      <FlatList
      refreshControl={
                  <RefreshControl
                    refreshing = {Refreshing}
                    onRefresh={onRefresh}
                  />
                }
          style={{flexGrow: 0}}
          numColumns={2}
          data={myList}
          renderItem={({item,index}) => {
            return (
              <RowImg
                source={item.url_z}
                views={item.views}
                key={index}
                url_z= {item.url_z}
                width = {item.width_z}
                height = {item.height_z}
                onPress={() => navigation.navigate('DetailScreen',{'imageData':item})}
              />
            );
          }}
      onEndReached={()=>{
        getImgFromApi()
        setRefreshing(true);
        setTimeout(() => {
        setPerPage((per_page)=> per_page+20)
        setRefreshing(false)
          }, 500);
        }  
      }
      onEndReachedThreshold = {0.1}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#000a12'
  },
});
