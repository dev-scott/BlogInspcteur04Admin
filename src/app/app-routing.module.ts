

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CategoriesComponent } from "./categories/categories.component";
import { AllPostComponent } from "./posts/all-post/all-post.component";
import { NewPostComponent } from "./posts/new-post/new-post.component";

// import { AppComponent } from "./app.component";


const routes:Routes=[

    {
        path: '',
        component: DashboardComponent,

    },
    {path:'categories' , component:CategoriesComponent  },

    {path:'posts' , component:AllPostComponent},
    {path:'posts/new' , component:NewPostComponent}


];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}