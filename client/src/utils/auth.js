// Import jwt-decode to handle token decoding
import decode from "jwt-decode";

// AuthService class to manage authentication
class AuthService {
  // Retrieve user data from the token
  getProfile() {
    const token = this.getToken();
    return token ? decode(token) : null;
  }

  // Check if the user is logged
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // Check if the token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      console.error("Error decoding token:", err);
      return false;
    }
  }

  // Retrieve token from localStorage
  getToken() {
    return localStorage.getItem("id_token");
  }

  // Log in
  login(idToken) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/"); 
  }

  // Log out
  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }
}

export default new AuthService();
