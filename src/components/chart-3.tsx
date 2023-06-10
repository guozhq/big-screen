import React, { useRef, useEffect } from "react";
import { px } from "../shared/px";
import * as echarts from 'echarts';
import { createEchartsOptions } from "../shared/create-echarts-options";

export const Chart3: React.FC = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: '抢劫', 2010: 0.01, 2011: 0.02, 2012: 0.03, 2013: 0.04, 2014: 0.05, 2015: 0.06, 2016: 0.07, 2017: 0.08, 2018: 0.09 },
    { name: '醉驾', 2010: 0.02, 2011: 0.03, 2012: 0.04, 2013: 0.05, 2014: 0.06, 2015: 0.07, 2016: 0.08, 2017: 0.09, 2018: 0.10 },
    { name: '盗窃', 2010: 0.03, 2011: 0.04, 2012: 0.05, 2013: 0.06, 2014: 0.07, 2015: 0.08, 2016: 0.09, 2017: 0.10, 2018: 0.11 },
    { name: '故意杀人', 2010: 0.04, 2011: 0.05, 2012: 0.06, 2013: 0.07, 2014: 0.08, 2015: 0.09, 2016: 0.10, 2017: 0.11, 2018: 0.12 },
    { name: '故意伤人', 2010: 0.05, 2011: 0.06, 2012: 0.07, 2013: 0.08, 2014: 0.09, 2015: 0.10, 2016: 0.11, 2017: 0.12, 2018: 0.13 },
  ]
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: '抢劫', 2010: Math.floor(Math.random() * 100) / 100, 2011: Math.floor(Math.random() * 100) / 100, 2012: Math.floor(Math.random() * 100) / 100, 2013: Math.floor(Math.random() * 100) / 100, 2014: Math.floor(Math.random() * 100) / 100, 2015: Math.floor(Math.random() * 100) / 100, 2016: Math.floor(Math.random() * 100) / 100, 2017: Math.floor(Math.random() * 100) / 100, 2018: Math.floor(Math.random() * 100) / 100 },
        { name: '醉驾', 2010: Math.floor(Math.random() * 100) / 100, 2011: Math.floor(Math.random() * 100) / 100, 2012: Math.floor(Math.random() * 100) / 100, 2013: Math.floor(Math.random() * 100) / 100, 2014: Math.floor(Math.random() * 100) / 100, 2015: Math.floor(Math.random() * 100) / 100, 2016: Math.floor(Math.random() * 100) / 100, 2017: Math.floor(Math.random() * 100) / 100, 2018: Math.floor(Math.random() * 100) / 100 },
        { name: '盗窃', 2010: Math.floor(Math.random() * 100) / 100, 2011: Math.floor(Math.random() * 100) / 100, 2012: Math.floor(Math.random() * 100) / 100, 2013: Math.floor(Math.random() * 100) / 100, 2014: Math.floor(Math.random() * 100) / 100, 2015: Math.floor(Math.random() * 100) / 100, 2016: Math.floor(Math.random() * 100) / 100, 2017: Math.floor(Math.random() * 100) / 100, 2018: Math.floor(Math.random() * 100) / 100 },
        { name: '故意杀人', 2010: Math.floor(Math.random() * 100) / 100, 2011: Math.floor(Math.random() * 100) / 100, 2012: Math.floor(Math.random() * 100) / 100, 2013: Math.floor(Math.random() * 100) / 100, 2014: Math.floor(Math.random() * 100) / 100, 2015: Math.floor(Math.random() * 100) / 100, 2016: Math.floor(Math.random() * 100) / 100, 2017: Math.floor(Math.random() * 100) / 100, 2018: Math.floor(Math.random() * 100) / 100 },
        { name: '故意伤人', 2010: Math.floor(Math.random() * 100) / 100, 2011: Math.floor(Math.random() * 100) / 100, 2012: Math.floor(Math.random() * 100) / 100, 2013: Math.floor(Math.random() * 100) / 100, 2014: Math.floor(Math.random() * 100) / 100, 2015: Math.floor(Math.random() * 100) / 100, 2016: Math.floor(Math.random() * 100) / 100, 2017: Math.floor(Math.random() * 100) / 100, 2018: Math.floor(Math.random() * 100) / 100 },
      ];
      x(newData);
    }, 1500);
  }, [])
  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      legend: {
        bottom: px(10),
        textStyle: { color: 'white' },
        itemWidth: px(30),
        itemHeight: px(16)
      },
      grid: {
        x: px(20),
        x2: px(20),
        y: px(20),
        y2: px(70),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
        splitLine: { show: true, lineStyle: { color: '#073E78' } },
        axisTick: { show: false },
        axisLine: { show: false },
      },
      yAxis: {
        type: 'value',
        splitLine: { lineStyle: { color: '#073E78' } },
        axisLabel: {
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      series: data.map(i => ({
        name: i.name,
        data: [i[2010], i[2011], i[2012], i[2013], i[2014], i[2015], i[2016], i[2017], i[2018]]
      }))
        .map(obj => ({
          ...obj,
          symbol: 'circle',
          type: 'line',
          symbolSize: px(12),
          lineStyle: { width: px(2) }
        }))
    }));
  }
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data)
  }, [])
  return (
    <div className="bordered 趋势分析">
      <h2>发案趋势分析</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  )
};