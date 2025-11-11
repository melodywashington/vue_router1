<script setup>
import { ref, watchEffect } from 'vue'
const count = ref(0)

const onClick = () => {
  count.value = count.value + 1
}

watchEffect(() => {
  console.log('You clicked ${count.value} times')
})
</script>
<template>
  <div class="testing">
    <h1>This is a testing page</h1>
    <button @click="onClick">You clicked {{ count }} times</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .testing {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
