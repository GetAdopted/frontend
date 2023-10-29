<template>
  <div>
    <Navbar></Navbar>
    <Banner :banner="banner" title="Uma nova chance" text="Cadastre aqui o animalzinho que foi encontrado em vulnerabilidade e precisa de um novo lar." :help="false"></Banner>
    <Register></Register>
    <Footer></Footer>
  </div>
</template>

<script>
import banner from "../public/images/donation.png";

export default {
  data() {
    return {
      banner,
    };
  },
};
</script>

<style>
* {
  font-family: Poppins;
}
</style>
