import {Component, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'
import {RouterOutlet, RouteConfig, RouteDefinition, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {Hero} from './shared/models/hero';
import {LoansComponent} from './shared/components/loans';
import {MainSummary} from './shared/components/mainSummary';
import {Navbar} from './shared/components/navbar';

@Component({
    selector: 'application',
    directives: [Navbar, RouterOutlet],
    templateUrl: 'webapp/template/application.html'
})
@RouteConfig([
	{ path: '/mainSummary', component: MainSummary, useAsDefault: true }
])
export class Application { 
    constructor() {
        console.log('Initiated...');
    }
}

bootstrap(Application, [provide(LocationStrategy, {useClass: HashLocationStrategy})]);;