// Import jwt-decode to handle token decoding
import decode from "jwt-decode";

// AuthService class to manage authentication
class AuthService {
  // Retrieve user data from the token
  getProfile() {
    return decode(this.getToken());
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
       if (decoded.exp < Date.now() / 1000) {
         return true;
       } else return false;
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
