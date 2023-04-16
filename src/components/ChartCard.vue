<template>
  <div class="card">
    <div class="header">
      <div class="title">
        Chart title
      </div>
      <div class="zoom__button">
        <i class="pi pi-search-plus"></i>
      </div>
    </div>
    <div class="chart__block">
      <vue-highcharts style="height: 100%; width: 100%;"
        type="chart"
        :options="chartOptions"
        :redrawOnUpdate="true"
        :oneToOneUpdate="false"
        :animateOnUpdate="true"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// @ts-ignore
import VueHighcharts from 'vue3-highcharts';

export default defineComponent({
  name: "ChartCard",
  components: {
    VueHighcharts,
  },
  setup() {
    const chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      credits: {
        enabled: false
      },
      title: {
        text: null
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Chrome',
          y: 70.67,
        }, {
          name: 'Edge',
          y: 14.77
        }, {
          name: 'Firefox',
          y: 4.86
        }, {
          name: 'Safari',
          y: 2.63
        }, {
          name: 'Internet Explorer',
          y: 1.53
        }, {
          name: 'Opera',
          y: 1.40
        }, {
          name: 'Sogou Explorer',
          y: 0.84
        }, {
          name: 'QQ',
          y: 0.51
        }, {
          name: 'Other',
          y: 2.6
        }]
      }]
    };

    return {
      chartOptions,
    };
  }
})

</script>

<style>
.card{
	width: 100%;
  height: 100%; 
	overflow: hidden;
	background-color: #FFFFFF;
	border-radius: 0px;
	box-shadow: 0 2px 4px rgba(0,0,0,0.2);
	text-align: center;
}

.header {
  width: 100%;
  height: 15%;
  background-color: rgb(169, 169, 169);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.zoom__button, .title {
  padding: 0 10px;
} 

.zoom__button:hover {
  cursor: pointer;
}

.chart__block {
  height: 85%;
}
</style>