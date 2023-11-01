<template>
  <div class="flex justify-center mt-2 mb-6">
    <div class="flex">
      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" :src="image"/>
    </div>
    <div v-if="adopt === false" class="flex flex-col w-35 justify-between px-8 py-2 leading-normal bg-gray-100">
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
            {{ is_castrated === 'Sim' ? 'Castrado' : 'Não Castrado' }}
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
            {{ is_vaccinated === 'Sim' ? 'Vacinado' : 'Não Vacinado' }}
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
            {{ race }}
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
        <Button myclass="bg-rosepurple-700 inline-flex text-white font-regular py-2 px-4 mr-2 rounded-md" @click="hasAdopted" :icon="paw" title="Adotar"></Button>
      </div>
    </div>
    <div v-if="adopt === true" class="w-35 justify-between px-8 py-2 leading-normal bg-gray-100">
      <h1 class="font-bold mb-4 text-lg">Parabéns</h1>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        Sua adoção foi feita com sucesso!
      </p>
      <p class="text-xs text-gray-700 dark:text-gray-400">
        Você será redirecionado para a página principal.
      </p>
    </div>
  </div>
  
</template>

<script>
import paw from "../public/icons/paw.png";

export default {
  props: {
    image: {
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
    is_castrated: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    is_vaccinated: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    race: {
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
      adopt: false,
    };
  },
  methods:{
    hasAdopted(){
     this.adopt = true;
     const animalId = this.$route.params.id;
     setTimeout(() => {
      this.deleteAnimal(animalId);
      this.adopt = false;
      this.$router.push("/");
    }, 6000);

    },
    deleteAnimal(id){
      this.$axios.delete(`/animals/${id}`);
    }
  }
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
