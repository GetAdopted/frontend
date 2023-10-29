<template>
  <div class="mb-4">
    <label for="input-group" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white bg-gray-50 focus:ring-2 focus:outline-orange-600">{{title}}</label>
    <div class="relative">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
          <img class="w-5" :src="icon" alt="">
      </div>
      <input type="text" id="input-group" class="bg-gray-50 border text-gray-900 focus:outline-purple-500 text-sm rounded-lg block w-full pl-10 p-2.5" :placeholder="placeholder">
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    }
  },
}
</script>

