import axios from "axios";

export async function getAccessToken() {
  const clientId = "a99acf16-fd80-495b-8563-1b98541180b0";
  const clientSecret = "test-vault-service";
  const tenantId = "971437c4-f41b-4874-963d-ffd0a1a02000";
  const resource = "https://test-react.vault.azure.net/";

  const response = await axios.post(
    `https://login.microsoftonline.com/${tenantId}/oauth2/token`,
    null,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: {
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
        resource: resource,
      },
    }
    );
    console.log(response);

  return response.data.access_token;

  
}
