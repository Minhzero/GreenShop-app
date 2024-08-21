import React, { useState } from "react";
import {
    Button,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,

} from "react-native";
import Register from './register';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";

// import CheckBox from "react-native-check-box";


const Login = ({ navigation }) => {
   const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [isChecked, setIsChecked] = useState(false);

    const handleLogin = () => {
        if (email.length == 0) {
            setEmailError(!email ? "Vui lòng nhập email" : "");
            return;
        }
        if (password.length == 0) {
            setPasswordError(!password ? "Vui lòng nhập mật khẩu" : "");
            return;
        }

        //thucự hiện fetch lấy dữ liệu về

        const apiUrl = "http://192.168.0.105:3000/user?email=" + email;

        fetch(apiUrl).then((res) => { return res.json(); })
            .then(async (res_login) => {
                if (res_login.length !== 1) {
                    setEmailError("Sai Email ");

                    return;
                } else {
                    
                   
                    //số lượng lấy đc 1 bản ghi ==> kiểm tra mật khẩu
                    const objU = res_login[0];

                    if (objU.password != password) {


                        setPasswordError("Sai password");
                        return;
                    } else {
                        const ObjP = JSON.stringify(objU);
                        // đúng password : lưu thông tin  và storage
                        try {
                            
                            await AsyncStorage.setItem('loginInfo', ObjP);
                            //  chuyển màn hình
                            navigation.push("Tab");

                        } catch (e) {
                            console.log(e);
                        }
                    }
                }
            })



    }

    const Register = () => {
        navigation.push('Register')
    }
    const validateEmail = (email) => {
        // Biểu thức chính quy kiểm tra địa chỉ email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };



    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri:'https://free.vector6.com/wp-content/uploads/2021/03/0000000125-cay-xanh-chau-cay-tai-hinh-cay-canh-png-11.png'}}
            />
            <Text style={styles.text1}>Welcome to Lungo !!</Text>
            <Text style={styles.text2}>Login to Continue</Text>
            {/* ô nhập */}

            {/* TextInput cho email */}
            <TextInput
                style={styles.textinput}
                placeholderTextColor={'white'}
                placeholder="Địa chỉ Email"
                value={email}
                onChangeText={(text) => {
                    setEmail(text);
                    setEmailError(""); // Đặt lại thông báo lỗi khi người dùng nhập
                }}
            />
            {/* Hiển thị thông báo lỗi cho email */}
            {emailError ? (
                <Text style={styles.errorText}>{emailError}</Text>
            ) : null}

            {/* TextInput cho mật khẩu */}
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.textinput}
                    placeholderTextColor={'white'}
                    placeholder="Mật khẩu"
                    secureTextEntry={isPasswordHidden}
                    value={password}
                    onChangeText={(text) => {
                        setPassword(text);
                        setPasswordError(""); // Đặt lại thông báo lỗi khi người dùng nhập
                    }}
                />

            </View>
            {/* Hiển thị thông báo lỗi cho mật khẩu */}
            {passwordError ? (
                <Text style={styles.errorText}>{passwordError}</Text>
            ) : null}
            {/* <<View style={styles.checkbook}>
                <TouchableOpacity style={styles.checkbook1}></TouchableOpacity>
                <Text style={{color:'white'}}>remember me</Text>
            </View> */}
            {/* <View style={styles.checkbook}>
                <CheckBox isChecked={isChecked} onClick={() => setIsChecked(!isChecked)} ></CheckBox>
                <Text style={{ marginTop: 1 }} >Remember me</Text>
            </View> */}


            {/* nút bấm */}
            <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                <Text style={styles.btnText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn1}>
                {/* <Image style={{ marginRight: 5 }} source={require('../assets/images/icon.png')} /> */}
                <Text style={styles.btnText1}>Sign in with Google</Text>

            </TouchableOpacity>
            <TouchableOpacity onPress={Register}>
                <Text style={styles.text3}>Don’t have account? Click <Text style={{ color: '#D17842' }}>Register</Text></Text>
            </TouchableOpacity>

            {/* <TouchableOpacity>
                <Text style={styles.text3}>Forget Password? Click <Text style={{ color: '#D17842' }}>Reset</Text></Text>
            </TouchableOpacity> */}
        </View>
    )
}

export default Login
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',

        alignItems: 'center',
    },
    image: {
        width: 200, height: 100, resizeMode: 'contain',
        marginTop: 50,
    },
    text1: {
        fontSize: 20,
        color: '#828282',
        fontStyle: 'italic',
        marginTop: 30,

    },
    text2: {
        color: '#828282',
        marginTop: 10,
        marginBottom: 50
    },
    text3: {
        fontSize: 15,
        color: '#828282',
        fontStyle: 'italic',
        textAlign: 'center',
        margin: 10,


    },
    textinput: {
        width: 350,
        height: 50,
        backgroundColor: '#252A32',
        color: 'white',
        borderRadius: 10,
        paddingLeft: 10,
        margin: 10
    },
    btn: {
        width: 350,
        height: 50,
        marginTop: 30,
        marginBottom: 10,
        alignContent: 'center',
        backgroundColor: '#D17842',
        padding: 10,
        borderRadius: 20,


    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
    btn1: {
        width: 350,
        height: 50,
        marginBottom: 10,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    btnText1: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    },
    errorText: {
        color: "red",
        fontSize: 16,
        alignSelf: 'flex-start',
        marginLeft: 30
    },
    textinput: {
        width: 350,
        height: 50,
        backgroundColor: '#252A32',
        color: 'white',
        borderRadius: 10,
        paddingLeft: 10,
        margin: 10
    },
    checkbook: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: 25
    },

})