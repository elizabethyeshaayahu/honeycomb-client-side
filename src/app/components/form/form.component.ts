import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  emailForm: FormGroup;
  
  constructor() { 
    this.emailForm = new FormGroup({
      subject: new FormControl(''),
      body: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

}
