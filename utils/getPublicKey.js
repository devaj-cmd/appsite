// const credentials = require("./utils/credentials.json");
// Function to retrieve the public key from Firebase's JWKS endpoint

const axios = require("axios");

const getFirebasePublicKey = async (kid) => {
  const jwksEndpoint = "https://www.googleapis.com/oauth2/v3/certs";

  try {
    const response = await axios.get(jwksEndpoint);
    const jwks = response.data;

    const publicKey = jwks.keys.find((key) => key.kid === kid);

    if (publicKey) {
      return publicKey;
    } else {
      throw new Error("Public key not found");
    }
  } catch (error) {
    throw new Error("Failed to fetch public key");
  }
};

module.exports = { getFirebasePublicKey };
