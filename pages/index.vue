<template>
  <div>
    <Navbar></Navbar>
    <Banner :banner="banner" title="Bem-vindo ao nosso site de adoção de animais!" text="Nossa missão é clara e apaixonada: cuidar e encontrar lares amorosos para
      animais abandonados." :help="true"></Banner>
    <Volunteer></Volunteer>
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

<style>
* {
  font-family: Poppins;
}
</style>
