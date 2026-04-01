import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email, form, FormField, minLength, required } from '@angular/forms/signals';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule, FormField],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
  email = new FormControl(''); // is used to bind a property to input field of the form
  password = new FormControl('');

  showEmail = '';
  showPassword = '';

  login() {
    this.showEmail = this.email.value!;
    this.showPassword = this.password.value!;
  }

  resetFields() {
    this.email.reset();
    this.password.reset();
  }

  loginForm = new FormGroup({
    groupName: new FormControl('', [Validators.required]),
    groupEmail: new FormControl('', [Validators.required, Validators.email]),
    groupPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  get groupName() {
    return this.loginForm.get('groupName');
  }

  get groupEmail() {
    return this.loginForm.get('groupEmail');
  }
  get groupPassword() {
    return this.loginForm.get('groupPassword');
  }

  handleSubmit() {
    console.log(this.loginForm.value);
  }
  resetForm() {
    this.loginForm.reset();
  }

  loginModel = signal({
    signalEmail: '',
    signalPassword: '',
  });
  loginSignalForm = form(this.loginModel, (field) => {
    required(field.signalEmail, { message: 'Email is required' });
    minLength(field.signalEmail, 5, { message: 'Must be atleast 5 characters' });
    required(field.signalPassword, { message: 'Password is required' });
    email(field.signalEmail, { message: 'email must be in correct format' });
  });

  loginSignal() {
    console.log(this.loginSignalForm.signalEmail().value());
    console.log(this.loginSignalForm.signalPassword().value());
  }
}
