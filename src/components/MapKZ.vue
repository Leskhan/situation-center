<template>
  <div class="card"> 
    <vue-highcharts
        type="mapChart" style="height: 100%; width: 100%;"
        :options="chartOptions"
        :redrawOnUpdate="true"
        :oneToOneUpdate="false"
        :animateOnUpdate="true"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// @ts-ignore
import VueHighcharts from 'vue3-highcharts';
import HighCharts from 'highcharts';
import MapCharts from 'highcharts/modules/map';
// import euMap from '../highcharts/map-collection/custom/european-union.geo.json';

const map = await fetch(
  'https://code.highcharts.com/mapdata/custom/european-union.geo.json'
).then(response => response.json());

MapCharts(HighCharts);

export default defineComponent({
  name: 'MapChart',
  components: {
    VueHighcharts,
  },
  setup() {
    const chartOptions = {
      chart: {
        map: map,
      },

      title: {
        text: 'Map of EU with Ireland',
      },

      legend: {
        enabled: false,
      },

      series: [{
        name: 'Country',
        data: [
          ['ie', 1],
        ],
        dataLabels: {
          enabled: true,
          color: '#FFFFFF',
          formatter() {
            if (this.point.value) {
              return this.point.name;
            }
            return '';
          },
        },
        tooltip: {
          headerFormat: '',
          pointFormat: '{point.name}',
        },
      }],
    };

    return {
      chartOptions,
    };
  },
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
</style>