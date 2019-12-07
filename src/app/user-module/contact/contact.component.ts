import { Component, OnInit } from '@angular/core';
import * as emailjs from 'emailjs-com';

import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {map} from 'rxjs/operators';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public showBar=false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(event) {
    console.log(event.target.from_name.value);
    event.preventDefault();
    
    let body={
      service_id: 'gmail',
      template_id: 'template_Xq2desCC',
      user_id: 'user_v8yOUxvBT6c1n9EUAO2JT',
      template_params: {
          'from_name': event.target.from_name.value,
          'to_name':event.target.to_name.value,
          'message_html':event.target.message_html.value
      }
    }
     this.http.post('https://api.emailjs.com/api/v1.0/email/send', JSON.stringify(body),{"headers":{"Content-Type":"application/json"}})
      .pipe(map(res=>res)).subscribe(res=>{
        console.log(res);
      },
      error=>{
        console.log(error.status);
        if (error.status==200) {
          this.showBar=true;
          setTimeout(() => {
          this.showBar=false;            
          }, 3000);
        }
      })
  }

  // sendMail(event){
  //   event.stopPropagation();
  //   var templateParams = {
  //     name: 'James',
  //     notes: 'Check this out!'
  // };

  //   emailjs.send('gmail','template_Xq2desCC','#myform', 'user_v8yOUxvBT6c1n9EUAO2JT')
  //   .then((response) => {
  //      console.log('SUCCESS!', response.status, response.text);
  //   }, (err) => {
  //      console.log('FAILED...', err);
  //   });
  // }

}
