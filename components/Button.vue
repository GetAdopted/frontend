<template>
  <button :class="myclass">
    <img :src="icon" alt="" />
    <span class="px-2">{{title}}</span>
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    myclass: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    }
  },
}
</script>


<style scoped>
.bg-rosepurple-700 {
  background-color: #842e87;
}

.bg-rosepurple-700:hover {
  background-color: #511053;
}
</style>
