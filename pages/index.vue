<template>
  <div>
    <!--<NuxtLink to="/about">Sobre</NuxtLink>-->
    <Navbar></Navbar>
    <Banner :banner="banner" title="Bem-vindo ao nosso site de adoção de animais!" text="Nossa missão é clara e apaixonada: cuidar e encontrar lares amorosos para
      animais abandonados." :help="true"></Banner>
    <Category></Category>
    <Partners></Partners>
    <Footer></Footer>
  </div>
</template>

<script>
import banner from "../public/images/banner_home.png";

export default {
  data() {
    return {
      banner,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

* {
  font-family: Poppins;
}
</style>
