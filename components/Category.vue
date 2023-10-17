<template>
    <div class="flex items-center w-full justify-center py-8 mt-8">
      <h1 class="font-bold text-2xl">Como a adoção na GetAdopted funciona?</h1>
    </div>
  <div class="container-grid mt-8 mb-8">
    <Card
      class="div1"
      :icon="vaccine"
      title="Vacinação em dia"
      text="Todos os animais do site são vermifugados, vacinados e castrados."
    ></Card>
    <Card
      class="div2"
      :icon="monitor"
      title="Escolha do animal"
      text="Você entra no site, escolhe o animalzinho e clica em saiba mais. Caso este seja o escolhido, você clica em quero adotar."
    ></Card>
    <Card
      class="div3"
      :icon="criterio"
      title="Critérios de adoção"
      text="Você lê atentamente ao critérios e, caso se encaixe no perfil de adotante, você clica em eu atendo aos critérios."
    ></Card>
    <Card
      class="div4"
      :icon="form"
      title="Formulário"
      text="Você deve preencher corretamente o formulário de solicitação de adoção."
    ></Card>
    <Card
      class="div5"
      :icon="money"
      title="Condições financeiras"
      text="O adotante precisa ter condições de alimentar e vacinar, além de levar ao veterinário sempre que necessário."
    ></Card>
    <Card
      class="div6"
      :icon="letter"
      title="Resposta"
      text="O voluntário responsável pelo animal responde sua solicitação dentro de 48h."
    ></Card>
    <Card
      class="div7"
      :icon="calender"
      title="Agendamento"
      text="Por email, é agendado local e horário para entrega do animalzinho. Não cobramos taxa de adoção."
    ></Card>
    <Card
      class="div8"
      :icon="delivery"
      title="Entrega"
      text="O voluntário responsável levará o animal até o local combinado por email."
    ></Card>
  </div>
</template>

<script>
import vaccine from "../public/icons/vaccine.png";
import monitor from "../public/icons/monitor.png";
import criterio from "../public/icons/criterio.png";
import form from "../public/icons/form.png";
import money from "../public/icons/money.png";
import letter from "../public/icons/letter.png";
import calender from "../public/icons/calender.png";
import delivery from "../public/icons/delivery.png";

export default {
  data() {
    return {
      vaccine,
      monitor,
      criterio,
      form,
      money,
      letter,
      calender,
      delivery,
    };
  },
};
</script>

<style scoped>
.container-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 18px;
}

.div1 {
  grid-area: 1 / 1 / 2 / 2;
}
.div2 {
  grid-area: 1 / 2 / 2 / 3;
}
.div3 {
  grid-area: 1 / 3 / 2 / 4;
}
.div4 {
  grid-area: 1 / 4 / 2 / 5;
}
.div5 {
  grid-area: 2 / 1 / 3 / 2;
}
.div6 {
  grid-area: 2 / 2 / 3 / 3;
}
.div7 {
  grid-area: 2 / 3 / 3 / 4;
}
.div8 {
  grid-area: 2 / 4 / 3 / 5;
}
</style>
