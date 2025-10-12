import { Component, ViewChild, AfterViewInit } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent implements AfterViewInit {
  @ViewChild('myForm') contactForm!: NgForm;
  name!: string;
  email!: string;
  message!: string;
  formId: string = 'xbjenaqb';
  emailForm = this.fb.group({
    name: [''],
    email: [''],
    message: [''],
  });

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {}

  ngAfterViewInit() {
    this.setupScrollAnimations();
  }

  private setupScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'contact') {
              entry.target.classList.add('section-visible');
              this.animateContactForm();
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }
  }

  private animateContactForm() {
    const contactContainer = document.querySelector('.contactContainer');
    const formGroups = document.querySelectorAll('.form-group');

    setTimeout(() => {
      if (contactContainer) {
        contactContainer.classList.add('animate');
      }
    }, 400);

    formGroups.forEach((group, index) => {
      setTimeout(() => {
        group.classList.add('animate');
      }, 600 + index * 150);
    });
  }

  //Send an email using formspree.io account
  sendEmail(name: String, email: String, message: String) {
    //Set the url
    let url = 'https://formspree.io/f/' + this.formId;

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
        alert('Message Sent!');
      },
      error: (error) => {
        errorMessage = error.message;
        console.log('error!', errorMessage);
        alert('Message Failed to Send!');
      },
    });
  }

  submitForm(event: Event) {
    event.preventDefault();
    console.log(this.name);
    console.log(this.email);
    console.log(this.message);
    this.sendEmail(this.name, this.email, this.message);
    this.contactForm.resetForm();
  }
}
