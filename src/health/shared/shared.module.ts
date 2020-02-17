import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//third party modules
import { AngularFireDatabaseModule } from 'angularfire2/database';

//components
import { ListItemComponent } from './components/list-item/list-item.component';

//services
import { MealsService } from './services/meals/meals.service';
import { WorkoutsService } from './services/workouts/workouts.service';
import { ScheduleService } from './services/schedule/schedule.service';

//pipes
import { JoinPipe } from './pipes/join.pipe';
import { WorkoutPipe } from './pipes/workout.pipe';

@NgModule({
    declarations: [
        ListItemComponent,
        JoinPipe,
        WorkoutPipe
    ],
    imports: [ 
        CommonModule,
        RouterModule,
        AngularFireDatabaseModule
    ],
    exports: [
        ListItemComponent, //to use it outside of the shared module
        JoinPipe,
        WorkoutPipe
    ],
    providers: [
        MealsService,
        WorkoutsService,
        ScheduleService
    ],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        }
    }
}