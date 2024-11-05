
# Pokedex

Uma aplicação web desenvolvida em Angular que utiliza a [PokeAPI](https://pokeapi.co/) para exibir uma lista de Pokémon. O projeto foi criado para proporcionar uma interface simples e intuitiva para visualizar informações básicas sobre os Pokémon, permitindo que os usuários explorem até 151 Pokémon com imagens e nomes.

## Recursos

- Visualização de até 151 Pokémon.
- Exibição de imagens e nomes dos Pokémon.
- Design responsivo e intuitivo.

## Tecnologias Utilizadas

- Angular
- TypeScript
- PokeAPI
- Sass

## Como Executar

Siga as instruções no arquivo [README.md](README.md) para instalar e executar o projeto localmente.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a Licença MIT.
```

### Passando do VSCode para o GitHub

Para enviar seu projeto do VSCode para o GitHub, siga os passos abaixo:

#### 1. **Inicialize o repositório Git (se ainda não tiver feito)**

Se ainda não inicializou o repositório no seu projeto, abra o terminal do VSCode e execute:

```bash
git init
```

#### 2. **Adicione seu repositório remoto**

Se você ainda não criou um repositório no GitHub, faça isso:

1. Vá para [GitHub](https://github.com) e crie um novo repositório.
2. Copie a URL do repositório, que deve ter a forma `https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git`.

Agora, no terminal do VSCode, execute:

```bash
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
```

#### 3. **Adicione os arquivos ao staging**

Adicione todos os arquivos do projeto ao staging:

```bash
git add .
```

#### 4. **Faça o commit das suas alterações**

Realize o commit das suas alterações com uma mensagem descritiva:

```bash
git commit -m "Descrição do que foi feito"
```

#### 5. **Envie suas alterações para o GitHub**

Por fim, envie suas alterações para o repositório remoto:

```bash
git push -u origin master
```

> **Nota:** Se você estiver utilizando uma branch diferente de `master` (como `main`), substitua `master` pelo nome da sua branch atual.

### 6. **Autenticação (se necessário)**

Se você não estiver autenticado, o Git pode solicitar que você insira seu nome de usuário e senha do GitHub. Se você habilitou a autenticação de dois fatores, precisará usar um token de acesso pessoal em vez da senha.

### 7. **Confirmação**

Após seguir esses passos, verifique seu repositório no GitHub para garantir que os arquivos foram enviados corretamente.

### Dicas Adicionais

- Certifique-se de ter o Git instalado em sua máquina e que o VSCode esteja configurado para usar o Git.
- Mantenha seu repositório atualizado com commits frequentes para um melhor controle de versão.
- Use um arquivo `.gitignore` para evitar o envio de arquivos que não precisam ser rastreados (como arquivos de configuração ou dependências de build).

Se precisar de mais ajuda com qualquer uma dessas etapas, estou aqui para ajudar!