<template>
  <div class="flex items-center w-full justify-center py-8 mt-8">
    <h1 class="font-bold text-2xl">Muitas opções de amiguinhos na GetAdopted</h1>
  </div>
  <div class="container-grid m-8">
    <AnimalCard class="div1" :img="imagem" name="Megan" atributo1="Fêmea" atributo2="Castrada" atributo3="1 ano e 3 meses"></AnimalCard>
    <AnimalCard class="div2" :img="imagem" name="Megan" atributo1="Fêmea" atributo2="Castrada" atributo3="1 ano e 3 meses"></AnimalCard>
    <AnimalCard class="div3" :img="imagem" name="Megan" atributo1="Fêmea" atributo2="Castrada" atributo3="1 ano e 3 meses"></AnimalCard>
    <AnimalCard class="div4" :img="imagem" name="Megan" atributo1="Fêmea" atributo2="Castrada" atributo3="1 ano e 3 meses"></AnimalCard>
    <AnimalCard class="div5" :img="imagem" name="Megan" atributo1="Fêmea" atributo2="Castrada" atributo3="1 ano e 3 meses"></AnimalCard>
    <AnimalCard class="div6" :img="imagem" name="Megan" atributo1="Fêmea" atributo2="Castrada" atributo3="1 ano e 3 meses"></AnimalCard>
    <AnimalCard class="div7" :img="imagem" name="Megan" atributo1="Fêmea" atributo2="Castrada" atributo3="1 ano e 3 meses"></AnimalCard>
    <AnimalCard class="div8" :img="imagem" name="Megan" atributo1="Fêmea" atributo2="Castrada" atributo3="1 ano e 3 meses"></AnimalCard>
    <AnimalCard class="div9" :img="imagem" name="Megan" atributo1="Fêmea" atributo2="Castrada" atributo3="1 ano e 3 meses"></AnimalCard>
    <AnimalCard class="div10" :img="imagem" name="Megan" atributo1="Fêmea" atributo2="Castrada" atributo3="1 ano e 3 meses"></AnimalCard>
    <AnimalCard class="div11" :img="imagem" name="Megan" atributo1="Fêmea" atributo2="Castrada" atributo3="1 ano e 3 meses"></AnimalCard>
    <AnimalCard class="div12" :img="imagem" name="Megan" atributo1="Fêmea" atributo2="Castrada" atributo3="1 ano e 3 meses"></AnimalCard>
  </div>
</template>

<script>
import imagem from "../public/animals/animal1.png";

export default {
  data() {
    return {
      imagem,
    };
  },
};
</script>

<style scoped>
.container-grid {
display: grid;
grid-template-columns: repeat(4, 0.5fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 8px;
grid-row-gap: 8px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 1 / 3 / 2 / 4; }
.div4 { grid-area: 1 / 4 / 2 / 5; }
.div5 { grid-area: 2 / 1 / 3 / 2; }
.div6 { grid-area: 2 / 2 / 3 / 3; }
.div7 { grid-area: 2 / 3 / 3 / 4; }
.div8 { grid-area: 2 / 4 / 3 / 5; }
.div9 { grid-area: 3 / 1 / 4 / 2; }
.div10 { grid-area: 3 / 2 / 4 / 3; }
.div11 { grid-area: 3 / 3 / 4 / 4; }
.div12 { grid-area: 3 / 4 / 4 / 5; }

</style>
