<template>
  <div class="flex flex-col items-center justify-center mt-4 mb-4">
    <div class="w-full text-center mb-6 mt-4">
      <h1 class="font-bold text-2xl">Preencha os dados do animal que será colocado para adoção</h1>
    </div>
    <form class="w-full max-w-sm">
      <Input :icon="paw" title="Nome do animal" placeholder="ex: Lôzinha"></Input>
      <Description title="Faça uma breve descrição do animal"></Description>
      <InputImage></InputImage>
      <Radio title="Castrado?" option1="Sim" option2="Não"></Radio>
      <Radio title="Vacinas em dia?" option1="Sim" option2="Não"></Radio>
      <Radio title="Qual o gênero?" option1="Macho" option2="Fêmea"></Radio>
       <Select
        title="Qual a raça do animal?"
        value1="Buldogue"
        value2="Golden Retriever"
        value3="Poodle"
        value4="Labrador"
        value5="Pastor Alemão"
        value6="Siamês"
        value7="Maine Coon"
        value8="Angorá"
        value9="Azul Russo"
        value10="SDR"
      ></Select>
      <Select
        title="Qual idade aproximada do seu animalzinho?"
        value1="0-3 meses"
        value2="4-6 meses"
        value3="7-9 meses"
        value4="10 meses a 1 ano"
        value5="1-3 anos"
        value6="3-5 anos"
        value7="5-7 anos"
        value8="7-9 anos"
        value9="9-12 anos"
        value10="12 anos ou mais"
      ></Select>
      <Select
        title="Que adjetivo define seu animalzinho?"
        value1="Fofo"
        value2="Brincalhão"
        value3="Tímido"
        value4="Curioso"
        value5="Energético"
        value6="Peludo"
        value7="Manso"
        value8="Dócil"
        value9="Calmo"
        value10="Meigo"
      ></Select>

      <Button myclass="bg-rosepurple-700 text-white font-regular py-2 px-4 mr-2 rounded-md"
      title="Cadastrar"></Button>

    </form>
  </div>
</template>

<script>
import paw from "../public/icons/icon_breed.png";

export default {
  data() {
    return {
      paw,
    };
  },
};
</script>
