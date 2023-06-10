import React, { useRef, useEffect } from "react";
import { px } from "../shared/px";
import * as echarts from 'echarts';
import { createEchartsOptions } from "../shared/create-echarts-options";

export const Chart1: React.FC = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: '城关区', value: 10 },
    { name: '七里河区', value: 15 },
    { name: '西固区', value: 20 },
    { name: '安宁区', value: 25 },
    { name: '红古区', value: 30 },
    { name: '永登县', value: 35 },
    { name: '皋兰县', value: 40 },
    { name: '榆中县', value: 45 },
    { name: '新区', value: 50 },
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: '城关区', value: Math.floor(Math.random() * 50) + 1 },
        { name: '七里河区', value: Math.floor(Math.random() * 50) + 1 },
        { name: '西固区', value: Math.floor(Math.random() * 50) + 1 },
        { name: '安宁区', value: Math.floor(Math.random() * 50) + 1 },
        { name: '红古区', value: Math.floor(Math.random() * 50) + 1 },
        { name: '永登县', value: Math.floor(Math.random() * 50) + 1 },
        { name: '皋兰县', value: Math.floor(Math.random() * 50) + 1 },
        { name: '榆中县', value: Math.floor(Math.random() * 50) + 1 },
        { name: '新区', value: Math.floor(Math.random() * 50) + 1 },
      ];
      x(newData);
    }, 1500);
  }, [])
  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      grid: {
        x: px(50),
        y: px(30),
        x2: px(40),
        y2: px(50),
      },
      xAxis: {
        type: 'category',
        data: data.map(i => i.name),
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: { color: '#083b71' }
        },
        axisLabel: {
          fontSize: px(12),
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        }
      },
      yAxis: {
        type: 'value',
        splitLine: { show: false },
        axisLine: {
          show: true,
          lineStyle: { color: '#083b71' }
        }
      },
      series: [
        {
          data: data.map(i => i.value),
          type: 'bar',
        }
      ],
    }));
  }
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, [])
  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  )
};