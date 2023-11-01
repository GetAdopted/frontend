<template>
  <nav class="flex items-center justify-between flex-wrap bg-pink-100 p-4">
    <NuxtLink to="/">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img src="../public/brand/logo.png" alt="" />
      </div>
    </NuxtLink>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto">
      <NuxtLink to="/adopt">
        <Button myclass="bg-rosepurple-700 text-white font-regular py-2 px-4 mr-2 inline-flex rounded-md" :icon="paw" title="Adote um pet"></Button>
      </NuxtLink>
      <NuxtLink v-if="isLogged() === true" to="/register">
        <Button myclass="bg-pink-400 text-white font-regular py-2 px-4 mr-2 inline-flex rounded-md" :icon="paw" title="Cadastre um pet"></Button>
      </NuxtLink>
      <NuxtLink v-if="isLogged() === false" to="/auth/login">
        <Button myclass="bg-purple-100 text-rosepurple-700 font-bold py-2 px-4 mr-2 inline-flex items-center rounded-md" :icon="user"
         title="Login"></Button>
      </NuxtLink>
      <div v-if="isLogged() === true">
         <Button myclass="bg-purple-100 text-rosepurple-700 font-bold py-2 px-4 mr-2 inline-flex items-center rounded-md" :icon="user"
         title="Logout" @click="logout"></Button>
      </div>
    </div>
  </nav>
</template>

<script>
import paw from "../public/icons/paw.png";
import user from "../public/icons/user.png";

export default {
  data() {
    return {
      paw,
      user,
    };
  },
  methods: {
    isLogged(){
      return localStorage.getItem("token") ? true : false;
    },
    logout() {
      localStorage.clear();
      window.location.reload();
    }
  }
};
</script>

<style scoped>
.text-rosepurple-700 {
  color: #842e87;
}
</style>
