<script setup>
import {ref} from 'vue'
import { useCollection } from 'vuefire';
import { collection} from 'firebase/firestore';
import { db } from '@/firebase_conf';

const tests = useCollection(collection(db, 'flash cards'))
</script>

<template>
  <div class="cards">
    <div v-for="test in tests" :key="test.id" class="card">
      <div class="front">{{ test.front }}</div>
      <div class="back">{{ test.back }}</div>
    </div>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  gap: 1rem;
}
.card {
  width: 100px;
  height: 100px;
  border: 1px solid #aaa;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
</style>