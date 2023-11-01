<template>
  <div class="flex flex-col items-center justify-center mt-6 mb-8">
    <form class="w-35" @submit.prevent="submit">
      <Input
        :icon="layout.user"
        title="Nome"
        @change="setValue"
        lead="name"
        placeholder="Maria Saldanha"
      ></Input>
      <Select
        title="Cidade"
        @change="setValue"
        lead="city"
        :collection="provider.cities"
        v-model="form.city"
      ></Select>
      <Input
        :icon="layout.email"
        @change="setValue"
        lead="email"
        title="Email"
        placeholder="meuemail@email.com"
      ></Input>
      <Input
        :icon="layout.password"
        @change="setValue"
        lead="password"
        title="Senha"
        typeface="password"
        placeholder="********"
      ></Input>
      <Input
        :icon="layout.password"
        @change="setValue"
        lead="password_confirmation"
        title="Repetir senha"
        typeface="password"
        placeholder="********"
      ></Input>
      <span class="text-xs text-slate-400 pos-relative t-15"
        >Já possui conta? <NuxtLink to="/auth/login">Entrar.</NuxtLink></span
      >
      <div>
        <Button
          myclass="bg-rosepurple-700 text-white font-regular py-2 px-4 mr-2 rounded-md"
          type="submit"
          title="Registrar"
        ></Button>
      </div>
    </form>
  </div>
</template>

<script>
import email from "../public/icons/email.png";
import password from "../public/icons/password.png";
import user from "../public/icons/user.png";

const cities = [
  "Porto Alegre",
  "Vitória",
  "Rio de Janeiro",
  "São Paulo",
  "Florianópolis",
  "Salvador",
  "Curitiba",
  "Belo Horizonte",
  "Brasília",
  "Fortaleza",
];

export default {
  data() {
    return {
      layout: {
        email,
        password,
        user,
      },
      form: {
        name: "",
        city: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      provider: {
        cities,
      },
    };
  },
  methods: {
    submit() {
      this.$axios.post("auth/register", this.form).then(({ status, data }) => {
        if (status === 201) {
          this.$router.push('/auth/login');
        }
      }).catch(err => {
        alert(err.message);
      })
    },
    setValue(i) {
      this.form[i.key] = i.value;
    },
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
