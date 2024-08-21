import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatGrid } from 'react-native-super-grid';


const WiDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const HomeScreen = ({ navigation }) => {
  const image = [
    'https://images.pexels.com/photos/1382195/pexels-photo-1382195.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://bonsaidep.vn/ckfinder/userfiles/images/cay-canh-nghinh-phong.jpg',
    'https://vuonnhat.net.vn/wp-content/uploads/2019/12/cay-moi-tai-vuon-nhat-3.jpg'
  ]
  const [imageSlide, setImageSlide] = useState(0);

  const onchange = (nativeEvent) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide != imageSlide) {
      setImageSlide(slide);
    }

  }
  const [items, setItems] = useState([
    {
      image: 'https://vuonnhat.net.vn/wp-content/uploads/2019/12/cay-moi-tai-vuon-nhat-3.jpg',
      name: 'TURQUOISE', code: '#1abc9c'
    },
    {
      image: 'https://vuonnhat.net.vn/wp-content/uploads/2019/12/cay-moi-tai-vuon-nhat-3.jpg',
      name: 'EMERALD', code: '#2ecc71'
    },
    {
      image: 'https://vuonnhat.net.vn/wp-content/uploads/2019/12/cay-moi-tai-vuon-nhat-3.jpg',
      name: 'PETER RIVER', code: '#3498db'
    },
    {
      image: 'https://vuonnhat.net.vn/wp-content/uploads/2019/12/cay-moi-tai-vuon-nhat-3.jpg',
      name: 'AMETHYST', code: '#9b59b6'
    },
    {
      image: 'https://vuonnhat.net.vn/wp-content/uploads/2019/12/cay-moi-tai-vuon-nhat-3.jpg',
      name: 'WET ASPHALT', code: '#34495e'
    },
    {
      image: 'https://vuonnhat.net.vn/wp-content/uploads/2019/12/cay-moi-tai-vuon-nhat-3.jpg',
      name: 'GREEN SEA', code: '#16a085'
    },
    {
      image: 'https://vuonnhat.net.vn/wp-content/uploads/2019/12/cay-moi-tai-vuon-nhat-3.jpg',
      name: 'NEPHRITIS', code: '#27ae60'
    },
    {
      image: 'https://vuonnhat.net.vn/wp-content/uploads/2019/12/cay-moi-tai-vuon-nhat-3.jpg',
      name: 'BELIZE HOLE', code: '#2980b9'
    },
    {
      image: 'https://vuonnhat.net.vn/wp-content/uploads/2019/12/cay-moi-tai-vuon-nhat-3.jpg',
      name: 'WISTERIA', code: '#8e44ad'
    },
    {
      image: 'https://vuonnhat.net.vn/wp-content/uploads/2019/12/cay-moi-tai-vuon-nhat-3.jpg',
      name: 'MIDNIGHT BLUE', code: '#2c3e50'
    },
    {
      image: 'https://vuonnhat.net.vn/wp-content/uploads/2019/12/cay-moi-tai-vuon-nhat-3.jpg',
      name: 'SUN FLOWER', code: '#f1c40f'
    },
    {
      image: 'https://vuonnhat.net.vn/wp-content/uploads/2019/12/cay-moi-tai-vuon-nhat-3.jpg',
      name: 'CARROT', code: '#e67e22'
    },
    {
      image: 'https://vuonnhat.net.vn/wp-content/uploads/2019/12/cay-moi-tai-vuon-nhat-3.jpg',
      name: 'ALIZARIN', code: '#e74c3c'
    },
    {
      image: 'https://vuonnhat.net.vn/wp-content/uploads/2019/12/cay-moi-tai-vuon-nhat-3.jpg',
      name: 'CLOUDS', code: '#ecf0f1'
    },
    {
      image: 'https://vuonnhat.net.vn/wp-content/uploads/2019/12/cay-moi-tai-vuon-nhat-3.jpg',
      name: 'CONCRETE', code: '#95a5a6'
    },
    {
      image: 'https://vuonnhat.net.vn/wp-content/uploads/2019/12/cay-moi-tai-vuon-nhat-3.jpg',
      name: 'ORANGE', code: '#f39c12'
    },
    {
      image: 'https://vuonnhat.net.vn/wp-content/uploads/2019/12/cay-moi-tai-vuon-nhat-3.jpg',
      name: 'PUMPKIN', code: '#d35400'
    },
    {
      image: 'https://vuonnhat.net.vn/wp-content/uploads/2019/12/cay-moi-tai-vuon-nhat-3.jpg',
      name: 'POMEGRANATE', code: '#c0392b'
    },
    {
      image: 'https://vuonnhat.net.vn/wp-content/uploads/2019/12/cay-moi-tai-vuon-nhat-3.jpg',
      name: 'SILVER', code: '#bdc3c7'
    },
    {
      image: 'https://vuonnhat.net.vn/wp-content/uploads/2019/12/cay-moi-tai-vuon-nhat-3.jpg',
      name: 'ASBESTOS', code: '#7f8c8d'
    },
  ]);
  const [data, setData] = useState([])

  const priceProduct = null;


  useEffect(() => {

    fetch('http://10.24.10.125:3000/product')
      .then(rep => rep.json())
      .then(data => {
        setData(data);
        console.log(data);
        // setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    // http://192.168.23.101:3000/user

    fetch('http://192.168.0.105:3000/product')
      .then(rep => rep.json())
      .then(data => {
        setData(data);
        console.log(data);
        // setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', width: '90%', height: 50, backgroundColor: 'white', borderRadius: 20, margin: 10, justifyContent: 'space-between', alignItems: 'center' }} >
        <TouchableOpacity onPress={() => {
          navigation.navigate('search');
        }}>
          <View style={{ margin: 10, flexDirection: 'row' }}>
            <Image style={{ width: 25, height: 25, }}
              source={require('../image/search.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('Cart') }}>
          <View style={{ margin: 10, flexDirection: 'row' }}>

            <Image style={{ width: 25, height: 25 }} source={require('../image/cart.png')} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.slideContainer}>
        <ScrollView onScroll={({ nativeEvent }) => onchange(nativeEvent)}

          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.slide}
        >
          {
            image.map((e, index) =>
              <Image
                key={e}
                resizeMode='stretch'
                style={styles.slide}
                source={{ uri: e }}
              >

              </Image>
            )
          }

        </ScrollView>
        <View style={styles.slideBottom}>
          {
            image.map((e, index) =>
              <Text
                key={e}
                style={imageSlide == index ? styles.doIcon : styles.dotI}
              >●</Text>
            )
          }

        </View>
      </View>


      <FlatGrid
        itemDimension={130}
        data={data}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        keyExtractor={item => item.id}
        spacing={10}
        renderItem={({ item }) => (

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Details',
                {
                  itemImage: item.image, itemName: item.name, itemPrice: item.price, itemDes: item.description,
                  itemSize: item.size, itemOrigin: item.origin

                })}>
            <View style={[styles.itemContainer, { backgroundColor: 'white' }]}>
              <View style={{ alignItems: 'center', margin: 5 }}>
                <Image
                  style={{ width: 140, height: 100 }}
                  source={{ uri: item.image }}
                >
                </Image>

              </View>
              <View style={{ margin: 5 }}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCode}>{item.price}.000</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />


    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  slideContainer: {
    width: '100%',
    height: HEIGHT * 0.25,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,


  },
  slide: {
    width: 380,
    height: HEIGHT * 0.25,
    borderRadius: 20

  },
  slideBottom: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  doIcon: {
    margin: 3,
    color: 'red',
  },
  dotI: {
    margin: 3,
    color: 'white',
  },
  gridView: {
    marginTop: 10,
    flex: 1,
    marginLeft: 8
  },
  itemContainer: {
    width: 170,
    borderRadius: 5,
    padding: 10,
    height: 200,
    borderRadius: 10


  },
  itemName: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 16,
    color: 'green',
  },
})