import {bootstrap, Component, NgFor, FORM_DIRECTIVES} from 'angular2/angular2';
import {Hero} from './hero';

@Component({
    selector: 'my-app',
    directives: [NgFor, FORM_DIRECTIVES],
    template: `
    <h1>{{ title }}</h1> 
    <h2>Hero Details: </h2>
    <div>
        <h4>Hero Name: {{ myHero.name }}</h4>
    </div>
    <p>Other Heroes:</p>
    <ul>
      <li *ng-for="#hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
    <div>
        <label>Input Hero: </label>
        <div>
            <input type="text"  [(ng-model)]="myHero.name" placeholder="name"> 
        </div>
    </div>
    `
})
export class AppComponent {
    todoModel;
    
    public title: string;
    public myHero: Hero;
    public heroes: Hero [];
    
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