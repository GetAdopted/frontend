## GetAdopted

GetAdopted é uma aplicação que visa conectar organizações de proteção animal (ONGs) a pessoas interessadas em adotar animais de estimação. Esta plataforma foi desenvolvida usando as tecnologias Nuxt.js para o front-end e Laravel para o back-end.

Requisitos
Antes de começar a configurar e executar o projeto GetAdopted, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Composer](https://getcomposer.org/)
- [PHP](https://www.php.net/) (v7.3 or higher)
- [MySQL](https://www.mysql.com/) or another compatible database management system
- [Git](https://git-scm.com/)

### Configuração do Front-End (Nuxt.js)

Clone o repositório do projeto para o seu sistema local:

```bash
Copy code
git clone https://seu-repositorio.git
```

Acesse o diretório do front-end:

```bash
Copy code
cd GetAdopted/front-end
```

Instale as dependências do front-end:

```bash
Copy code
npm install

# ou

yarn install
```

Crie um arquivo .env na raiz do diretório do front-end para configurar as variáveis de ambiente. Você pode se basear em um arquivo .env.example existente.

Inicie o servidor de desenvolvimento do Nuxt.js:

```bash
Copy code
npm run dev

# ou

yarn dev
```

O front-end estará acessível em http://localhost:3000.

Configuração do Back-End (Laravel)
Acesse o diretório do back-end:

```bash
Copy code
cd GetAdopted/back-end
```

Instale as dependências do back-end usando o Composer:

```bash
Copy code
composer install
```

Crie um arquivo .env na raiz do diretório do back-end para configurar as variáveis de ambiente. Você pode se basear em um arquivo .env.example existente.

Gere uma chave de aplicativo:

```bash
Copy code
php artisan key:generate
```

Execute as migrações para criar as tabelas do banco de dados:

```bash
Copy code
php artisan migrate
```

Inicie o servidor Laravel:

```bash
Copy code
php artisan serve
```

O back-end estará acessível em http://localhost:8000.

Uso da Aplicação
Acesse a aplicação no seu navegador em http://localhost:3000 para começar a explorar e usar o GetAdopted. As ONGs podem cadastrar animais disponíveis para adoção, e os interessados podem buscar e entrar em contato com as ONGs.

Certifique-se de configurar corretamente as variáveis de ambiente, como chaves de API, configurações de banco de dados e outras informações sensíveis em ambos os ambientes (front-end e back-end) para garantir o funcionamento adequado da aplicação.

Para implantar a aplicação em um ambiente de produção, consulte a documentação específica para implantação de projetos Nuxt.js e Laravel em servidores web adequados.

Este é um guia básico de como configurar e executar o projeto GetAdopted em seu ambiente de desenvolvimento local. Certifique-se de revisar a documentação oficial do Nuxt.js e do Laravel para obter informações detalhadas sobre como implantar a aplicação em um ambiente de produção.

Divirta-se usando o GetAdopted e contribua para a causa da adoção responsável de animais de estimação!
