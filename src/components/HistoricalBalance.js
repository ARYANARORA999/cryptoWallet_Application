import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, LineController } from 'chart.js';
import { Card, Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

// Register the required Chart.js components, including LineController
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, LineController);

const HistoricalBalance = ({ provider }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Token Balance",
        data: [],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  });

  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const fetchData = async () => {
    // Simulated data, replace with API data fetch
    setData({
      labels: ["2023-09-01", "2023-09-02", "2023-09-03"],
      datasets: [
        {
          label: "Token Balance",
          data: [100, 200, 150],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    });
  };

  useEffect(() => {
    // Destroy the previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    
    // Create a new chart instance
    chartInstanceRef.current = new Chart(ctx, {
      type: 'line', // Now properly registered
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Token Balance Over Time',
          },
        },
      },
    });

    // Cleanup: destroy the chart instance on unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data]); // Rerun the effect if the `data` changes

  return (
    <Card className="shadow-sm">
      <Card.Header>Historical Balance</Card.Header>
      <Card.Body>
      <div className="d-flex justify-content-between align-items-center historical-balance-box">
  <div className="flex-grow-1 me-2">
    <DatePicker 
      selected={startDate} 
      onChange={(date) => setStartDate(date)} 
      className="form-control"
    />
  </div>
  <div className="flex-grow-1 me-2">
    <DatePicker 
      selected={endDate} 
      onChange={(date) => setEndDate(date)} 
      className="form-control"
    />
  </div>
  <div>
    <Button variant="primary" onClick={fetchData}>
      Fetch Data
    </Button>
  </div>
</div>
        {/* Render the chart */}
        <canvas ref={chartRef}></canvas>
      </Card.Body>
    </Card>
  );
};

export default HistoricalBalance;
