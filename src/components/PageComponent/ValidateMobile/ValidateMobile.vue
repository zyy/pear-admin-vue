<template>
  <div class="validate-mobile-code-wrapper">
    <template
      v-for="n in validateCodeLength"
      :key="n"
    >
      <a-input
        class="validate-mobile-code-wrapper-input"
        :value="validateCodes[n -1]"
        @change="(e) => handleChange(e)"
      ></a-input>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'ValidateMobile',
  props: {
    value: {
      type: (Number | String) as PropType<number | string>
    },
    validateCodeLength: {
      type: Number as PropType<number>,
      default: 4
    }
  },
  setup (props) {
    const state = reactive({
      validateCodes: new Array(props.validateCodeLength)
    })
    const handleChange: void = (e: Event) => {
      console.log(e)
    }
    return {
      ...toRefs(state),
      handleChange
    }
  }
})
</script>

<style scoped lang="less">
.validate-mobile-code-wrapper {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  &-input {
    width: 40px;
    height: 40px;
    margin-right: 8px;
    text-align: center;
  }
}
</style>
