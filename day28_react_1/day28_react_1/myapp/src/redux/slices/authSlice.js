import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user: null,
    loading: false,
    error: null,
    isAuthenticated: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authStart(state){
            state.loading = true;
            state.error = null;
        },
        authSuccess(state, action){
            state.loading = false;
            state.user = action.payload.user;
        },
        authFailure(state, action){
            state.loading = false;
            state.error = action.payload;
        },
        logout(state){
           state.loading= false;
           state.error= null;
           state.isAuthenticated= false;
           state.user= null;
        }
    }
});

export const {authStart, authFailure, authSuccess, logout} = authSlice.actions;

export default authSlice.reducer;