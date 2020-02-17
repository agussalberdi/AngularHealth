import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-nav',
    changeDetection: ChangeDetectionStrategy.OnPush, //unless we have an input angular is not going to check for changes.
    styleUrls: ['app-nav.component.scss'],
    template: `
        <div class="app-nav">
            <div class="wrapper">
                <a routerLink="schedule" routerLinkActive="active">Schedule</a>
                <a routerLink="meals" routerLinkActive="active">Meals</a>
                <a routerLink="workouts" routerLinkActive="active">Workouts</a>
            </div>
        </div>
    `
})
export class AppNavComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
