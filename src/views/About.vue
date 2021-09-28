<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <button @click="counter++">Increase</button>
      <p id="counter">{{ counter }}</p>
    </div>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
  setup () {
    const counter = ref(0)
    const increment = () => {
      counter.value++
    }

    return { counter, increment }
  }
}
</script>
