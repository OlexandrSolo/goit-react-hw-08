import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit"

axios.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ""
}

// credentials - обʼєкт властивостей, які користувач введе в форму реєстраії
export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
    try {
        const res = await axios.post("/users/signup", credentials)
        return res.data
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})