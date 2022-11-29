import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit'
import AuthService from "../../services/auth.service";
import {loginType} from "../../constants/types";
import {setMessage} from "./messageSlice";

const initialState = {
    isLoggedIn: false,
    accessToken: null,
    errors: null,
    expireDate: null,
    isSuccess: false,
    message: null,
    refreshToken: null,
}



export const login = createAsyncThunk(
    "auth/login",
    async (loginSliceData: loginType, thunkAPI) => {

        try {
            const data = await AuthService.login(loginSliceData);
            console.log(data.message)

            return {user: data};
        } catch (error: any) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            // @ts-ignore
            return thunkAPI.rejectWithValue();
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers:  (builder) => {
        builder
            .addMatcher(
                (action) => action.type.endsWith('/fulfilled'),
                (state, action) => {
                    state.isLoggedIn = true;
                    state.accessToken = action.payload.user.accessToken;
                    state.errors = action.payload.user.errors;
                    state.expireDate = action.payload.user.expireDate;
                    state.isSuccess = action.payload.user.isSuccess;
                    state.message = action.payload.user.message;
                    state.refreshToken = action.payload.user.refreshToken;
                    console.log('--success--')
                    console.log(current(state))})
            .addMatcher(
                action => action.type.endsWith('/rejected'),
                (state,)=>{
                    state = initialState
                }
            )
    },
})

export default userSlice.reducer
