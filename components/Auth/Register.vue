<template>
  <div class="flex flex-col items-center justify-center mt-6 mb-8">
    <form class="w-35">
      <Input :icon="user" title="Nome" placeholder="Maria Saldanha"></Input>
      <Select title="Cidade" value1="Porto Alegre" value2="Vitória" value3="Rio de Janeiro" value4="São Paulo" value5="Florianópolis" value6="Salvador" value7="Curitiba" value8="Belo Horizonte" value9="Brasília" value10="Fortaleza"></Select>
      <Input :icon="email" title="Email" placeholder="meuemail@email.com"></Input>
      <Input :icon="password" title="Senha" placeholder="********"></Input>
      <Input :icon="password" title="Repetir senha" placeholder="********"></Input>
      <span class="text-xs text-slate-400 pos-relative t-15">Já possui conta? <a>Entrar.</a></span>
      <div>
        <Button myclass="bg-rosepurple-700 text-white font-regular py-2 px-4 mr-2 rounded-md" title="Registrar"></Button>
      </div>
    </form>
  </div>
</template>

<script>
import email from "../public/icons/email.png";
import password from "../public/icons/password.png";
import user from "../public/icons/user.png";

export default {
  data() {
    return {
      email,
      password,
      user,
    };
  },
};
</script>

<style scoped>
.w-35 {
  width: 35%;
}

.pos-relative {
  position: relative;
}

.t-15 {
  top: -15px;
}
</style>
