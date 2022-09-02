import React from "react";
const api = {
  key: "8e196527d9264816aa9235135220109",
  base: "http://api.weatherapi.com/v1",
};

function App() {
  return (
    <div className="app-warm">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
