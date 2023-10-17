<template>
    <Navbar></Navbar>
    <Banner :banner="banner" title="Adote um animal de rua" text="Oferecemos suporte contínuo pós-adoção, auxiliando os novos tutores na adaptação e solucionando quaisquer desafios que possam surgir." :help="false"></Banner>
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

* {
  font-family: Poppins;
}
</style>