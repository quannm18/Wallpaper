import { Image, LogBox, ScrollView, StatusBar, StyleSheet, Text, View,PermissionsAndroid } from 'react-native';
import React from 'react';
import FloatingActionButton from './Rows/FloatingActionButton';

import RNFetchBlob from 'rn-fetch-blob';
export default function DetailScreen({route}) {
  const {imageData} = route.params;
  console.disableYellowBox = true;

  const checkPermission = async (fileUrl) => {
    
    // Function to check the platform
    // If Platform is Android then check for permissions.

    if (Platform.OS === 'ios') {
      downloadFile(fileUrl);
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message:
              'Application needs access to your storage to download File',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Start downloading
          downloadFile(fileUrl);
          console.log('Storage Permission Granted.');
        } else {
          // If permission denied then show alert
          Alert.alert('Error','Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.log("++++"+err);
      }
    }
  };

  const downloadFile = (fileUrl) => {
   
    // Get today's date to add the time suffix in filename
    let date = new Date();
    // File URL which we want to download
    let FILE_URL = fileUrl;    
    // Function to get extention of the file url
    let file_ext = getFileExtention(FILE_URL);
   
    file_ext = '.' + file_ext[0];
   
    // config: To get response by passing the downloading related options
    // fs: Root directory path to download
    const { config, fs } = RNFetchBlob;
    let RootDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        path:
          RootDir+
          '/file_' + 
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          file_ext,
        description: 'downloading file...',
        notification: true,
        // useDownloadManager works with Android only
        useDownloadManager: true,   
      },
    };
    config(options)
      .fetch('GET', FILE_URL)
      .then(res => {
        // Alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        alert('File Downloaded Successfully.');
      });
  };

  const getFileExtention = fileUrl => {
    // To get the file extension
    return /[.]/.exec(fileUrl) ?
             /[^.]+$/.exec(fileUrl) : undefined;
  };
  return (
    <View style={styles.container}>
      <ScrollView justifyContent= 'center' alignItems= 'center'>
        <Image style={styles.imageMain} source={{uri: imageData.url_z}}/>
        <Text style={styles.title}>{imageData.title}</Text>
        <Text style={styles.description}>   {imageData.description._content.substring(0,imageData.description._content.indexOf("<a"))}</Text>
      </ScrollView>
      <FloatingActionButton  oneClick={()=>{checkPermission(imageData.url_l)}} cClick={()=>{checkPermission(imageData.url_c)}} zClick={()=>{checkPermission(imageData.url_z)}} item={imageData} style={{bottom:80,right:80}} onPress={alert}/>
      <StatusBar style="light"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#000a12'
  },
  imageMain: {
    paddingTop:32,
    width:'100%',
    height:null,
    aspectRatio:1,
    resizeMode:'contain'
  },
  title: {
    padding:16,
    color:'white',
    fontSize:24,
    fontWeight:'bold'
  },
  description:{
    padding:16,
    color:'white',
  }
})