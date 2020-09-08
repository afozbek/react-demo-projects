import React, { useEffect, useState } from "react";

import Dashboard from "./components/Dashboard";
import "./perfAnalytics";

function App() {
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(false);
  const baseFetchUrl =
    "https://performance-measure.herokuapp.com/browser-metrics";
  // const baseFetchUrl = "http://localhost:8080/browser-metrics";

  // Create new url and apply query
  // We can also use axios but don't necessarily
  const url = new URL(baseFetchUrl);
  const params = [["lastMinutes", 10]];
  url.search = new URLSearchParams(params).toString();

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMetrics(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const chartList = metrics.map((metric) => {
    return <Dashboard metric={metric} key={metric.measureName} />;
  });

  return (
    <div className="m-container">
      {loading ? <h1>Loading...</h1> : chartList}
    </div>
  );
}

export default App;
