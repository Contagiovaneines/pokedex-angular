import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input() pokemon: string | undefined; // Pokémon é opcional
  @Input() numero: number | undefined; // Número é opcional

  // Método para pegar a imagem do Pokémon
  pegarImagemPokemon(): string {
    const numeroFormatado = this.leadingZero(this.numero ?? 0);
    return `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
  }
  
  // Método para formatar o número com zeros à esquerda
  private leadingZero(value: number | undefined, size = 3): string {
    if (value === undefined) {
      return '000'; // Valor padrão se undefined
    }
    return String(value).padStart(size, '0'); // Formata o número
  }

}
