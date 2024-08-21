import { Alert, Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify';



const DetailsScreen = ({ route, navigation }) => {
  const { itemImage } = route.params;
  const { itemName } = route.params;
  const { itemPrice } = route.params;
  const { itemDes } = route.params;
  const { itemSize } = route.params;
  const { itemOrigin } = route.params;

  
  const [counter, setCounter] = useState(1);
  const [total, setTotal] = useState(itemPrice);

 
  const [pressed, setPressed] = useState(false);



  const handlePress = () => {
    // Đảo ngược giá trị của biến trạng thái khi người dùng ấn nút
    setPressed(!pressed);
  };


  const xg = useCallback(()=>{
    if (counter > 1) {
      setCounter(counter - 1);
      setTotal(itemPrice * (counter - 1))
    }
  },[counter])
  const len = useCallback(()=>{
    setCounter(counter+1)
    setTotal(itemPrice *(counter + 1))
  },[counter])
  

  const addToCart = ()=>{
    const newCart={
      name:itemName,
      price:total,
      image:itemImage,
      stock:counter
    }
  
    
      fetch('http://192.168.0.105:3000/cart',{
        method:'POST',
        body: JSON.stringify(newCart)
  
      }).then(rep =>{
        if(rep.ok){
          Alert.alert('them thanh cong')
        }else{
          console.log('them ko thanh cong')

        }
      })
      
    
  }
  const formattedPrice = total === 0 ? '0' : total.toFixed(3);
  const priceProduct = itemPrice === 0 ? '0' : total.toFixed(3);

  
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#EEEEEE' }}>

      <View style={{ flexDirection: 'row', height: 50, backgroundColor: 'white', borderRadius: 20, margin: 10, justifyContent: 'space-between', alignItems: 'center' }} >
        <TouchableOpacity onPress={() => {
          navigation.navigate('Home');
        }}>
          <View style={{ margin: 10, flexDirection: 'row' }}>
            <Image style={{ width: 25, height: 25, }}
              source={require('../image/back.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}>
        <View style={{ margin: 10, flexDirection: 'row' }}>
        {pressed ? (
              <Image style={{ width: 25, height: 25 }} source={require('../image/back.png')} />
            ) : (
              <Image style={{ width: 25, height: 25 }} source={require('../image/tym.png')} />
            )}
        </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}

      >

        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <Image
            style={{ width: '100%', height: 250, borderRadius: 20 }}
            source={{ uri: itemImage }}
          />
        </View>


        <View style={{ flex: 1, borderRadius: 20, backgroundColor: 'white', marginLeft: 10, marginRight: 10, marginTop: 10, padding: 10 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: 'red', fontWeight: 'bold' }}>Chi tiết sản phẩm</Text>
          </View>
          <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', paddingTop: 10, paddingRight: 10, paddingBottom: 10 }}>{itemName} </Text>
          <Text style={{ color: 'red', fontSize: 25, fontWeight: 'bold', paddingRight: 10, paddingBottom: 10 }}>{priceProduct} </Text>
          <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', paddingRight: 10, paddingBottom: 10 }}>Kích cỡ : {itemSize} </Text>
          <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', paddingRight: 10, paddingBottom: 10 }}>Xuất xứ : {itemOrigin} </Text>
          <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>{itemDes}</Text>
          {/* <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Cây Snake Plant là một trong những loại cây dễ chăm sóc nhất.
            Chúng có thể chịu được nhiều điều kiện khác nhau về ánh sáng và nước, thậm chí còn phát triển tốt trong điều kiện thiếu ánh sáng và ít nước. </Text>
          <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Cây Snake Plant là một trong những loại cây dễ chăm sóc nhất.
            Chúng có thể chịu được nhiều điều kiện khác nhau về ánh sáng và nước, thậm chí còn phát triển tốt trong điều kiện thiếu ánh sáng và ít nước. </Text>
          <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Cây Snake Plant là một trong những loại cây dễ chăm sóc nhất.
            Chúng có thể chịu được nhiều điều kiện khác nhau về ánh sáng và nước, thậm chí còn phát triển tốt trong điều kiện thiếu ánh sáng và ít nước. </Text> */}

        </View>
      </ScrollView>

      <View style={{ height: 120, backgroundColor: 'white', borderRadius: 20, paddingTop: 10, paddingRight: 20, paddingBottom: 10, paddingLeft: 20, margin: 10 }}>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', paddingRight: 10, paddingBottom: 10 }}>Số lượng : </Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableOpacity style={{ width: 25, height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EEEEEE', margin: 5, borderRadius: 5 }}
            onPress={xg}
            >
              <Image style={{ width: 20, height: 20 }}
                source={require('../image/minus.png')}
              />
              {/* <Text style={{ fontSize: 15, }}>-</Text> */}

            </TouchableOpacity>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontSize: 20 }}>{counter}</Text>
            </View>
            <TouchableOpacity style={{ width: 25, height: 25, justifyContent: 'center', alignItems: 'center', margin: 5, borderRadius: 5 }}
            onPress={len}
            >
              {/* <Text style={{ fontSize: 15, color: 'white' }}>+</Text> */}
              <Image style={{ width: 20, height: 20 }}
                source={require('../image/plus.png')}
              />
            </TouchableOpacity>

          </View>

        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, justifyContent: 'center', paddingTop: 1 }}>
            <Text style={{ color: 'red', fontSize: 25, fontWeight: 'bold', paddingRight: 10, paddingBottom: 10 }}>{formattedPrice}</Text>
          </View>
          <TouchableOpacity
            style={{ width: 200, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', borderRadius: 10 }}
            onPress={addToCart}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Add to your cart</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>

  )
}

export default DetailsScreen

const styles = StyleSheet.create({})