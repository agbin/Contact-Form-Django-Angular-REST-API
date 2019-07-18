import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://contacts-card.herokuapp.com/api";
  // baseurl = "http://127.0.0.1:8000/api";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }


  getAllContacts(): Observable<any> {
    return this.http.get(this.baseurl + '/contacts/', 
    {headers: this.httpHeaders})
  }
  getOneContact(id): Observable<any> {
    return this.http.get(this.baseurl + '/contacts/' + id + '/', 
    {headers: this.httpHeaders});
  }
  updateContact(contact): Observable<any> {
    const body = {name: contact.name, email: contact.email, subject: contact.subject, message: contact.message };
    return this.http.put(this.baseurl + '/contacts/' + contact.id + '/', body,
    {headers: this.httpHeaders});
  }
  createContact(contact): Observable<any> {
    const body = {name: contact.name, email: contact.email, subject: contact.subject, message: contact.message };
    return this.http.post(this.baseurl + '/contacts/', body,
    {headers: this.httpHeaders});
  }
  deleteContact(id): Observable<any> {
    return this.http.delete(this.baseurl + '/contacts/' + id + '/',
    {headers: this.httpHeaders});
  }
}
