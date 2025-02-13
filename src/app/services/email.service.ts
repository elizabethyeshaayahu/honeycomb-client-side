import { Injectable } from '@angular/core';
import axios from 'axios';
import { config } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  async sendEmailToVerifiedUsers(subject: string, body: string){
    const res = await axios.post(config.serverUrl,
      {subject,body}
    );
  }
}
