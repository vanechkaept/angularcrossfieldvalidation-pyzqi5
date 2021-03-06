import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './custom.validator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      passsword: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      confirm_passsword: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    }, {validator: CustomValidator.passwordValidator('passsword', 'confirm_passsword')});
  }

  onSubmit() {
    this.submitted = true;
    console.log('Valid?', this.registerForm.valid); // true or false
    console.log('Value', this.registerForm.value);
  }

  get f() { return this.registerForm.controls; }
}
