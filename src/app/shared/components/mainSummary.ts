import {Component, View, provide} from 'angular2/core';

@Component({
    selector: 'main-summary'
})
@View({
    templateUrl: 'webapp/template/main_summary.html'
})
export class MainSummary {
    constructor() {
        console.log('Main Summary loaded...');
    }
}