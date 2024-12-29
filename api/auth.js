import axios from "axios";
import { API_URL } from "./apiConfig";
import { useAuth } from "@/context/AuthContext";

export const register = async (fullname, email, password) => {
  try {
    console.log("register");
    const response = await axios.post(`${API_URL}/signup`, {
      fullname,
      email,
      password,
    });
    console.log("Response:");
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
    return { error: true, msg: e.message };
  }
};

export const login = async (email, password) => {
  //prettier-ignore
  try {
      console.log("login")
      const response = await axios.post(`${API_URL}/signin`, { email, password });
      setAuthState({ token: response.data.token, authenticated: true });
      axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
      SecureStore.setItemAsync(TOKEN_KEY, response.data.token);
      return response.data;
    } catch (e) {
      return { error: true, msg: e.message };
    }
};

export const logout = async () => {
  try {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    axios.defaults.headers.common["Authorization"] = "";
    setAuthState({ token: null, authenticated: false });
  } catch (e) {
    return { error: true, msg: "Logged out" };
  }
};
