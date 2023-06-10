import React, { useRef, useEffect } from "react";
import * as echarts from 'echarts';
import { createEchartsOptions } from "../shared/create-echarts-options";
import { px } from "../shared/px";
export const Chart2: React.FC = () => {
  const divRef = useRef(null);
  const myChart = useRef(null)
  const data = [
    { name: '飘零城公安局', 2011: 2, 2012: 3 },
    { name: '幽影岛公安局', 2011: 2, 2012: 3 },
    { name: '无边海公安局', 2011: 2, 2012: 3 },
    { name: '漫天云海公安局', 2011: 2, 2012: 3 },
    { name: '狂风岭公安局', 2011: 2, 2012: 3 },
    { name: '神秘谷公安局', 2011: 2, 2012: 3 },
    { name: '冰雪荒原公安局', 2011: 2, 2012: 3 },
    { name: '碧空山公安局', 2011: 2, 2012: 3 },
    { name: '烟波湖公安局', 2011: 2, 2012: 3 },
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: '飘零城公安局', 2011: Math.floor(Math.random() * 10), 2012: Math.floor(Math.random() * 10) },
        { name: '幽影岛公安局', 2011: Math.floor(Math.random() * 10), 2012: Math.floor(Math.random() * 10) },
        { name: '无边海公安局', 2011: Math.floor(Math.random() * 10), 2012: Math.floor(Math.random() * 10) },
        { name: '漫天云海公安局', 2011: Math.floor(Math.random() * 10), 2012: Math.floor(Math.random() * 10) },
        { name: '狂风岭公安局', 2011: Math.floor(Math.random() * 10), 2012: Math.floor(Math.random() * 10) },
        { name: '神秘谷公安局', 2011: Math.floor(Math.random() * 10), 2012: Math.floor(Math.random() * 10) },
        { name: '冰雪荒原公安局', 2011: Math.floor(Math.random() * 10), 2012: Math.floor(Math.random() * 10) },
        { name: '碧空山公安局', 2011: Math.floor(Math.random() * 10), 2012: Math.floor(Math.random() * 10) },
        { name: '烟波湖公安局', 2011: Math.floor(Math.random() * 10), 2012: Math.floor(Math.random() * 10) },
      ];
      x(newData);
    }, 1500);
  }, [])
  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      grid: {
        x: px(80),
        y: px(30),
        x2: px(0),
        y2: px(20),
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: { show: false },
        axisLabel: { show: false }
      },
      yAxis: {
        axisTick: { show: false },
        type: 'category',
        data: data.map(i => i.name),
        axisLabel: {
          formatter(val) {
            return val.replace('公安局', '\n公安局');
          }
        }
      },
      series: [
        {
          name: '2011',
          type: 'bar',
          data: data.map(i => i[2011]),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#2034f9',
              }, {
                offset: 1,
                color: '#04a1ff',
              }])
            }
          }
        },
        {
          name: '2012',
          type: 'bar',
          data: data.map(i => i[2012]),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#b92ae8',
              }, {
                offset: 1,
                color: '#6773e7',
              }])
            }
          }
        }
      ]
    }))
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);
  return (
    <div className="bordered 破获排名">
      <h2>案发破获排名</h2>
      <div ref={divRef} className="chart" />
      <div className="legend">
        <span className="first" /> 破案排名1
        <span className="second" /> 破案排名2
      </div>
    </div>
  )
};