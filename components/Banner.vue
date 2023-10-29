<template>
  <img class="banner" :src="banner" alt="" />

  <div class="title">
    <h1 class="font-bold text-lg">{{ title }}</h1>
    <p class="text-base">{{ text }}</p>

    <div class="inline-flex mt-6" v-if="help === true">
      <NuxtLink to="/adopt">
        <Button myclass="bg-rosepurple-700 text-white font-regular py-2 px-4 mr-2 inline-flex rounded-md" :icon="paw" title="Adote um pet"></Button>
      </NuxtLink>

      <ButtonOutline />
    </div>
  </div>
</template>

<script>
import paw from "../public/icons/paw.png";

export default {
  props: {
    banner: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    help: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      paw,
    };
  },
};
</script>

<style scoped>
.banner {
  width: 100%;
  position: relative;
}

.title {
  position: absolute;
  top: 175px;
  right: 175px;
  width: 50ch;
  text-align: right;
}
</style>
