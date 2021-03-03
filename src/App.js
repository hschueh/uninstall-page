import "./App.css";
import amplitude from "amplitude-js";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    amplitude
      .getInstance()
      .init("bb734b8631a5fb8fb89723ac2dfc2cfb", null, null, () => {
        amplitude.getInstance().logEvent("extension_uninstalled", null, () => {
          window.location.replace("https://cooby.app.link/getcooby");
        });
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bye! Hope we could see you come back soon.
        </p>
      </header>
    </div>
  );
}

export default App;
