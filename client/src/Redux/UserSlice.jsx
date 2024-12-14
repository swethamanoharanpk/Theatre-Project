import {createSlice} from '@reduxjs/toolkit'
const userInformation = createSlice({
    name:"userInfo",
    initialState:{
        login:null

    },
    reducers:{
        storeToken:(state,action)=>{
            console.log("111111",action.payload)
            state.login = action.payload

        },
        deleteToken:(state,action)=>{
            state.login = null
        }

    }
})

export const {storeToken,deleteToken} = userInformation.actions
export default userInformation.reducer