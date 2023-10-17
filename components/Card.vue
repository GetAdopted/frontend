<template>
  <div class="max-w-sm flex items-center flex-col">
    <img class="w-10" :src="icon" alt="" />
    <div class="px-6 py-4 flex items-center flex-col">
      <h1 class="font-bold text-base mb-2">{{ title }}</h1>
      <p class="text-gray-700 text-sm text-center">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
    props: {
        icon: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    },
}
</script>

