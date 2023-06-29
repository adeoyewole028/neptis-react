import { store } from "../redux/store";

class TokenService {
  getLocalRefreshToken() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.refreshToken;
  }

  getLocalAccessToken() {
    const state = store.getState();
    return state?.loginReducer?.user?.token;
  }

  updateLocalAccessToken(token) {
    let user = JSON.parse(localStorage.getItem("user"));
    user.token = token;
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUser() {
    const state = store.getState();
    return state?.loginReducer?.user;
  }

  removeUser() {
    localStorage.clear();
  }
}

export default new TokenService();
