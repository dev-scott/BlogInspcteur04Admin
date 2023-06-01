import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {ToastrService} from 'ngx-toastr'

import { map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor( private afs: AngularFirestore , private toastr:ToastrService ) {



   }


   saveDate(data:any){

      
    this.afs.collection('categories').add(data).then(docRef =>{

      console.log(docRef)

      this.toastr.success('Category Added Successfully')


    }  )
    .catch(err => {

      this.toastr.error("Error adding category")


    })



   }

   loadData(){

   return this.afs.collection('categories').snapshotChanges().pipe(

      map(action =>{

       return  action.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return {
            id,data
          }

        })

      })
      
    )

   }


   updateData(id:any,EditData:any){

      this.afs.collection('categories').doc(id).update(EditData).then(docRef=>{

        this.toastr.success('Category Updated Successfully')




      })

   }


   deleteData(id:string){

    this.afs.collection('categories').doc(id).delete().then(docRef =>{

      this.toastr.success('Category Deleted Successfully')

    })


   }


}
