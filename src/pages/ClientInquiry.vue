<script lang="ts">
import { defineComponent } from 'vue'
import Dropdown from 'primevue/dropdown';
import ChartCard from '../components/ChartCard.vue';
import MapKZ from '../components/MapKZ.vue';
// @ts-ignore
import VueHighcharts from 'vue3-highcharts';
import HighCharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(HighCharts);

export default defineComponent({
  name: "ClientInquiry",
  components: {
    Dropdown,
    ChartCard,
    MapKZ,
    VueHighcharts,
},
  data() {
    return {
      selectedValue: '',
      data: [
        "Option 1", "Option 2", "Option 3",
      ]
    }
  }
})

</script>

<template>
  <!-- <Dropdown v-model="selectedValue" :options="data" placeholder="Select a option1" class="w-1rem h-screen"></Dropdown>
  <div>
    ClientInquiry
    {{ selectedValue }}
  </div> -->
  <div class="grid">
    <div class="item-1">
    </div>
    <div class="item-2">
    </div>
    <div class="item-3">
      <ChartCard></ChartCard>
    </div>
    <div class="item-4">
      <ChartCard></ChartCard>
    </div>
    <div class="item-5">
      
    </div>
    <div class="item-6">
      <ChartCard></ChartCard>
    </div>
    <div class="item-7">
      <ChartCard></ChartCard>
    </div>
    <div class="item-8">
      <MapKZ></MapKZ>
    </div>
    <div class="item-9">
    </div>
    <div class="item-10">
    </div>
  </div>

</template>

<style scoped>
.grid {
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(7, 1fr);
  height: 80vh;
  width: 100%;
  padding: 5px;
  /* background-color: white; */
}

.item-1 {
  grid-area: 1 / 1 / 3 / 3;
  background-color: yellow;
}
.item-2 {
  grid-area: 3 / 1 / 4 / 3;
  background-color: yellow;
}
.item-3 {
  grid-area: 4 / 1 / 6 / 3;
  background-color: yellow;
}
.item-4 {
  grid-area: 6 / 1 / 8 / 3;
  background-color: yellow;
}
.item-5 {
  grid-area: 1 / 3 / 6 / 7;
  background-color: yellow;
}
.item-6 {
  grid-area: 6 / 3 / 8 / 5;
  background-color: yellow;
}
.item-7 {
  grid-area: 6 / 5 / 8 / 8;
  background-color: yellow;
}
.item-8 {
  grid-area: 1 / 7 / 6 / 13;
  background-color: yellow;
}
.item-9 {
  grid-area: 6 / 8 / 8 / 10;
  background-color: yellow;
}
.item-10 {
  grid-area: 6 / 10 / 8 / 12;
  background-color: yellow;
}
</style>