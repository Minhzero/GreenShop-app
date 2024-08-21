import {useDispatch, useSelector} from "react-redux";
import { Text,View } from "react-native";
import { useEffect } from "react";
import { fetchTodos } from "../redux/actions/todoAction";


const TodoScreen = ({navigation}) =>{
    const listTodo = useSelector(state => state.listTodo.listTodo);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchTodos());
    },[dispatch]);
    console.log(listTodo);


    return(
        <View>
            <Text onPress={()=> navigation.navigate('Cart')}> fff</Text>
            <Text>{listTodo.length > 0 ? listTodo[0].username : ''}</Text>

            {
                listTodo.map( row => (
                    <View key={row.id}
                    style={{margin:10,padding:10, borderColor:'blue', borderWidth:1}}>
                      
                     <Text>{row.username}  -  {row.id}</Text>
                      
                   </View> 
                ))
            }
            
        </View>
    )
}

export default TodoScreen;