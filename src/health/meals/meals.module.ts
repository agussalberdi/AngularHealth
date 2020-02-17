import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

//containers
import { MealsComponent } from './containers/meals/meals.component';
import { MealComponent } from './containers/meal/meal.component';
//components
import { MealFormComponent } from './components/meal-form/meal-form.component';

export const ROUTES: Routes = [
    { path: '', component: MealsComponent },
    { path: 'new', component: MealComponent},
    { path: ':id', component: MealComponent}
];

@NgModule({
    declarations: [
        MealsComponent,
        MealComponent,
        MealFormComponent
    ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        SharedModule
    ],
    exports: [],
    providers: [],
})
export class MealsModule {}