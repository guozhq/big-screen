import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../shared/create-echarts-options';
import { px } from '../shared/px';

export const Chart12 = () => {
  const divRef = useRef(null);
  const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
  const data = [
    { value: 0.08, name: '幽谷路' },
    { value: 0.06, name: '烈火街' },
    { value: 0.11, name: '长夜街' },
    { value: 0.09, name: '绝壁巷' },
    { value: 0.12, name: '梦幻路' },
    { value: 0.06, name: '无尽街' },
    { value: 0.08, name: '幻境路' },
    { value: 0.08, name: '逆风街' },
    { value: 0.08, name: '虚空路' },
  ];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      xAxis: { show: false },
      yAxis: { show: false },
      grid: { x: 0, x2: 0, y: 0, y2: 0, containLabel: true },
      legend: {
        orient: 'vertical',
        left: px(20),
        top: 'center',
        textStyle: { color: 'white' },
        itemWidth: px(10),
        itemHeight: px(10),
        formatter(name) {
          const value = data.find(i => i.name === name)?.value * 100 + '%';
          return name + ' ' + value;
        }
      },
      series: [
        {
          center: ['65%', '50%'],
          type: 'pie',
          radius: '80%',
          label: { show: false },
          labelLine: { show: false },
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }));
  }, []);

  return (
    <div className="年龄段-图1">
      <div className="chart" >
        <div className="main" ref={divRef} />
      </div>
    </div>
  );
};