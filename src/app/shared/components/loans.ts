import {Component} from 'angular2/core';
import {RouterOutlet, RouteConfig, RouteDefinition} from 'angular2/router';

@Component({
    selector: 'loans',
    directives: [RouterOutlet],
    template: `
		<router-outlet></router-outlet>
	`  
})
export class LoansComponent {
	
}