import React from 'react'
import { Line, Bar } from 'react-chartjs-2'
import { ChartData, ChartOptions } from 'chart.js'

interface Props {
  data: any
  options?: any
}

export const LineChart: React.FC<Props> = ({ data, options }) => {
  return <Line data={data} options={options} />
}

export const BarChart: React.FC<Props> = ({ data, options }) => {
  return <Bar data={data} options={options} />
}
