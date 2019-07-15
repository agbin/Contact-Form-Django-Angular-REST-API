import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  contacts = [{name: 'test'}];
  selectedContact;
  // name;
  // email;
  // subject;
  // message;

  constructor(private api: ApiService) {
    this.getContacts();
    this.selectedContact = {id: -1, name: '', email: '', subject: '', message: '' };
  }
  getContacts = () => {
    this.api.getAllContacts().subscribe(
      data => {
        this.contacts = data;
      },
      error => {
        console.log(error)
      }
    );
  }
  contactClicked = (contact) => {
    this.api.getOneContact(contact.id).subscribe(
      data => {
        this.selectedContact = data;
        console.log(data)
      },
      error => {
        console.log(error);
      }
    );
  }
  updateContact = () => {
    this.api.updateContact(this.selectedContact).subscribe(
      data => {
        this.getContacts();
        // this.selectedContact = data;
        console.log(data)
      },
      error => {
        console.log(error);
      }
    );
  }
  createContact = () => {
    this.api.createContact(this.selectedContact).subscribe(
      data => {
        this.contacts.push(data);
        console.log(data)
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteContact = () => {
    this.api.deleteContact(this.selectedContact.id).subscribe(
      data => {
        this.getContacts();
      },
      error => {
        console.log(error);
      }
    );
  }
}
