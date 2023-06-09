import React, { useRef, useEffect } from "react";
import { px } from "../shared/px";
import * as echarts from 'echarts';

export const Chart1: React.FC = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
      textStyle: {
        color: '#79839E'
      },
      xAxis: {
        type: 'category',
        data: ['城关区', '七里河区', '西固区', '安宁区', '红谷区', '永登区', '皋兰区', '榆中区', '兰州新区'],
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
          data: [10, 15, 20, 25, 30, 35, 40, 45, 55],
          type: 'bar'
        }
      ],
      grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40),
      }
    });
  }, [])
  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  )
};