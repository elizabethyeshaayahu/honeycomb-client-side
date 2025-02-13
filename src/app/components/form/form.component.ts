import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent {
  emailForm: FormGroup;
  
  constructor(private EmailService: EmailService) { 
    this.emailForm = new FormGroup({
      subject: new FormControl(''),
      body: new FormControl('')
    });
  }

  submit(): void {
    this.EmailService.sendEmailToVerifiedUsers(this.emailForm.get('subject')?.value.toString(),this.emailForm.get('body')?.value.toString());
  }

}
