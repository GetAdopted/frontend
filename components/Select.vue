<template>
  <div class="mb-4">
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ title }}</label>
    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500">
      <option selected>--</option>
      <option :value="item" v-for="item in collection">{{ item }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    collection: {
      type: Array,
      required: true,
    },
  },
};
</script>
