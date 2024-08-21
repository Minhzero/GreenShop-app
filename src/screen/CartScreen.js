import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';

const CartScreen = ({ navigation }) => {
  const [cartData, setCartData] = useState([]);
  const [image, setimage] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [Title, setTitle] = useState('');
  const [total, setTotal] = useState('');
  console.log(image,stock,price,Title,total);




  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = async () => {
    try {
      const response = await fetch('http://192.168.0.105:3000/cart');
      const data = await response.json();
      setCartData(data);
      const totalPrice = getTotalPrice(); 
    setTotal(totalPrice); 
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  const updateCartItem = async (itemId, newQuantity, name, image, price) => {
    const updatePro = {
      name: name,
      price: price,
      image: image,
      stock: newQuantity
    };
    console.log('ItemId:', itemId);
    console.log('Update Data:', updatePro);
    try {
      const response = await fetch(`http://192.168.0.105:3000/cart/${itemId}`, {
        method: 'PUT',

        body: JSON.stringify({ stock: newQuantity, name: name, price: price, image: image }), // Only send the new quantity

      });
      if (response.ok) {
        console.log('Item quantity updated successfully');
        fetchCartData(); // Fetch updated cart data
      } else {
        console.error('Failed to update item quantity:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating item quantity:', error);
    }
  };

  const removeCartItem = async (itemId) => {
    try {
      const response = await fetch(`http://192.168.0.105:3000/cart/${itemId}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        console.log('Item removed successfully');
        fetchCartData();
      } else {
        console.error('Failed to remove item:', response.statusText);
      }
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };


  const handlelenQuantity = async (itemId, currentQuantity, name, image, price) => {
    console.log('Item ID:', itemId);
    if (currentQuantity > 0) {
      const updatedQuantity = currentQuantity + 1;
      await updateCartItem(itemId, updatedQuantity, name, image, price);
      setStock(updatedQuantity); 
    }
  };
  const handlexgQuantity = async (itemId, currentQuantity, name, image, price) => {
    console.log('Item ID:', itemId);
    if (currentQuantity > 1) {
      const updatedQuantity = currentQuantity - 1;
      await updateCartItem(itemId, updatedQuantity, name, image, price);
      setStock(updatedQuantity); 
    }
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartData.forEach(item => {
      totalPrice += item.price * item.stock;

    });
    
    return totalPrice;
  
  };

  return (
    <View style={{ flex: 1, margin: 10 }}>
      <View style={{ flexDirection: 'row', width: '90%', height: 50, backgroundColor: 'white', borderRadius: 20, margin: 10, justifyContent: 'space-between', alignItems: 'center' }} >
        <TouchableOpacity onPress={() => {
          navigation.navigate('Home');
        }}>
          <View style={{ margin: 10, flexDirection: 'row' }}>
            <Image style={{ width: 25, height: 25, }}
              source={require('../image/back.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('Cart') }}>
          <View style={{ margin: 10, flexDirection: 'row' }}>

            <Image style={{ width: 25, height: 25, color:'white' }} source={require('../image/tym.png')} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', margin: 10 }}>
        <Text style={{ justifyContent: 'center', fontSize: 30, fontWeight: 'bold' }}>Giỏ Hàng</Text>
      </View>

      <FlatList
        data={cartData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flex: 1, margin: 10, backgroundColor: 'white', padding: 10, borderRadius: 20, flexDirection: 'row' }}>
            <Image
              style={{ width: 90, height: 90 }}
              source={{ uri: item.image }}
            />
            <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10 }}>
              <View>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>{item.price}.000</Text>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                  <TouchableOpacity
                    onPress={() => {handlexgQuantity(item.id, item.stock, item.name, item.image, item.price),
                      setimage(item.image); setPrice(item.price); setTitle(item.name);}}
                    style={{ width: 25, height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EEEEEE', margin: 5, borderRadius: 5 }}>
                    <Image style={{ width: 20, height: 20 }} source={require('../image/minus.png')} />
                  </TouchableOpacity>
                  <View style={{ justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20 }}>{item.stock}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      handlelenQuantity(item.id, item.stock, item.name, item.image, item.price),
                      setimage(item.image); setPrice(item.price); setTitle(item.name);
                    }}
                    style={{ width: 25, height: 25, justifyContent: 'center', alignItems: 'center', margin: 5, borderRadius: 5 }}>
                    <Image style={{ width: 20, height: 20 }} source={require('../image/plus.png')} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10 }}>
                <TouchableOpacity onPress={() => removeCartItem(item.id)}>
                  <Text>X</Text>
                </TouchableOpacity>
              </View>

            </View>

          </View>
        )}
      />

      <View style={{ height: 90, backgroundColor: 'white', borderRadius: 20, paddingTop: 10, paddingRight: 20, paddingBottom: 10, paddingLeft: 20, margin: 5, justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, justifyContent: 'center', paddingTop: 1 }}>
            <Text style={{ color: 'red', fontSize: 25, fontWeight: 'bold', paddingRight: 10, paddingBottom: 10 }}>{getTotalPrice()}.000</Text>
          </View>
          <TouchableOpacity
        onPress={() => {
          navigation.navigate('dien', {
            itemImage: image,
            itemName: Title,
            itemPrice: price,
            itemStock: stock,
            itemTotal: total
          });
          // Xóa sản phẩm khỏi giỏ hàng khi nhấn nút Thanh Toán
          cartData.forEach(item => {
            removeCartItem(item.id);
          });
        }}
        style={{ width: 200, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', borderRadius: 10 }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Thanh Toán</Text>
      </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

export default CartScreen;
