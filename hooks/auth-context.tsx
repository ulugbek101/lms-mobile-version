import {createContext, PropsWithChildren, useState} from "react"

type AuthContextType = {
    user: null
    loginUser: () => void
    logoutUser: () => void
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    loginUser: () => {
    },
    logoutUser: () => {
    }
});


function AuthContextProvider({children}: PropsWithChildren) {
    const [user, setUser] = useState(null)

    async function loginUser() {
    }

    async function logoutUser() {
    }

    const authContextDefaultValues = {
        user,
        loginUser,
        logoutUser,
    }
    return <AuthContext.Provider value={authContextDefaultValues}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;

