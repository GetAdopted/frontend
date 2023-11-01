<template>
  <Layout>
    <div class="flex items-center w-full justify-center py-8">
      <h1 class="font-bold text-2xl">Conheça melhor o animalzinho escolhido</h1>
    </div>
    <AnimalDetail
      :image="animal.image"
      :name="animal.name"
      :description="animal.description"
      :is_castrated="animal.is_castrated"
      :gender="animal.gender"
      :is_vaccinated="animal.is_vaccinated"
      :age="animal.age"
      :race="animal.race"
      :adjective="animal.adjective"

    ></AnimalDetail>
  </Layout>
</template>

<style scoped>
.text-darkpurple {
  color: #730145;
}
</style>

<script>
export default {
  data() {
    return {
      animal: {},
    };
  },
  async created() {
    const response = await fetch(
      `http://127.0.0.1:8000/api/animals/${this.$route.params.id}`
    );
    const animal = await response.json();
    this.animal = animal;
  },
};
</script>
