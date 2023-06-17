import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  submitForm(event: Event) {
    event.preventDefault();
    alert('Message Sent!');
    console.log(this.name);
    console.log(this.email);
    console.log(this.message);
    this.contactForm.resetForm();
  }
}
