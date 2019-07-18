# Contact-Form-Django-Angular-REST-API
Contact-Form-Django-Angular-REST-API is a contact form with Angular used for user interface and Django REST
Framework used as backend.The form has following fields: name of the sender, sender's email, subject, message. All filled by senders fields are seen on a List of Contacts. There are three methods for user: create, update or delete name, email, subject and message.

Application created for recruitment purposes. It was written using Python 3.7 and is compatible with 3.5.

## Demo Application
https://contacts-card.herokuapp.com/ <br/> 
present contact form / user interface

https://contacts-card.herokuapp.com/api/contacts/ <br/> 
consist a list of all contacts already present in application database (rest framework).

## What this repo contains
The following files are interesting:

  *  angular_django_cors - The Django project and main settings file
  *  contact_form - An app within the project, containing the Django Rest Framework views and URL routing
  *  static - The Angular app source code lives here
  *  static/dist - The compiled Angular app is here
    
## Requirements

  *   Python (3.5, 3.6, 3.7)
  *   Django (2.0, 2.1, 2.2)
  *   Angular 6

## Installation

  * pip install Python3
  * git clone https://github.com/agbin/Contact-Form-Django-Angular-REST-API
  * virtualenv -p python3 env
  * source env/bin/activate
  * pip install djangorestframework
  * cd Contact-Form-Django-Angular-REST-API <br/>
    pip install -r requirements.txt
  * pip3 install psycopg2
  
## Run it local

  * cd contact_form
  * **python manage.py runserver**
  * Your app will be available at http://127.0.0.1:8000 or http://127.0.0.1:8000/api/contacts/
  
## Database

This project uses a PostgreSQL database.

