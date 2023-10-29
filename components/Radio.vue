<template>
<div class="mb-4">
 <label for="input-group" class="block text-sm font-medium text-gray-900 dark:text-white">{{title}}</label>
    <div class="flex">
        <div class="flex items-center pr-8">
            <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:outline-purple-500 dark:focus:outline-purple-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="bordered-radio-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{option1}}</label>
        </div>
        <div class="flex items-center pr-8">
            <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:outline-purple-500 dark:focus:outline-purple-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="bordered-radio-2" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{option2}}</label>
        </div>
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
    option1: {
      type: String,
      required: true,
    },
    option2: {
      type: String,
      required: true,
    }
  },
};
</script>