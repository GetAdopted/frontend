<template>
  <div class="flex items-center w-full justify-center pt-8 bg-redpink-100">
    <h1 class="font-bold text-rosepurple text-2xl">Nossos parceiros</h1>
  </div>
  <div class="flex justify-between items-center px-8 py-16 bg-redpink-100">
    <div class="div1" v-for="partner in partners" :key="partner.src">
      <img :src="partner.src" :alt="partner.alt" />
    </div>
  </div>
</template>

<script>
import friskies from "@/public/brand/friskies.png";
import pelosfocinhos from "@/public/brand/pelosfocinhos.png";
import petz from "@/public/brand/petz.png";
import petcare from "@/public/brand/petcare.png";
import clinicaveterinaria from "@/public/brand/clinicaveterinaria.png";
import petsupport from "@/public/brand/petsupport.png";

export default {
  data() {
    return {
      partners: [
        {
          src: friskies,
          alt: "Friskies",
        },
        {
          src: pelosfocinhos,
          alt: "Pelos & Focinhos",
        },
        {
          src: petz,
          alt: "Petz",
        },
        {
          src: petcare,
          alt: "Petcare",
        },
        {
          src: clinicaveterinaria,
          alt: "Clinica Veterinária",
        },
        {
          src: petsupport,
          alt: "Pet Support",
        },
      ],
    };
  },
};
</script>

<style scoped>
.bg-redpink-100 {
  background-color: #fff6f7;
}

.text-rosepurple {
  color: #842e87;
}

.div1,
.div2,
.div3,
.div4,
.div5,
.div6 {
  width: 150px;
}
</style>
