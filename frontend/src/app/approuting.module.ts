import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './annonce/annonce.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';

const routes:Routes=[
{path:'',redirectTo:"home",pathMatch:'full'},
{path:"home",component:HomeComponent},
{path:"residence",component:ResidenceComponent},
{path:"formresidence",component:FormResidenceComponent},
{path:"detailsresidence/:id",component:DetailsComponent},
{path:"update/:id",component:UpdateComponent},
//{path:'**',component: NotfoundComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class ApproutingModule { }
