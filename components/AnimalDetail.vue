<template>
  <div
    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800"
  >
    <img
      class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      :src="img"
    />

    <div class="flex flex-col justify-between p-4 leading-normal">
      <h1 class="font-bold mt-4 mb-4 text-lg">{{ name }}</h1>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ description }}
      </p>

      <div class="">
        <h1 class="font-bold mt-4 mb-4 text-base">
          PRINCIPAIS CARACTERÍSTICAS
        </h1>
        <div class="grid grid-cols-2 grid-gap-3 gap-y-6 items-center">
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
};
</script>
