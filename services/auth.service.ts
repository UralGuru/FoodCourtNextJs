import axios from "axios";
import {registerType, loginType} from "../constants/types";

const API_URL = "http://food-court.tk/api/v1.0/";
// const API_URL = "http://food-court.tk:8080/v1.0/";

const register = (regData:registerType) => {
    return axios.post(API_URL + "auth/registration", regData);
};

const login = (logData:loginType) => {
    return axios
        .post(API_URL + "auth/login", logData)
        // .post(API_URL + "auth/account/external-login?provider=Google&backUrl=/home", {
        //     email,
        //     password
        // })
        .then((response) => {
            if (response.data.username) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const loginWidthGoogle = () => {
    return axios
        .post(API_URL + "auth/account/external-login?provider=Google&backUrl=/home",)
        .then((response) => {
            if (response.data.username) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
    return axios.post(API_URL + "signout").then((response) => {
        return response.data;
    });
};

const getCurrentUser = () => {
    // return JSON.parse(localStorage.getItem("user"));
    return null
};

const AuthService = {
    register,
    login,
    loginWidthGoogle,
    logout,
    getCurrentUser,
}

export default AuthService;
