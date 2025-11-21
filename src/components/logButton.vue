<script>
const provider = new GoogleAuthProvider();
</script>
<script setup>
import {ref} from 'vue'
import { useCurrentUser, useFirebaseAuth } from 'vuefire';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
const user = useCurrentUser()
const auth = useFirebaseAuth()

async function login() {
  try{
    const result = await signInWithPopup(auth, provider)
  } catch{
    alert('oh no');
  }
}

async function logout() {
  try{
    const result = await signInWithPopup(auth, provider)
  } catch{
    alert('oh no');
  }
}
</script>

<template>
    <div>user:{{ user }}</div>
    <button @click="login()" v-if="!user">login</button>
    <button @click="logout()" v-else>logout</button>
</template>