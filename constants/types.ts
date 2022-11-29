export type loginType = {
    email: string,
    password: string
}

export type registerType = {
    name: string,
    phone: string,
    email: string,
    password: string
}

export type AuthStateType = {
    isLoggedIn: Boolean,
    accessToken: string | null,
    errors: string | null,
    expireDate: string | null,
    isSuccess: Boolean,
    message: string | null,
    refreshToken: string | null,
}


export type MessageStateType = {
    message: string | null,
}

export type StoreType = {

}
