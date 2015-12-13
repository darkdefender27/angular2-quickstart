import {bootstrap, Component, NgFor} from 'angular2/angular2';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{ title }}</h1> 
    <h2>My favorite hero is: {{ myHero }}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ng-for="#hero of heroes">
        {{ hero }}
      </li>
    </ul>
    `,
    directives: [NgFor]
})
class AppComponent {
    title: string;
    myHero: string;
    heroes: string [];
    
    constructor() {
        this.title = 'Title of Heroes';
        this.heroes = ['Superman', 'Bombasto', 'Magneta', 'Tornado'];
        this.myHero = this.heroes[0];        
    }
 }

bootstrap(AppComponent);