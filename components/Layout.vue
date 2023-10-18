<template>
    <Navbar></Navbar>
    <Banner :banner="banner" title="Adote um animal de rua" text="Oferecemos suporte contínuo pós-adoção, auxiliando os novos tutores na adaptação e solucionando quaisquer desafios que possam surgir." :help="false"></Banner>
    <slot></slot>
    <Footer></Footer>
</template>

<script>
import banner from "../public/images/detail_page.png";

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