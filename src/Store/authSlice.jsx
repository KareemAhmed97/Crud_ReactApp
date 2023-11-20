import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice ({
  name:'auth',
  initialState:{islogged:false,name:"Kareem Ahmed"},
  reducers:{
    logInOut:(state)=>{
      state.islogged=!state.islogged
    }
  }
})

export const {logInOut}=authSlice.actions
export default authSlice.reducer