import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Dienthongtin = ({ route, navigation }) => {
    const { itemImage, itemName, itemPrice, itemStock } = route.params;
    const total = itemPrice * itemStock;
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const addToBill = async () => {
        const newBill = {
            name: name,
            address: address,
            phoneNumber: phoneNumber,
            title: itemName,
            image: itemImage,
            price: itemPrice,
            stock: itemStock,
            total: total
        };
    
        try {
            const response = await fetch('http://192.168.0.105:3000/bill', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBill)
            });
    
            if (response.ok) {
                // Gửi thành công
                navigation.navigate('Tab');
            } else {
                // Xử lý khi gửi không thành công
                console.log('Thêm không thành công');
            }
        } catch (error) {
            // Xử lý lỗi khi gửi request
            console.error('Lỗi khi gửi request:', error);
        }
    };
    

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ alignItems: 'center', height: 700 }}>

                <View style={{ flexDirection: 'row', width: '90%', height: 50, backgroundColor: 'white', borderRadius: 20, margin: 10, justifyContent: 'space-between', alignItems: 'center' }} >
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Cart');
                    }}>
                        <View style={{ margin: 10, flexDirection: 'row' }}>
                            <Image style={{ width: 25, height: 25, }}
                                source={require('../image/back.png')}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('Cart') }}>
                        <View style={{ margin: 10, flexDirection: 'row' }}>

                            {/* <Image style={{ width: 25, height: 25 }} source={require('../image/tym.png')} /> */}
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 30, fontWeight: 'bold', margin: 20 }}>Điền thông tin</Text>

                <TextInput
                    style={styles.textinput}
                    placeholderTextColor={'white'}
                    placeholder="Họ và tên"
                    value={name}
                    onChangeText={(text) => {
                        setName(text);
                    }}
                />
                <TextInput
                    style={styles.textinput}
                    placeholderTextColor={'white'}
                    placeholder="Địa chỉ"
                    value={address}
                    onChangeText={(text) => {
                        setAddress(text);
                    }}
                />
                <TextInput
                    style={styles.textinput}
                    placeholderTextColor={'white'}
                    placeholder="Số điện thoại"
                    value={phoneNumber}
                    onChangeText={(text) => {
                        setPhoneNumber(text);
                    }}
                />

                <Image
                    style={{ width: 90, height: 90 }}
                    source={{ uri: itemImage }}
                />
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{itemName}</Text>

                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Giá: {itemPrice}.000</Text>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'red' }}>Số lượng: {itemStock}</Text>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Tổng tiền: {total}.000</Text>
            </View>

            <TouchableOpacity
                onPress={addToBill 
                }
                style={{ height: 40, width: 300, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', borderRadius: 10 }}
            >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Thanh Toán</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Dienthongtin

const styles = StyleSheet.create({
    textinput: {
        width: 350,
        height: 50,
        backgroundColor: '#252A32',
        color: 'white',
        borderRadius: 10,
        paddingLeft: 10,
        margin: 10,
        borderColor: 'white',
        borderWidth: 0.5,
    },
})
