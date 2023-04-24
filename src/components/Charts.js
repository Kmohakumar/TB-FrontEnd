import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Charts = (props) => {
  const { data } = props;

  return (
    <div style={{ width: "100%", height: "400px" }}>
      {data.length > 0 && (
        <LineChart width={800} height={500} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={(date) => new Date(date).toLocaleDateString()}
          />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      )}
    </div>
  );
};

export default Charts;
