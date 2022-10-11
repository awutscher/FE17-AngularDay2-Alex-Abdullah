import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userMessage: Array <{name:string, email:string, message:string}> = [
    {
      name: "",
      email:"",
      message:""
    }
  ]

  infoForm = this.fb.group({
    name: new FormControl(``, [Validators.required]),
    email: new FormControl(``, [Validators.required, Validators.email]),
    message: new FormControl(``, [Validators.required]),
    fullMessage: this.fb.array([])
  })
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {

  }

  get Messages(){
    return this.infoForm.controls["fullMessage"] as FormArray;
  }
  onSubmit(){
    this.Messages.push(this.infoForm);
    console.log(this.Messages)
  }

}
