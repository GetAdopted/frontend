<template>
<div class="mb-4">
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ title }}</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500">
    <option selected>--</option>
    <option value="1">{{ value1 }}</option>
    <option value="2">{{ value2 }}</option>
    <option value="3">{{ value3 }}</option>
    <option value="4">{{ value4 }}</option>
    <option value="5">{{ value5 }}</option>
    <option value="6">{{ value6 }}</option>
    <option value="7">{{ value7 }}</option>
    <option value="8">{{ value8 }}</option>
    <option value="9">{{ value9 }}</option>
    <option value="10">{{ value10 }}</option>
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
    value1: {
      type: String,
      required: false,
    },
    value2: {
      type: String,
      required: false,
    },
    value3: {
      type: String,
      required: false,
    },
    value4: {
      type: String,
      required: false,
    },
    value5: {
      type: String,
      required: false,
    },
    value6: {
      type: String,
      required: false,
    },
    value7: {
      type: String,
      required: false,
    },
    value8: {
      type: String,
      required: false,
    },
    value9: {
      type: String,
      required: false,
    },
    value10: {
      type: String,
      required: false,
    },
  },
};
</script>


