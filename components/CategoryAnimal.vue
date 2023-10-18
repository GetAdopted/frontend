<template>
  <div class="flex items-center w-full justify-center py-8 mt-8">
    <h1 class="font-bold text-2xl">
      Muitas opções de amiguinhos na GetAdopted
    </h1>
  </div>
  <div class="grid grid-cols-5 grid-gap-4 gap-y-4 m-8">
    <NuxtLink v-for="animal in animals" :key="animal.brief_description" :to="'detail/' + animal.id">
    <AnimalCard
      :img="animal.img"
      :name="animal.name"
      :atributo1="animal.age + ' anos'"
      :atributo2="animal.neutered ? 'Castrado' : 'Não castrado'"
      :atributo3="animal.adjective"
    ></AnimalCard>
    </NuxtLink>
  </div>
</template>

<script>

export default {
  data() {
    return {
      animals: [],
    };
  },
  async created() {
    const response = await fetch("http://127.0.0.1:8000/api/animals");
    const animals = await response.json();
    console.log(this.animals);

    this.animals = animals;
  },
};
</script>
