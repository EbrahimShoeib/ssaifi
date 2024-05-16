

const TOKEN_KEY :string = "saifi_stable_token"
const USER_KEY :string = "saifi_stable_user"

export const getToken = () => {
    if (typeof window !== 'undefined') {

        return localStorage.getItem(TOKEN_KEY) || null
    }
    return null
}


export const setToken = (newToken:string) => {
    localStorage.setItem(TOKEN_KEY,newToken)
}

export const getUser = () => {
    if (typeof window !== 'undefined') {
        const user = localStorage.getItem(USER_KEY)
        return user ? JSON.parse(user) : null
    }
    return null

}

export const setUser = (newUser:any) => {
    localStorage.setItem(USER_KEY,JSON.stringify(newUser))
}

export const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY)
}

export const removeUser = () => {
    localStorage.removeItem(USER_KEY)
}