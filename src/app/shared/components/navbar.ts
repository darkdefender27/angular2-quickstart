import {Component, View, provide} from 'angular2/core';

@Component({
    selector: 'navbar'
})
@View({
    templateUrl: 'webapp/template/navbar.html'
})
export class Navbar {
    
    constructor() {
        console.log('Navbar loaded...');    
    }
}