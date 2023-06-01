import axios from "axios";
import { getAccessToken } from "./Secrets";

async function getSecret(accessToken) {
  const keyVaultName = "test-react";
  const secretName = "test-vault-service";
  const apiVersion = "7.1";

  const response = await axios.get(
    `https://${keyVaultName}.vault.azure.net/secrets/${secretName}?api-version=${apiVersion}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data.value;
}

async function fetchSecret() {
  const accessToken = await getAccessToken();
  const secret = await getSecret(accessToken);
  console.log("Secret:", secret);
}

const Secrets = () => {
  fetchSecret();
};

export default Secrets;
