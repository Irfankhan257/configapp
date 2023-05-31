import { AppConfigurationClient } from "@azure/app-configuration";

const connectionString =
  "Endpoint=https://testing-react-config.azconfig.io;Id=e+Ss;Secret=7FNQ1KI43nJmv1konhOleIhC9HMkOT65wfAv0aLiORI=";
const client = new AppConfigurationClient(connectionString);

export default client;
