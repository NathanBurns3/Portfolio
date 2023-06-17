import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent implements OnInit {
  name!: string;
  email!: string;
  message!: string;

  constructor(private builder: FormBuilder) {}

  ngOnInit() {}

  submitForm(event: Event) {
    event.preventDefault();
    alert('Message Sent!');
    console.log(this.name);
    console.log(this.email);
    console.log(this.message);
  }
}
