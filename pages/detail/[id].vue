<template>
  <Layout>
    <div class="flex items-center w-full justify-center py-8">
      <h1 class="font-bold text-2xl">Conheça melhor o animalzinho escolhido</h1>
    </div>
    <AnimalDetail
      :img="animal.img"
      :name="animal.name"
      :description="animal.description"
      :neutered="animal.neutered"
      :gender="animal.gender"
      :vaccines_up_to_date="animal.vaccines_up_to_date"
      :age="animal.age"
      :breed="animal.breed"
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
