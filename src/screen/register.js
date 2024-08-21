import {
    Button,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    ScrollView
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAPI } from "../redux/actions/todoAction";



const Register = ({ navigation }) => {
   const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [retypePasswordError, setRetypePasswordError] = useState("");

    const handleRegister = () => {
        // Kiểm tra hợp lệ từng trường
        setNameError(!name ? "Vui lòng nhập tên" : "");
        setEmailError(!email ? "Vui lòng nhập email" : !validateEmail(email) ? "Email không hợp lệ" : "");
        setPhoneError(!phone ? "Vui lòng nhập số điện thoại" : !isValidPhone(phone) ? "Số điện thoại không hợp lệ" : "");
        setPasswordError(!password ? "Vui lòng nhập mật khẩu" : "");
        setRetypePasswordError(
            !retypePassword ? "Vui lòng nhập lại mật khẩu" : retypePassword !== password ? "Mật khẩu không khớp" : ""
        );

        // Nếu kiểm tra hợp lệ, tiến hành đăng ký
        if (name && email && password && retypePassword === password) {
            // const obj = { username: name, password: password, email: email, phone: phone }
            // const apiUrl = "http://192.168.23.101:3000/users";
            // fetch(apiUrl, {
            //     method: "POST",
            //     body: JSON.stringify(obj)
            // })
            //     .then(res => res.json())
            //     .then(json => console.log(json))
            const hoten = "userhihi"
            let obj = { username: name, password: password, email: email, phone: phone,name:hoten }
           
            dispatch(addTodoAPI(obj))
                .then((result) => {
                    console.log('To do add successfully');
                }).catch((error) => {
                    console.error('Error add todo:', error);
                });
            // Thực hiện đăng ký
            console.log(name, email, password, retypePassword);
            navigation.push('Login'); // Thay bằng màn hình bạn muốn chuyển đến sau khi đăng ký thành công
        }
    };
    const validateEmail = (email) => {
        // Biểu thức chính quy kiểm tra địa chỉ email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    // Hàm kiểm tra số điện thoại hợp lệ
    const isValidPhone = (phone) => {
        // Thực hiện kiểm tra hợp lệ ở đây, ví dụ:
        // Số điện thoại hợp lệ nếu có từ 9-11 kí tự và chỉ chứa các số
        const phoneRegex = /^[0-9]{9,11}$/;
        return phoneRegex.test(phone);
    };
    const Login = () => {
        navigation.push('Login');
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.container1}>
                {/* <Image
                    style={styles.image}
                    source={require('../assets/images/logo.png')}
                /> */}
                <Text style={styles.text1}>Welcome to Lungo !!</Text>
                <Text style={styles.text2}>Register to Continue </Text>
                {/* ô nhập */}
                {/* TextInput cho Tên */}
                <TextInput
                    style={styles.textinput}
                    placeholderTextColor={'white'}
                    placeholder="Tên"
                    value={name}
                    onChangeText={(text) => {
                        setName(text);
                        setNameError(""); // Đặt lại thông báo lỗi khi người dùng nhập
                    }}
                />
                {/* Hiển thị thông báo lỗi cho Tên */}
                {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

                {/* TextInput cho Email */}
                <TextInput
                    style={styles.textinput}
                    placeholderTextColor={'white'}
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => {
                        setEmail(text);
                        setEmailError(""); // Đặt lại thông báo lỗi khi người dùng nhập
                    }}
                />
                {/* Hiển thị thông báo lỗi cho Email */}
                {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

                {/* TextInput cho Số điện thoại */}
                <TextInput
                    style={styles.textinput}
                    placeholderTextColor={'white'}
                    placeholder="Số điện thoại"
                    value={phone}
                    onChangeText={(text) => {
                        setPhone(text);
                        setPhoneError(""); // Đặt lại thông báo lỗi khi người dùng nhập
                    }}
                />
                {/* Hiển thị thông báo lỗi cho Số điện thoại */}
                {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}


                {/* TextInput cho Mật khẩu */}
                <TextInput
                    style={styles.textinput}
                    placeholderTextColor={'white'}
                    placeholder="Mật khẩu"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => {
                        setPassword(text);
                        setPasswordError(""); // Đặt lại thông báo lỗi khi người dùng nhập
                    }}
                />
                {/* Hiển thị thông báo lỗi cho Mật khẩu */}
                {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

                {/* TextInput cho Nhập lại Mật khẩu */}
                <TextInput
                    style={styles.textinput}
                    placeholderTextColor={'white'}
                    placeholder="Nhập lại mật khẩu"
                    secureTextEntry={true}// làm ẩn mật khẩu
                    value={retypePassword}
                    onChangeText={(text) => {
                        setRetypePassword(text);
                        setRetypePasswordError(""); // Đặt lại thông báo lỗi khi người dùng nhập
                    }}
                />
                {/* Hiển thị thông báo lỗi cho Nhập lại Mật khẩu */}
                {retypePasswordError ? <Text style={styles.errorText}>{retypePasswordError}</Text> : null}

                {/* nút bấm */}
                <TouchableOpacity style={styles.btn} onPress={handleRegister}>
                    <Text style={styles.btnText}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={Login}>
                    <Text style={styles.text3}>You have an account? Click <Text style={{ color: '#D17842' }}>Sign in</Text></Text>
                </TouchableOpacity>


            </View>
        </ScrollView>
    )
}

export default Register
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#0C0F14',
        flexDirection: 'column',


    },
    container1: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: 200, height: 100, resizeMode: 'contain',
        marginTop: 10,
    },
    text1: {
        fontSize: 20,
        color: 'white',
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
        margin: 10,
        borderColor: 'white',
        borderWidth: 0.5,
    },
    btn: {
        width: 350,
        height: 50,
        marginTop: 20,
        marginBottom: 10,
        alignContent: 'center',
        backgroundColor: '#D17842',
        padding: 10,
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 1,


    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
    errorText: {
        color: "red",
        fontSize: 16,
        alignSelf: 'flex-start',
        marginLeft: 30
    },
})