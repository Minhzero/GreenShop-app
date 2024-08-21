import {createSlice} from '@reduxjs/toolkit';
import {addTodoAPI} from "../actions/todoAction";

// 1 khai bao khoi tao state
const initialState ={
    listTodo: [], // chua danh sach cong viec
   
}

// 2 thieets lap cho reducer va dinh nghia cac action
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        // lam viec voi store cuc bo
        addTodo(state,action){
            state.listTodo.push(action.payload);
        },
        
    },
    extraReducers : builder =>{
        // đây là chỗ để viết các thao tác mở rộng, xử lý trạng thái của promise

        builder.addCase(addTodoAPI.fulfilled, (state, action)=>{
            state.listTodo.push(action.payload);
        })
        .addCase(addTodoAPI.rejected,(state, action) =>{
             // Xử lý khi yêu cầu thêm todo bị từ chối hoặc xảy ra lỗi
             console.log('Add todo rejected:', action.error.message);
        })
    },
})

// export các thành phần để bên screen có thể sử dụng
export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;