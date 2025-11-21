<script setup>
import { computed, ref, watch } from 'vue'
import { useCollection, useDocument } from 'vuefire'
import { collection, doc } from 'firebase/firestore'
import {db} from '../firebase_conf'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const test_source = computed => doc(db, 'flash cards', route.params.id)
const test = useDocument(test_source)
watch(test, (new_data, old_data)=>{
  if (! new_data) {
    router.push("/")
  }
})
</script>

<template>
  <RouterLink :to="{ name: 'id', params: { id: '14' } }">test</RouterLink>
  <RouterLink :to="{ name: 'id', params: { id: '2' } }">other test</RouterLink>
  <RouterLink :to="{ name: 'id', params: { id: '12' } }">third test</RouterLink>


    {{test}}
</template>