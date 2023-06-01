import { Component } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';

import { OnInit } from '@angular/core';

// import {FirestoreModule} from '@angular/fire/firestore'

// import { AngularFirestore } from '@angular/fire/firestore'; // Importez AngularFirestore depuis @angular/fire/firestore



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {


categoryArray:any[]=[]

formCategory:string=''


formStatus:string='Add'

categoryId:string=''

  constructor( private categoryService:CategoriesService ){

  }

  ngOnInit():void{
    this.categoryService.loadData().subscribe((val:any)=>{
      this.categoryArray = val;
      console.log(this.categoryArray);

    })
  }

  onSubmit(formData:any){

    let categoryData:Category = {
      category:formData.value.category
    }

    if(this.formStatus=='Add'){

      this.categoryService.saveDate(categoryData)
 

      formData.reset();
  


    }

    else if (this.formStatus=='Edit'){

      this.categoryService.updateData(this.categoryId , categoryData )

      formData.reset();

      this.formStatus = 'Add';



    }



    

  }


  onEdit(categoryData:any , id:string){

    console.log(categoryData);

    this.formCategory = categoryData

    this.formStatus = 'Edit'

    this.categoryId = id;

  }

  onDelete(id:any){



    this.categoryService.deleteData(id)



  }

}
