import { Bar } from 'react-chartjs-2';
export default function BarChart({ height, width, data, options }) {
  return (
    <>
      <Bar data={data} options={options} height={height} />
    </>
  );
}
