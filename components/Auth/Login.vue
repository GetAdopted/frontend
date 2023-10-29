<template>
  <div class="flex flex-col items-center justify-center mt-6 mb-8">
    <form class="w-35">
      <Input :icon="email" title="Email" placeholder="meuemail@email.com"></Input>
      <Input :icon="password" title="Senha" placeholder="********"></Input>
      <span class="text-xs text-slate-400 pos-relative t-15">Não possui conta? <NuxtLink to="/auth/register">Registre-se aqui.</NuxtLink></span>
      <div>
        <Button myclass="bg-rosepurple-700 text-white font-regular py-2 px-4 mr-2 rounded-md" title="Login"></Button>
      </div>
    </form>
  </div>
</template>

<script>
import email from "../public/icons/email.png";
import password from "../public/icons/password.png";

export default {
  data() {
    return {
      email,
      password,
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
