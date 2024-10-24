import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  userdetails={
    firstname:"",
    lastname:"",
    email: "",
    course:"",
    phonenumber:null,
    gender:""
  };

  onSubmit(){
    console.log(this.userdetails);
  }
}
