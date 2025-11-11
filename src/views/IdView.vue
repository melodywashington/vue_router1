<script setup>
import {ref} from 'vue'
import {RouterLink} from 'vue-router';
</script>

<template>
  <div>
    <!-- The current route is accessible as $route in the template -->
    User {{ $route.params.id }}
  </div>
</template>