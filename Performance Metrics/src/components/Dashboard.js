import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Line } from "react-chartjs-2";

const Dashboard = ({ metric }) => {
  const [timestamps, setTimestampList] = useState([]);
  const [measures, setMeasureValueList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const { timestampList, measureValueList } = metric.measureData.reduce(
      (acc, curr) => {
        acc.timestampList.push(curr.timestamp);
        acc.measureValueList.push(curr.measureValue);

        return acc;
      },
      { timestampList: [], measureValueList: [] }
    );

    setTimestampList(timestampList);
    setMeasureValueList(measureValueList);
    setLoading(false);
  }, [metric]);

  const data = {
    // labels = last 30 min
    labels: timestamps.map((t) => new Date(t).toLocaleTimeString("tr-TR")),

    // label, data
    datasets: [
      {
        label: metric.measureName,
        data: measures,
        backgroundColor: "transparent",
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="m-container__dashboard">
      {loading ? <h1>Loading...</h1> : <Line data={data} options={{}} />}
    </div>
  );
};

Dashboard.propTypes = {
  metric: PropTypes.object.isRequired,
};

export default Dashboard;
