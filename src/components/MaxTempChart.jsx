import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

function MaxTempChart({ data }) {
  return (
    <BarChart width={350} height={250} data={data.data}>
      <XAxis dataKey="datetime" stroke="#f87171" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="max_temp" fill="#f87171" barSize={30} />
    </BarChart>
  );
}

export default MaxTempChart;
