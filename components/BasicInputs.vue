<template>
  <div class="container d-block">
    <div class="fromGroup mb-5">
      <v-radio-group v-model="sex" row @change="onChangeSex">
        <v-radio key="1" label="男性" value="1"></v-radio>
        <v-radio key="2" label="女性" value="2"></v-radio>
      </v-radio-group>
      <v-switch
        v-model="marriage"
        label="配偶者あり"
        @change="onChangeMarriage"
      ></v-switch>
    </div>
    <div class="fromGroup mb-5">
      <v-slider
        v-model="age"
        prepend-icon="mdi-account-question"
        thumb-label
        min="20"
        max="60"
        class="mr-5"
        @change="onChangeAge"
      >
        <template v-slot:append>
          <v-text-field
            v-model="age"
            class="mt-0 pt-0"
            hide-details
            single-line
            type="number"
            suffix="才"
            style="width: 80px"
            @change="onChangeAge"
          ></v-text-field>
        </template>
      </v-slider>
    </div>
    <div class="fromGroup mb-5">
      <v-slider
        v-model="income"
        prepend-icon="mdi-currency-jpy"
        thumb-label
        min="0"
        max="10000"
        step="10"
        class="mr-5"
        @change="onChangeIncome"
      >
        <template v-slot:append>
          <v-text-field
            v-model="income"
            class="mt-0 pt-0"
            hide-details
            single-line
            type="number"
            suffix="万円"
            style="width: 100px"
            @change="onChangeIncome"
          ></v-text-field>
        </template>
      </v-slider>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ChatContextLogic, { IQuestion } from '../libs/ChatContextLogic'
import { basicStateModule } from '~/store/modules/basic'

@Component
export default class BasicInputs extends Vue {
  private sex: string = basicStateModule.sex.toString()
  private marriage: boolean = basicStateModule.marriage
  private age: number = basicStateModule.age
  private income: number = basicStateModule.income

  onChangeSex(arg) {
    basicStateModule.setSex(arg)
  }
  onChangeMarriage(arg) {
    basicStateModule.setAge(arg)
  }
  onChangeAge(arg) {
    basicStateModule.setAge(arg)
  }
  onChangeIncome(arg) {
    basicStateModule.setIncome(arg)
  }
  mounted() {}
}
</script>

<style scoped lang="scss">
.container {
}
.fromGroup {
  width: 95vw;
  display: block;

  .label {
    text-align: left;
  }
}
</style>
