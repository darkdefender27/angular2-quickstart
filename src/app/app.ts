import {bootstrap, Component, NgFor} from 'angular2/angular2';
import {Hero} from './hero';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{ title }}</h1> 
    <h2>My favorite hero is: {{ myHero.name }}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ng-for="#hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
    `,
    directives: [NgFor]
})
export class AppComponent {
    title: string;
    myHero: Hero;
    heroes: Hero [];
    
    constructor() {
        this.title = 'Title of Heroes';
        this.heroes = [
            new Hero(1, 'Superman'),
            new Hero(2, 'Bombasto'),
            new Hero(3, 'Robinhood'),
            new Hero(4, 'Shaktimaan'),
            new Hero(5, 'Spiderman')
        ];
        this.myHero = this.heroes[3];        
    }
 }

bootstrap(AppComponent);