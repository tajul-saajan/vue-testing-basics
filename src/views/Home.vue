<template>
  <div class="home">
    <h1>This is an Home page</h1>
    <ChildComponent :data="val" @emitted="getEmittedData"></ChildComponent>
    <div v-if="val===1">True</div>
    <div v-else>False</div>
  </div>
</template>

<script>
import ChildComponent from '@/components/ChildComponent'
import { ref } from '@vue/reactivity'
export default {
  name: 'Home',
  components: { ChildComponent },
  setup () {
    const val = ref(0)
    const getEmittedData = (payload) => {
      val.value = payload
      console.log(payload, val.value)
    }
    return { val, getEmittedData }
  }
}
</script>
