<template>
  <button @click="eventFun">Emit</button>
</template>

<script>
export default {
  name: 'ChildComponent',
  props: {
    data: Number
  },
  emits: ['emitted'],
  setup (props, { emit }) {
    const eventFun = () => {
      console.log(1 - props.data)
      emit('emitted', 1 - props.data)
    }
    return { eventFun }
  }
}
</script>

<style>

</style>
