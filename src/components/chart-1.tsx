import React, { useRef, useEffect } from "react";
import { px } from "../shared/px";
import * as echarts from 'echarts';
import { createEchartsOptions } from "../shared/create-echarts-options";

export const Chart1: React.FC = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: '飘零城', value: 10 },
    { name: '幽影岛', value: 15 },
    { name: '无边海', value: 20 },
    { name: '漫天云海', value: 25 },
    { name: '狂风岭', value: 30 },
    { name: '神秘谷', value: 35 },
    { name: '冰雪荒原', value: 40 },
    { name: '碧空山', value: 45 },
    { name: '烟波湖', value: 50 },
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: '飘零城', value: Math.floor(Math.random() * 50) + 1 },
        { name: '幽影岛', value: Math.floor(Math.random() * 50) + 1 },
        { name: '无边海', value: Math.floor(Math.random() * 50) + 1 },
        { name: '漫天云海', value: Math.floor(Math.random() * 50) + 1 },
        { name: '狂风岭', value: Math.floor(Math.random() * 50) + 1 },
        { name: '神秘谷', value: Math.floor(Math.random() * 50) + 1 },
        { name: '冰雪荒原', value: Math.floor(Math.random() * 50) + 1 },
        { name: '碧空山', value: Math.floor(Math.random() * 50) + 1 },
        { name: '烟波湖', value: Math.floor(Math.random() * 50) + 1 },
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