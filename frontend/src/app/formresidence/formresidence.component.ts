import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../service/residence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formresidence',
  templateUrl: './formresidence.component.html',
  styleUrls: ['./formresidence.component.css']
})
export class FormresidenceComponent implements OnInit {

  residenceform!:FormGroup
  constructor(private resService:ResidenceService,private router:Router){

  }
  ngOnInit(): void {
    this.residenceform=new FormGroup({
     // id:new FormControl('',[Validators.required,Validators.pattern(/^[1-9]/)]),
      name:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z]/)]),
      address:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      image:new FormControl('../../assets/images/residence1.jpg',Validators.required),
      status:new FormControl('',[Validators.required,Validators.pattern(/^false$/)]),
    })
  }
 // get id(){return this.residenceform.get('id')}
  get name(){return this.residenceform.get('name')}
  get address(){return this.residenceform.get('address')}
  get status(){return this.residenceform.get('status')}

  add(){
this.resService.addResidence(this.residenceform.value).subscribe(()=>{
  console.log("added!!!!")
  this.router.navigate(['/residences'])
})
    console.log("Form residence : "+JSON.stringify(this.residenceform.value))
  }



}
