<template>
    <Navbar></Navbar>
    <Banner :banner="banner" title="Adote um animal de rua" text="Oferecemos suporte contínuo pós-adoção, auxiliando os novos tutores na adaptação e solucionando quaisquer desafios que possam surgir." :help="false"></Banner>
    <Category></Category>
    <CategoryAnimal></CategoryAnimal>
    <Footer></Footer>
</template>
<script>
import banner from "../public/images/banner_adopt.png";

export default {
  data() {
    return {
      banner,
    };
  },
};
</script>

<style scoped>
* {
  font-family: Poppins;
}
</style>