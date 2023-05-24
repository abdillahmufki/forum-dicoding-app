import { createContext, useContext, useReducer, useState } from "react";
import { useLoginMutation } from "../states/features/users";

const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthProvider = (props) => {
    const getAuth = () => {
        return localStorage.getItem("tokenUser") || "";
    }

    const setAuth = (data) => {
        localStorage.setItem("tokenUser", data);
        setUser(data);
    }

    const [user, setUser] = useState(getAuth());

    const [loginUser, {
        isLoading: isLoadingLogin,
        isSuccess: isSuccessLogin
    }] = useLoginMutation();

    // 
    const value = {
        user, setUser,
        isLoadingLogin, isSuccessLogin,
        getAuth, setAuth
    }

    return <AuthContext.Provider value={value} {...props} />

}

