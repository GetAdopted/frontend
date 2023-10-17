<template>
  <div class="container-grid px-10 py-16">
    <div class="div1">
      <p class="text-xs w-65">
        O GetAdopted resgata, trata, castra e busca lares para gatos e cachorros
        encontrados abandonados por todo o Brasil e também trabalha para
        conscientizar as pessoas sobre a importância da castração e posse
        responsável.
      </p>
    </div>
    <div class="div2">
      <p class="text-xs">Quero adotar </p>
      <p class="text-xs">Quero ajudar </p> 
      <p class="text-xs">Transparência </p>
      <p class="text-xs">Políticas de Privacidade</p>
    </div>
    <div class="div3">
      <p class="font-bold text-pink-700 text-sm">Contato</p>
      <p class="text-xs flex"><img class="px-2 w-30 h-15" src="../public/icons/fb.png"> /getadopted</p>
      <p class="text-xs flex"><img class="px-2 w-30 h-15" src="../public/icons/inst.png"> @getadopted</p>
      <p class="text-xs flex"><img class="px-2 w-30 h-15" src="../public/icons/tw.png"> @getadopted</p>
    </div>
  </div>
  <div class="bg-black h-75 flex items-center justify-center">
    <img class="px-2" src="../public/icons/copyright.png">
    <p class="c-gray text-xs">2023. GetAdopted. All rights reserved.</p>
  </div>
</template>

<style scoped>
.container-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 0px;
  background-color: #F1ECF6;
  color: #535353;
}

.div1 {
  grid-area: 1 / 1 / 2 / 3;
}
.div2 {
  grid-area: 1 / 3 / 2 / 4;
}
.div3 {
  grid-area: 1 / 4 / 2 / 5;
}
.w-65 {
    width: 65ch;
}
.w-30 {
  width: 30px;
}
.h-15 {
  height: 15px;
}
.h-75 {
  height: 75px;
}
.c-gray {
  color: #E0E0E0;
}

</style>
