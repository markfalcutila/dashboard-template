<template>
  <div class="dashboard-container">
    <div class="q-mb-md">
      <div class="text-h7 q-mb-xs">Received from channels</div>
      <br />
      <LineChart :data="chartData" :height="100" />
    </div>
  </div>
</template>

<script lang="ts">
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  CategoryScale,
} from 'chart.js';

ChartJS.register(Title, Tooltip, LineElement, PointElement, LinearScale, TimeScale, CategoryScale);

export default {
  name: 'ChartGraphView',
  components: {
    LineChart: Line,
  },
  data() {
    return {
      chartData: {
        labels: ['24:00', '', '', '', '', '', '', '23:59'],
        datasets: [
          {
            data: [0, 2000, 10000, 30000, 5000, 32000, 28000, 12000],
            fill: false,
            backgroundColor: '#2f76c6',
            borderColor: '#2f76c6',
            pointRadius: 4,
          },
          {
            data: [0, 0, 8000, 20000, 14000, 15000, 16000, 8000],
            fill: false,
            backgroundColor: '#2fc67b',
            borderColor: '#2fc67b',
            pointRadius: 4,
          },
          {
            data: [0, 2000, 4000, 10000, 8000, 11000, 9000, 5000],
            fill: false,
            backgroundColor: '#3366cc',
            borderColor: '#3366cc',
            pointRadius: 4,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        interaction: {
          axis: 'x',
          intersect: false,
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (context: { raw: any }) => {
                const rawValue = context.raw;
                const value =
                  typeof rawValue === 'number'
                    ? rawValue.toLocaleString('en-PH', {
                        style: 'currency',
                        currency: 'PHP',
                      })
                    : rawValue;
                return `${value} — ${Math.floor(Math.random() * 40)} payments`;
              },
            },
          },
        },
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'hour',
              tooltipFormat: 'h:mm',
            },
            ticks: {},
            grid: {
              drawOnChartArea: false,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              // callback: (value: { toLocaleString: () => any }) => `₱${value.toLocaleString()}`,
              callback: (value: unknown) => {
                // if (typeof value === 'number') {
                //   return `₱${value.toLocaleString()}`;
                // }
                // return `₱${value}`;
              },
              color: '#999',
            },
            grid: {
              color: '#eee',
            },
          },
        },
      },
    };
  },
};
</script>
