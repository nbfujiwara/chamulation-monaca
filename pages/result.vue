<template>
  <div class="resultContainer fill-height pa-2">
    <div class="chartContainer">
      <bar-chart v-if="!isDonutChart"></bar-chart>
      <donut-chart v-if="isDonutChart"></donut-chart>
    </div>
    <div>
      <v-tabs
        v-model="selectedTab"
        fixed-tabs
        icons-and-text
        dark
        background-color="blue-grey darken-4"
      >
        <v-tabs-slider color="blue-grey lighten-5"></v-tabs-slider>
        <v-tab key="0" class="customTab"
          ><span class="overline">シミュ</span
          ><v-icon>mdi-calculator</v-icon></v-tab
        >
        <v-tab key="1" class="customTab"
          ><span class="overline">詳細</span
          ><v-icon>mdi-format-list-bulleted</v-icon></v-tab
        >
        <v-tab key="2" class="customTab"
          ><span class="overline">基本</span
          ><v-icon>mdi-human-male-male</v-icon></v-tab
        >
        <v-tab key="3" class="customTab"
          ><v-icon>mdi-settings-outline</v-icon></v-tab
        >
      </v-tabs>
      <v-tabs-items v-model="selectedTab" touchless>
        <v-tab-item key="0"><appendix-inputs></appendix-inputs></v-tab-item>
        <v-tab-item key="1"
        ><div class="container d-block">詳細修正詳細修正詳細修正詳細修正詳細修正詳細修正詳細修正</div></v-tab-item
        >
        <v-tab-item key="2"><basic-inputs></basic-inputs></v-tab-item>
        <v-tab-item key="3"
          ><div class="container d-block">
            <v-switch
              v-model="isDonutChart"
              label="円グラフにする"
            ></v-switch></div
        ></v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    BarChart: () => import('../components/BarChart.vue'),
    DonutChart: () => import('../components/DonutChart.vue'),
    AppendixInputs: () => import('../components/AppendixInputs.vue'),
    BasicInputs: () => import('../components/BasicInputs.vue')
  }
})
export default class ResultPage extends Vue {
  selectedTab = 0
  isDonutChart = false
}
</script>

<style scoped>
.resultContainer {
  overflow: hidden auto;
  width: 100%;
  margin: 0;
  font-size: 14px;
  background: #7da4cd;
}
.chartContainer {
  background: #ffffff;
}
.customTab {
  max-width: 280px;
}
</style>
