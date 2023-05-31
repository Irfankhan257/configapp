import React, { useState } from "react";
import "./App.css";
import client from "./config";

function App() {
  const [settingValue, setSettingValue] = useState(null);
  const [settingColor, setSettingColor] = useState("blue");

  const fetchConfiguration = async () => {
    try {
      const setting = await client.getConfigurationSetting({
        key: "testing",
      });
      setSettingValue(setting.value);
    } catch (error) {
      console.error("Error fetching configuration:", error);
    }

    try {
      const setting = await client.getConfigurationSetting({
        key: "color",
      });
      setSettingColor(setting.value);
    } catch (error) {
      console.error("Error fetching configuration:", error);
    }
    
  };

  // useEffect(() => {
  //   fetchConfiguration();
  // }, []);

  return (
    <div>
      <h2 style={{ color: settingColor }}>Azure App Configuration Demo</h2>
      {settingValue ? (
        <p>
          Setting value: {settingValue}
        </p>
      ) : (
        <p>Loading setting value...</p>
      )}
      <button onClick={fetchConfiguration}>Fetch Configuration</button>
    </div>
  );
}

export default App;
