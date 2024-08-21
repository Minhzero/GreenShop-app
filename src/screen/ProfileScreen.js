import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {useSelector} from 'react-redux'

const ProfileScreen = () => {
  // const id = useSelector(state => state.listTodo.id)
  // console.log(id);
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://cdnphoto.dantri.com.vn/DO0hQW1G1ALmbo4TvnihTMx4Qxo=/thumb_w/1020/2023/12/11/2024-lamborghini-revuelto-opera-unica-02-65723df4ae4ef-crop-1702290006551.jpeg' }} // Example image URI
          style={styles.avatar}
        />
        <Text style={styles.username}>userhihi</Text>
        {/* <Text style={styles.userBio}>Software Developer</Text> */}
      </View>
      <View style={styles.profileDetails}>
        <Text style={styles.detailItem}>Email: minhzero@gmail.com</Text>
        <Text style={styles.detailItem}>Phone: 1234456679</Text>
        {/* <Text style={styles.detailItem}>Location: New York, USA</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
    padding: 20,
    paddingTop: 100,
    backgroundColor: '#fff'
  },
  profileHeader: {
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  username: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userBio: {
    fontSize: 25,
    color: 'gray',
    textAlign: 'center',
  },
  profileDetails: {
    width: '100%',
    marginTop: 20,
    marginLeft:30
  },
  detailItem: {
    fontSize: 20,
    marginBottom: 10,
    marginTop:10
  },
});

export default ProfileScreen;
