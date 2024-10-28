import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

function MinTempChart({ data }) {
  return (
    <BarChart width={350} height={250} data={data.data}>
      <XAxis dataKey="datetime" stroke="#38bdf8" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="min_temp" fill="#38bdf8" barSize={30} />
    </BarChart>
  );
}

export default MinTempChart;
