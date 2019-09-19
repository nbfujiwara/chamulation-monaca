<template>
  <div class="chatContainer">
    <div v-for="(item, i) in chatData" :key="i" :to="item.to">
      <bot-balloon
        v-if="isBotType(item.type)"
        :serif="item.serif"
      ></bot-balloon>
      <input-balloon
        v-if="isInputType(item.type)"
        :question="item.question"
        @select="onSelectFromInput"
      ></input-balloon>
      <self-balloon
        v-if="isSelfType(item.type)"
        :serif="item.serif"
      ></self-balloon>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ChatContextLogic, { IChatBalloon } from '~/libs/ChatContextLogic'
import { basicStateModule } from '~/store/modules/basic'

@Component({
  components: {
    BotBalloon: () => import('../components/BotBalloon.vue'),
    InputBalloon: () => import('../components/InputBalloon.vue'),
    SelfBalloon: () => import('../components/SelfBalloon.vue')
  }
})
export default class IndexPage extends Vue {
  chatData: IChatBalloon[] = []
  chatContext: ChatContextLogic

  isBotType(type) {
    return ChatContextLogic.TYPE_BOT === type
  }
  isInputType(type) {
    return ChatContextLogic.TYPE_INPUTS === type
  }
  isSelfType(type) {
    return ChatContextLogic.TYPE_SELF === type
  }
  mounted() {
    this.chatContext = new ChatContextLogic()
    this.tickContext()
  }
  tickContext() {
    const balloon = this.chatContext.getNext()
    if (balloon.type === ChatContextLogic.TYPE_FINISH) {
      this.onCompleteInput()
      return
    }
    this.chatData.push(balloon)
    if (balloon.type !== ChatContextLogic.TYPE_INPUTS) {
      setTimeout(() => this.tickContext(), 500)
    }
  }
  onCompleteInput() {
    basicStateModule.setBasic(this.chatContext.getAllAnswer())
    this.$router.push({ path: '/result' })
  }
  onSelectFromInput(val) {
    this.chatContext.putAnswer(val)
    this.chatData.splice(this.chatData.length - 1, 1)
    this.tickContext()
  }
}
</script>

<style scoped>
.chatContainer {
  overflow: hidden auto;
  width: 100%;
  height: 100%;
  padding: 20px 10px;
  margin: 0;
  text-align: right;
  font-size: 14px;
  background: #7da4cd;
}
</style>
