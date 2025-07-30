import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  sendEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm('service_xh7a04l', 'template_ervpadw', e.target as HTMLFormElement, 'ASIqnZ7f4WML9DZ7B')
      .then((result: EmailJSResponseStatus) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Failed to send message, please try again.');
      });
  }

}
