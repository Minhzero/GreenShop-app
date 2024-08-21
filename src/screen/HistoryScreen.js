import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { View, Text, StyleSheet, Image } from 'react-native';

const BillScreen = ({ route }) => {
  // Lấy thông tin hóa đơn từ route.params
  // const { name, address, phoneNumber, title, image, price, stock, total } = route.params;
  const [data, setData] = useState([])

  useEffect(() => {
    // http://192.168.23.101:3000/user

    fetch('http://192.168.0.105:3000/bill')
      .then(rep => rep.json())
      .then(data => {
        setData(data);
        console.log(data);
        // setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
      <Text style={styles.header}>Hóa Đơn</Text>
      </View>

      <FlatList
      style={{marginBottom:85}}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            
            <View style={styles.billItem}>
              <Text style={styles.label}>Tên Khách Hàng:</Text>
              <Text style={styles.value}>{item.name}</Text>
            </View>
            <View style={styles.billItem}>
              <Text style={styles.label}>Địa Chỉ:</Text>
              <Text style={styles.value}>{item.address}</Text>
            </View>
            <View style={styles.billItem}>
              <Text style={styles.label}>Số Điện Thoại:</Text>
              <Text style={styles.value}>{item.phoneNumber}</Text>
            </View>
            <Image source={{ uri: 'https://free.vector6.com/wp-content/uploads/2021/03/0000000125-cay-xanh-chau-cay-tai-hinh-cay-canh-png-11.png' }} style={styles.image} />
            <View style={styles.billItem}>
              <Text style={styles.label}>Tên Sản Phẩm:</Text>
              <Text style={styles.value}>{item.title}</Text>
            </View>
            <View style={styles.billItem}>
              <Text style={styles.label}>Giá Sản Phẩm:</Text>
              <Text style={styles.value}>{item.price}.000 VND</Text>
            </View>
            <View style={styles.billItem}>
              <Text style={styles.label}>Số Lượng:</Text>
              <Text style={styles.value}>{item.stock}</Text>
            </View>
            <View style={styles.billItem}>
              <Text style={styles.label}>Tổng Tiền:</Text>
              <Text style={styles.value}>{item.total}.000 VND</Text>
            </View>
          </View>

        )}
      />



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    margin:10
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
 margin:10,
    alignItems:'center',
    color:"red"
  },
  billItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default BillScreen;
