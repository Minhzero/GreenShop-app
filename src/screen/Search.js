import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native';

const Search = ({navigation}) => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("");



    useEffect(() => {
        fetch(`http://192.168.0.105:3000/product?name=${search}`)
            .then(rep => rep.json())
            .then(data => {
                setData(data);
                console.log(data);
            })
            .catch(err => console.log(err));
    }, [search]); // Dependency array to re-fetch data when search query changes

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
                <TouchableOpacity onPress={() => { navigation.navigate('Cart') }}>
                    <View style={{ margin: 10, flexDirection: 'row' }}>

                        <Image style={{ width: 25, height: 25 }} source={require('../image/cart.png')} />
                    </View>
                </TouchableOpacity>
            </View>

            <TextInput
                style={styles.textinput}
                placeholderTextColor={'white'}
                placeholder="Tên cây"
                onChangeText={(text) => {
                    setSearch(text);
                }}
            />
            <FlatList
                data={data}
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
                                        onPress={() => {
                                            handlexgQuantity(item.id, item.stock, item.name, item.image, item.price),
                                                setimage(item.image); setPrice(item.price); setTitle(item.name);
                                        }}
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
        </View>
    )
}

export default Search

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