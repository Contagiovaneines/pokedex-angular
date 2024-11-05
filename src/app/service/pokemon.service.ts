import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: any[] = []; // Armazenar detalhes dos Pokémon

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }

  async carregarPokemons() {
    try {
      const requisicao = await this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151').toPromise();

      // Para cada Pokémon, busque seus detalhes
      const pokemonRequests = requisicao.results.map((pokemon: any) =>
        this.httpClient.get<any>(pokemon.url).toPromise()
      );

      // Aguardar todas as requisições dos Pokémon serem resolvidas
      this.pokemons = await Promise.all(pokemonRequests);
      
      // Log para verificar os dados carregados
      console.log(this.pokemons);
    } catch (error) {
      console.error('Erro ao carregar pokémons:', error); // Log de erro caso a requisição falhe
    }
  }
}
