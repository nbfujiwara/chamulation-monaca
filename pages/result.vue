<template>
  <div class="resultContainer fill-height pa-2">
    <div>
      <bar-chart v-if="!isDonutChart"></bar-chart>
      <donut-chart v-if="isDonutChart"></donut-chart>
    </div>
    <div>
      <v-tabs v-model="selectedTab">
        <v-tab key="0"
          ><v-icon>mdi-calculator</v-icon
          ><span class="overline">シミュレーション</span></v-tab
        >
        <v-tab key="1"
          ><v-icon>mdi-format-list-bulleted</v-icon
          ><span class="overline">詳細情報</span></v-tab
        >
        <v-tab key="2"
          ><v-icon>mdi-human-male-male</v-icon
          ><span class="overline">基本情報</span></v-tab
        >
        <v-tab key="3"><v-icon>mdi-settings-outline</v-icon></v-tab>
      </v-tabs>
      <v-tabs-items v-model="selectedTab">
        <v-tab-item key="0"><appendix-inputs></appendix-inputs></v-tab-item>
        <v-tab-item key="1"
          >詳細修正詳細修正詳細修正詳細修正詳細修正詳細修正詳細修正</v-tab-item
        >
        <v-tab-item key="2"><basic-inputs></basic-inputs></v-tab-item>
        <v-tab-item key="3"
          ><v-switch v-model="isDonutChart" label="円グラフにする"></v-switch
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
}
</style>
