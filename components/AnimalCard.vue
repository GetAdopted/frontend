<template>
  <div class="block max-w-[17rem] rounded-lg bg-white shadow dark:bg-neutral-700">
    <div class="relative overflow-hidden bg-cover bg-no-repeat">
      <img class="rounded-t-lg" :src="img" alt="" />
    </div>
    <div class="m-2">
      <p class="font-bold text-base text-darkpurple">{{ name }}</p>
    </div>
    <div class="">
      <span
        class="inline-block bg-purple-200 rounded-full px-4 py-2 text-xs font-semibold text-pink-900 m-2"
        >{{ atributo1 }}</span
      >
      <span
        class="inline-block bg-purple-200 rounded-full px-4 py-2 text-xs font-semibold text-pink-900 m-2"
        >{{ atributo2 }}</span
      >
      <span
        class="inline-block bg-purple-200 rounded-full px-4 py-2 text-xs font-semibold text-pink-900 m-2"
        >{{ atributo3 }}</span
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    atributo1: {
      type: String,
      required: true,
    },
    atributo2: {
      type: String,
      required: true,
    },
    atributo3: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.text-darkpurple {
  color: #730145;
}
</style>
