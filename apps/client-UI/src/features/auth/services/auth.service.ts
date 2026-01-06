type LoginPayload = {
    email : string;
    password : string;
}

type AuthResponse = {
    token : string;
    user : {
        id : string;
        role : 'parent' | 'kid';
        email : string
    }
}

class AuthService {
    async login (payload :LoginPayload) : Promise<AuthResponse> {
        // Mock Service until backend ready
        await new Promise((r)=> setTimeout(r,3000))

        if (payload.email !== "test@kiddo.com") {
      throw new Error("Invalid email or password");
    }

    return {
      token: "mock-jwt-token",
      user: {
        id: "1",
        role: "parent",
        email: payload.email,
      },
    };
    }
}


export const authService = new AuthService()