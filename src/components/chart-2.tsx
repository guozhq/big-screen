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
        data: ['城关区公安局', '七里河区公安局', '西固区公安局', '安宁区公安局', '红谷区公安局', '永登区公安局', '皋兰区公安局', '榆中区公安局', '兰州新区公安局']
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