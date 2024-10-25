import { CommonModule } from '@angular/common';
import { Component, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from 'stream';
import { UserDetails } from './forms.component.model';


@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  
  // @Input() userdetails?:{
  //   firstname:string,
  //   lastname: string,
  //   email: string,
  //   course: string,
  //   phonenumber:number,
  //   gender:string
  // };
  
 // Declare and initialize userdetails with the UserDetails interface
  userdetails: UserDetails={
      firstname:"",
      lastname:"",
      email: "",
      course: "",
      phonenumber:0,
      gender:""
    };
    updatedData:UserDetails[]=[]; // Declare updatedData as an array of UserDetails
    
  onSubmit(){
    console.log(this.userdetails)
    this.updatedData.push(this.userdetails) 
    console.log(this.updatedData)
  }
}
