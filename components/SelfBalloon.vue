<template>
  <div class="chatBalloon slideInRight">
    <div class="chatBody">
      {{ serif }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ChatContextLogic, { IQuestion } from '../libs/ChatContextLogic'

@Component
export default class InputBalloon extends Vue {
  @Prop()
  public serif: string
}
</script>

<style scoped lang="scss">
.chatBalloon {
  margin: 10px 0;

  .chatBody {
    display: inline-block;
    position: relative;
    margin: 0 10px 0 0;
    padding: 8px;
    max-width: 250px;
    border-radius: 12px;
    background: #30e852;
    font-size: 15px;
  }
  .chatBody:after {
    content: '';
    position: absolute;
    top: 3px;
    right: -19px;
    border: 8px solid transparent;
    border-left: 18px solid #30e852;
    -webkit-transform: rotate(-35deg);
    transform: rotate(-35deg);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.slideInRight {
  animation-name: slideInRight;
  animation-duration: 0.5s;
  animation-timing-function: ease;
}
</style>
