import { Component, ViewChild } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent {
  @ViewChild('myForm') contactForm!: NgForm;
  name!: string;
  email!: string;
  message!: string;
  secretKey: string = 'xbjenaqb';
  emailForm = this.fb.group({
    name: [''],
    email: [''],
    message: [''],
  });

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {}

  //Send an email using formspree.io account
  sendEmail(name: String, email: String, message: String) {
    //Set the url with your secretKey from formspree.io
    let url = 'https://formspree.io/f/' + this.secretKey;

    //Set Headers
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    let data = `name=${name}&email=${email}&message=${message}`;
    let errorMessage: string = '';

    this.httpClient.post<any>(url, data, httpOptions).subscribe({
      next: (data) => {
        console.log('email sent' + JSON.stringify(data));
      },
      error: (error) => {
        errorMessage = error.message;
        console.log('error!', errorMessage);
      },
    });

    //DEBUG
    console.log('url is ', url);
    console.log('data', name, email, message);
  }

  submitForm(event: Event) {
    event.preventDefault();
    alert('Message Sent!');
    console.log(this.name);
    console.log(this.email);
    console.log(this.message);
    this.sendEmail(this.name, this.email, this.message);
    this.contactForm.resetForm();
  }
}
