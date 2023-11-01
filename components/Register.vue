<template>
  <div class="flex flex-col items-center justify-center mt-4 mb-4">
    <div class="w-full text-center mb-6 mt-4">
      <h1 class="font-bold text-2xl">
        Preencha os dados do animal que será colocado para adoção
      </h1>
    </div>
    <form class="w-full max-w-sm" @submit.prevent="submit">
      <Input
        @change="setValue"
        lead="name"
        :icon="paw"
        title="Nome do animal"
        placeholder="ex: Lôzinha"
      ></Input>
      <Description
        @change="setValue"
        lead="description"
        title="Faça uma breve descrição do animal"
      ></Description>
      <InputImage @change="setValue" lead="image"></InputImage>
      <Radio
        @change="setValue"
        lead="is_castrated"
        title="Castrado?"
        option1="Sim"
        option2="Não"
      ></Radio>
      <Radio
        @change="setValue"
        lead="is_vaccinated"
        title="Vacinas em dia?"
        option1="Sim"
        option2="Não"
      ></Radio>
      <Radio
        @change="setValue"
        lead="gender"
        title="Qual o gênero?"
        option1="Macho"
        option2="Fêmea"
      ></Radio>
      <Select
        @change="setValue"
        lead="race"
        title="Qual a raça do animal?"
        :collection="provider.races"
      ></Select>
      <Select
        @change="setValue"
        lead="age"
        title="Qual idade aproximada do seu animalzinho?"
        :collection="provider.ages"
      ></Select>
      <Select
        @change="setValue"
        lead="adjective"
        title="Que adjetivo define seu animalzinho?"
        :collection="provider.adjectives"
      ></Select>
      <Button
        type="submit"
        myclass="bg-rosepurple-700 text-white mt-4 mb-4 font-regular py-2 px-4 rounded-md"
        title="Cadastrar"
      ></Button>
    </form>
  </div>
</template>

<script>
import paw from "../public/icons/icon_breed.png";

const adjectives = [
  "Fofo",
  "Brincalhão",
  "Tímido",
  "Curioso",
  "Energético",
  "Peludo",
  "Manso",
  "Dócil",
  "Calmo",
  "Meigo",
];
const ages = [
  "0-3 meses",
  "4-6 meses",
  "7-9 meses",
  "10 meses a 1 ano",
  "1-3 anos",
  "3-5 anos",
  "5-7 anos",
  "7-9 anos",
  "9-12 anos",
  "12 anos ou mais",
];
const races = [
  "Buldogue",
  "Golden Retriever",
  "Poodle",
  "Labrador",
  "Pastor Alemão",
  "Siamês",
  "Maine Coon",
  "Angorá",
  "Azul Russo",
  "SDR",
];

export default {
  data() {
    return {
      paw,
      provider: {
        adjectives,
        ages,
        races,
      },
      form: {
        name: "",
        description: "",
        is_castrated: "",
        is_vaccinated: "",
        gender: "",
        race: "",
        age: "",
        adjective: "",
        image: "",
      },
    };
  },
  methods: {
    setValue(i) {
      this.form[i.key] = i.value;
    },
    submit() {
      console.log(this.form);
      this.$axios
        .post("/animals", this.form)
        .then(({ status }) => {
          if (status === 201) {
            this.$router.push("/adopt");
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
};
</script>
