import axios from "axios";
import signale from "signale";

export default class AuthAPI {
  constructor(issuerBaseURL, clientID, clientSecret) {
    (this.issuerBaseURL = issuerBaseURL),
      (this.clientID = clientID),
      (this.clientSecret = clientSecret);
  }

  /**
   *
   *
   * GETTERS & SETTERS
   *
   */
  async getissuerBaseURL() {
    return this.issuerBaseURL;
  }

  async getClientID() {
    return this.clientID;
  }

  async getClientSecret() {
    return this.clientSecret;
  }

  async setissuerBaseURL(issuerBaseURL) {
    this.issuerBaseURL = issuerBaseURL;
  }

  async setClientID(clientID) {
    this.clientID = clientID;
  }

  async setClientSecret(clientSecret) {
    this.clientSecret = clientSecret;
  }

  
}
