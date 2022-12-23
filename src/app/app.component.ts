import { Component } from '@angular/core';
import { LocalService } from './services/local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cine';
  cines?: any = [
    {
      name: 'JCA Cinemes Lleida-Alpicat',
      films: [
        {
          title: 'Minions: el orígen de Gru',
          total_capacity: 150,
          current_capacity: 0,
          description:
            "Són els anys setanta i en Gru creix en un barri residencial, en ple boom dels pentinats cardats i els pantalons de campana. Com a fan incondicional d'un famós supergrup de malvats, Els Salvatges Sis, en Gru idea un pla per a demostrar-los que és prou malvat per a treballar amb ells. Per sort, compta amb l'ajuda dels seus fidels seguidors, els Minions, sempre disposats a sembrar el caos. Junts, Kevin, Stuart, Bob, i Otto —un nou Minion amb aparell dental i desesperat per sentir-se acceptat— desplegaran el seu potencial per a construir al costat de Gru el seu primer cau, experimentar amb les seves primeres armes i dur a terme les seves primeres missions.  Prepara't per a descobrir la història mai explicada d'un nen de 12 anys que somiava en convertir-se en el més malvat del món.",
        },
        {
          title: 'Tadeo Jones 3: la tabla esmeralda',
          total_capacity: 150,
          current_capacity: 0,
          description:
            "A en Tadeo li encantaria que els seus col·legues arqueòlegs l'acceptessin com a un més, però sempre acaba embolicant la troca: destrossa un sarcòfag i deslliga un conjur que posa en perill la vida dels seus amics, Mòmia, Jeff i Belzoni. Amb tots en contra i només ajudat per la Sara, Tadeo emprendrà una fugida plena d'aventures, que el portarà de Mèxic a Chicago i de París a Egipte, per a trobar la manera d'acabar amb la maledicció de la mòmia.",
        },
      ],
    },
    {
      name: 'IMax Barcelona Diagonal Mar',
      films: [
        {
          title: 'Avatar 2 El sentido del agua',
          total_capacity: 5,
          current_capacity: 0,
          description:
            'AVATAR nos lleva a un mundo situado más allá de la imaginación, en donde un recién llegado de la Tierra se embarca en una aventura épica, llegando a luchar, al final, por salvar el extraño mundo al que ha aprendido a llamar su hogar. James Cameron, el oscarizado director de "Titanic" imaginó por primera vez la película hace quince años, cuando los medios para llevar a cabo y plasmar su visión todavía eran inexistentes. Ahora, después de cuatro años de producción, AVATAR, una película de acción en vivo con una nueva generación de efectos especiales, ofrece una experiencia cinematográfica totalmente cautivadora de nuevo cuño, en la que la tecnología revolucionaria inventada para la película desaparece en la emoción de los personajes y en el desarrollo de la trama.',
        },
        {
          title: "El gat amb botes: l'últim desig",
          total_capacity: 150,
          current_capacity: 0,
          description:
            'En un mundo lleno de arriesgadas aventuras el Gato con Botas ha agotado ya ocho de sus vidas, con lo que sólo le queda una por vivir. Y eso le da un miedo atroz. De modo que huyendo del Lobo Feroz decide abandonarse y esconderse de cualquier peligro en la casa de la madre Luna, un inmenso hogar para gatos. Sin embargo, por cosas del destino se enterará de la existencia de un mapa que conduce a la legendaria Estrella de los Deseos. Si consigue llegar hasta ella, podrá recuperar su número de vidas y volver a ser la leyenda que era. Le acompañará un escuchimizado perro que ha conocido en la casa de Luna y una vieja conocida, Kitty zarpas suaves.',
        },
      ],
    },
  ];
  films?: any = this.localStore.getData('cines');

  constructor(private localStore: LocalService) {}

  showFilms(cine: any): void {
    document.getElementById('movies')?.classList.add('d-block');
    document.getElementById('movies')?.classList.remove('d-none');
    document.querySelector('.cinemes')?.classList.add('border-end');

    this.films = cine.films;
  }

  getCines(): void {
    this.cines = this.localStore.getData('cines');
  }

  ngOnInit(): void {
    if (this.films === null) {
      this.localStore.saveData('cines', JSON.stringify(this.cines));
    }
    this.getCines();
  }
}
