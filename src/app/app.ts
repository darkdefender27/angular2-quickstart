import {bootstrap, Component, NgFor, NgModel} from 'angular2/angular2';
import {Hero} from './hero';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{ title }}</h1> 
    <h2>Hero Details: </h2>
    <div>
        <h4>Hero Name: {{ myHero.name }}</h4>
        <h4>Hero ID Num: {{ myHero.id }}</h4>
    </div>
    <p>Other Heroes:</p>
    <ul>
      <li *ng-for="#hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
    <div>
        <label>Name: </label>
        <div>
            <input  placeholder="name">
        </div>
    </div>
    
    `,
    directives: [NgFor, NgModel]
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