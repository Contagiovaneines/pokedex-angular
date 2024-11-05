# Pokedex

![Pokedex Logo](https://www.pngarts.com/files/4/Pokeball-Download-Transparent-PNG-Image.png) <!-- Adicione uma imagem do logo da Pokédex aqui, se desejar -->

Este projeto é uma aplicação web desenvolvida em Angular que utiliza a [PokeAPI](https://pokeapi.co) para exibir uma lista de Pokémon. O objetivo do projeto é fornecer uma interface simples e intuitiva para visualizar informações básicas sobre os Pokémon.

## Sumário

- [Recursos](#recursos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Componentes](#componentes)
- [Serviço](#serviço)
- [Configuração do App Module](#configuração-do-app-module)
- [Modelagem de Dados](#modelagem-de-dados)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Agradecimentos](#agradecimentos)

## Recursos

- Visualização de até 151 Pokémon.
- Exibição de imagens e nomes dos Pokémon.
- Design responsivo e intuitivo.

## Tecnologias Utilizadas

- [Angular](https://angular.io/) - Framework para construção da interface do usuário.
- [TypeScript](https://www.typescriptlang.org/) - Linguagem de programação usada no desenvolvimento.
- [PokeAPI](https://pokeapi.co/) - API externa para obter dados dos Pokémon.
- [Sass](https://sass-lang.com/) - Pré-processador CSS usado para estilização.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
angular-pokedex/
├── src/
│   ├── app/
│   │   ├── pokemon-card/
│   │   │   ├── pokemon-card.component.html
│   │   │   ├── pokemon-card.component.sass
│   │   │   ├── pokemon-card.component.ts
│   │   ├── pokemon-list/
│   │   │   ├── pokemon-list.component.html
│   │   │   ├── pokemon-list.component.sass
│   │   │   ├── pokemon-list.component.ts
│   │   ├── service/
│   │   │   └── pokemon.service.ts
│   │   ├── pokemon.model.ts
│   │   ├── app.component.html
│   │   ├── app.module.ts
│   ├── index.html
│   ├── styles.sass
├── package.json
```

## Instalação

Para instalar e rodar o projeto, siga as etapas abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seuusuario/angular-pokedex.git
   cd angular-pokedex
   ```

2. **Instale as dependências do projeto:**
   Execute o comando abaixo para instalar todas as dependências necessárias:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   Para rodar o projeto, utilize:
   ```bash
   ng serve
   ```

   Depois, abra seu navegador e acesse `http://localhost:4200`.

## Como Usar

A aplicação será exibida no seu navegador com uma lista de Pokémon. Cada cartão mostrará a imagem e o nome do Pokémon. Você pode navegar por esta lista para visualizar todos os Pokémon disponíveis.

## Componentes

### 1. `PokemonCardComponent`

- **Responsabilidade:** Exibe a imagem e o nome de um único Pokémon.
  
**`pokemon-card.component.html`:**
```html
<div class="pokemon-card">
    <img [src]="pegarImagemPokemon()" alt="{{ pokemon }}" />
    <h2>{{ pokemon }}</h2>
</div>
```

- **`pegarImagemPokemon()`**: Método que gera a URL da imagem do Pokémon com base no seu número.

**`pokemon-card.component.ts`:**
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input() pokemon: string | undefined;
  @Input() numero: number | undefined;

  pegarImagemPokemon(): string {
    const numeroFormatado = this.leadingZero(this.numero ?? 0);
    return `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
  }

  private leadingZero(value: number | undefined, size = 3): string {
    if (value === undefined) {
      return '000';
    }
    return String(value).padStart(size, '0');
  }
}
```

### 2. `PokemonListComponent`

- **Responsabilidade:** Exibe a lista de Pokémon usando o componente `PokemonCardComponent`.
  
**`pokemon-list.component.html`:**
```html
<div class="pokemon-list">
    <app-pokemon-card *ngFor="let pokemon of pokemonService.pokemons; index as i" [pokemon]="pokemon.name"
        [numero]="i + 1">
    </app-pokemon-card>
</div>
```

**`pokemon-list.component.ts`:**
```typescript
import { Component } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {
  constructor(public pokemonService: PokemonService) {}
}
```

## Serviço

### `PokemonService`

- **Responsabilidade:** Gerencia as requisições à PokeAPI e armazena os dados dos Pokémon.

**`pokemon.service.ts`:**
```typescript
import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: any[] = [];

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }

  async carregarPokemons() {
    try {
      const requisicao = await this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151').toPromise();
      const pokemonRequests = requisicao.results.map((pokemon: any) =>
        this.httpClient.get<any>(pokemon.url).toPromise()
      );

      this.pokemons = await Promise.all(pokemonRequests);
      console.log(this.pokemons);
    } catch (error) {
      console.error('Erro ao carregar pokémons:', error);
    }
  }
}
```

## Configuração do App Module

**`app.module.ts`:**
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './service/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
- **`HttpClientModule`**: Importante para realizar requisições HTTP.

## Modelagem de Dados

### `pokemon.model.ts`
```typescript
export interface Pokemon {
    name: string;
    url: string;
}
```
- Define a estrutura de dados do Pokémon.

## Contribuição

Se você gostaria de contribuir para este projeto, sinta-se à vontade para enviar um pull request ou abrir uma issue no repositório.

## Licença

Este projeto está sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Agradecimentos

- [PokeAPI](https://pokeapi.co/) - para fornecer os dados dos Pokémon.
- [Angular](https://angular.io/) - por fornecer um framework poderoso e flexível.
- Todos os contribuidores que ajudaram a tornar este projeto possível.

---
```

### Como Usar o README.md

1. **Crie o arquivo:** Crie um arquivo chamado `README.md` na raiz do seu projeto e cole o conteúdo acima.

2. **Adapte conforme necessário:** Personalize partes como o link do repositório Git, a imagem do logo da Pokédex e qualquer outra informação que possa ser relevante para o seu projeto.

3. **Manutenção:** Atualize o README sempre que houver mudanças significativas no projeto, garantindo que a documentação esteja sempre em dia.

Esse README fornecerá uma visão clara e abrangente do seu projeto, facilitando para novos desenvolvedores e usuários entenderem como configurar e usar a aplicação.
