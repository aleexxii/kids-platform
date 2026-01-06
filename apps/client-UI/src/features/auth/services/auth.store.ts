type UserRole = 'parent' | 'kid'

export type AuthUser = {
    id : string;
    email : string;
    role : UserRole;
}

const TOKEN_KEY = 'kiddo_token'
const USER_KEY = 'kiddo_user'

class AuthStore {
    setSession(token : string, user : AuthUser){
        localStorage.setItem(TOKEN_KEY, token)
        localStorage.setItem(USER_KEY, JSON.stringify(user))
    }
    clearSession(){
        localStorage.removeItem(TOKEN_KEY)
        localStorage.removeItem(USER_KEY)
    }

    getToken():string|null{
        return localStorage.getItem(TOKEN_KEY)
    }

    getUser():AuthUser | null {
        const raw = localStorage.getItem(USER_KEY)
        return raw ? JSON.parse(raw) : null
    }

    isAuthenticated():boolean{
        return !!this.getToken()
    }
}

export const authStore = new AuthStore()