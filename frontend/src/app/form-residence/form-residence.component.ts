import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../service/residence.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css']
})
export class FormResidenceComponent implements OnInit{
 

  formR!:FormGroup

  constructor(private resservice:ResidenceService,private router:Router){

  }

  ngOnInit(): void {

this.formR=new FormGroup({

  id:new FormControl('',[Validators.required,Validators.minLength(2)]),
  name:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z]/)]),
  address:new FormControl('',[Validators.required,Validators.maxLength(10)]),
  image:new FormControl('',Validators.required),
  status:new FormControl('',[Validators.required,Validators.pattern(/^disponible+$/)])
})
  }

  get id(){
    return this.formR.get('id')
  }

  get name(){
    return this.formR.get('name')
  }

  get address(){
    return this.formR.get('address')
  }

  get status(){
    return this.formR.get('status')
  }

  add(){
   // console.log('my form : '+JSON.stringify(this.formR.value))

   this.resservice.addResidence
   (this.formR.value).subscribe(()=>{
console.log("added!!!!!")
this.router.navigate(['/residence'])
   })
  }

}
