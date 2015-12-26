import {bootstrap, Component, NgFor, FORM_DIRECTIVES} from 'angular2/angular2';
import {Hero} from './shared/models/hero';

@Component({
    selector: 'my-app',
    directives: [NgFor, FORM_DIRECTIVES],
    templateUrl: './webapp/template/hero_details.html'
    
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