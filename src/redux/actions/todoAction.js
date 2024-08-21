import { createAsyncThunk } from '@reduxjs/toolkit';
import { addTodo } from '../reducers/todoReducer';

const api_url = 'http://192.168.0.105:3000/user';

export const fetchTodos = () => {
    return async dispatch => {
        try {
            const response = await fetch(api_url);
            const data = await response.json();
            data.forEach(row =>{
                dispatch(addTodo(row));
            });

        } catch (err) {
            console.log(err);
        }
    }
}

export const addTodoAPI = createAsyncThunk(
    'todo/addTodoAPI',
    async (objTodo,thunkAPI) =>{
        console.log(objTodo);
        try {
            // gui yeu cau post
            const response = await fetch(api_url,{
                method:"POST",
                body:JSON.stringify(objTodo)
            });

            const data = await response.json();
            if(response.ok){
                return data;
            }else{
                const err = await response.json();
                return thunkAPI.rejectWithValue(err);
            }
            
        } catch (error) {
            
        }
    }
)