import {bootstrap, Component} from 'angular2/angular2';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1> 
    <h3>My favourite hero is: {{hero}}</h3>
    `
})
class AppComponent {
    public title = 'Title of Heroes';
    public hero = 'Batman';
 }

bootstrap(AppComponent);