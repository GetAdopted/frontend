<template>
  <div class="flex justify-center mt-2 mb-6">
    <div class="flex">
      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" :src="img"/>
    </div>
    <div v-if="true" class="flex flex-col w-35 justify-between px-8 py-2 leading-normal bg-gray-100">
      <h1 class="font-bold mb-4 text-lg">{{ name }}</h1>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ description }}
      </p>

      <div class="">
        <h1 class="font-bold mt-4 mb-4 text-base">
          PRINCIPAIS CARACTERÍSTICAS
        </h1>
        <div class="grid grid-cols-2 grid-gap-3 gap-y-6 justify-items-start">
          <p class="text-sm flex justify-center items-end">
            <img
              class="px-2 w-30 h-15"
              src="../public/icons/icon_neutered.png"
            />
            {{ neutered ? "Castrado" : "Não Castrado" }}
          </p>
          <p class="text-sm flex justify-center items-end">
            <img
              class="px-2 w-30 h-15"
              src="../public/icons/icon_gender.png"
            />
            {{ gender }}
          </p>
          <p class="text-sm flex justify-center items-end">
            <img
              class="px-2 w-30 h-15"
              src="../public/icons/icon_vaccine.png"
            />
            {{ vaccines_up_to_date ? "Vacinado" : "Não Vacinado" }}
          </p>
          <p class="text-sm flex justify-center items-end">
            <img class="px-2 w-30 h-15" src="../public/icons/icon_age.png" />
            {{ age + " anos" }}
          </p>
          <p class="text-sm flex justify-center items-end">
            <img
              class="px-2 w-30 h-15"
              src="../public/icons/icon_breed.png"
            />
            {{ breed }}
          </p>
          <p class="text-sm flex justify-center items-end">
            <img
              class="px-2 w-30 h-15"
              src="../public/icons/icon_adjective.png"
            />
            {{ adjective }}
          </p>
        </div>
      </div>
      <div class="mt-8">
        <Button myclass="bg-rosepurple-700 inline-flex text-white font-regular py-2 px-4 mr-2 rounded-md" :icon="paw" title="Adotar"></Button>
      </div>
    </div>
    <div v-if="false" class="flex flex-col w-35 justify-between px-8 py-2 leading-normal bg-gray-100">
      <h1 class="font-bold mb-4 text-lg">Parabéns</h1>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Sua adoção foi feita com sucesso!
      </p>
    </div>
  </div>
  
</template>

<script>
import paw from "../public/icons/paw.png";

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
    description: {
      type: String,
      required: true,
    },
    neutered: {
      type: Boolean,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    vaccines_up_to_date: {
      type: Boolean,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    adjective: {
      type: String,
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
.w-35 {
  width: 35%;
}

.justify-items-start {
  justify-items: start;
}

</style>
