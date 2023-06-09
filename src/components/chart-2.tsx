import React, { useRef, useEffect } from "react";
import * as echarts from 'echarts';
import { baseEchartOptions } from "../shared/base-echart-options";
import { createEchartsOptions } from "../shared/create-echarts-options";
import { px } from "../shared/px";
export const Chart2: React.FC = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      ...baseEchartOptions,
      grid: {
        x: px(100),
        y: px(40),
        x2: px(40),
        y2: px(40),
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['城关区', '七里河区', '西固区', '安宁区', '红谷区', '永登区', '皋兰区', '榆中区', '兰州新区']
      },
      series: [
        {
          name: '2011',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
          name: '2012',
          type: 'bar',
          data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
      ]
    }));
  }, [])
  return (
    <div className="bordered 破获排名">
      <h2>案发破获排名</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  )
};