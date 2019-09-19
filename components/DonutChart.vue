<template>
  <div class="pa-3">
    <div id="donutChart"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import * as c3 from 'c3'
import * as d3 from 'd3'
import CalculateDao from '../libs/dao/CalculateDao'
import { appendixStateModule } from '~/store/modules/appendix'

@Component
export default class DonutChart extends Vue {
  chart: c3.ChartAPI

  get appendixValuesForWait() {
    return appendixStateModule.valuesForWait
  }
  @Watch('appendixValuesForWait')
  onAppendixChanged(newVal: any, oldVal: any) {
    this.drawGraphData()
  }
  drawGraphData(): void {
    const balance = CalculateDao.getBalance()
    const profit =
      balance.incomePension +
      balance.incomeSaving +
      balance.incomeOther -
      balance.outcome
    const data = [
      ['年金', balance.incomePension],
      ['貯蓄など', balance.incomeSaving],
      ['その他収入', balance.incomeOther]
    ]

    if (profit > 0) {
      // this.chart.unload({ ids: ['不足'] })
      this.chart.hide('不足', { withLegend: true })
      this.chart.show('充足', { withLegend: true })
      data.push(['充足', profit])
    } else {
      // this.chart.unload({ ids: ['充足'] })
      this.chart.hide('充足', { withLegend: true })
      this.chart.show('不足', { withLegend: true })
      data.push(['不足', -profit])
    }
    this.chart.load({
      columns: data
    })
    d3.select('.c3-chart-arcs-title').text(
      '老後支出\n' + balance.outcome + '万円'
    )
  }

  mounted() {
    this.initChart()
    this.drawGraphData()
  }

  initChart(): void {
    this.chart = c3.generate({
      bindto: '#donutChart',
      donut: {
        label: {
          format(value, ratio, id) {
            return value + '万円'
          }
        },
        title: 'aaa'
      },
      data: {
        type: 'donut',
        columns: [['年金', 0], ['貯蓄など', 0], ['その他収入', 0]],
        order: null,
        donut: { title: 'bbb' }
      }
    })
  }
}
</script>
