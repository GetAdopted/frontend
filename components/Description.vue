<template>
  <div class="mb-4">
    <label
      for="input-group-1"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Descrição do animal</label
    >
    <textarea
      id="comment"
      rows="4"
      class="w-full rounded-lg p-2.5 text-sm text-gray-900 bg-white border border-gray-200 dark:bg-gray-800 focus:ring-0 focus:outline-purple-500 dark:text-white dark:placeholder-gray-400"
      placeholder="Escreva um comentário..."
      @change="change" 
      v-model="value"
    ></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    lead: {
      type: String,
      required: true,
    }
  },
  methods: {
    change(){
      this.$emit("change", {key: this.lead, value: this.value});
    }
  }
};
</script>
