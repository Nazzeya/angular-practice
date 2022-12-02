import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-val-root',
  templateUrl: './form-val-root.component.html',
  styleUrls: ['./form-val-root.component.css']
})
export class FormValRootComponent {
  nameInput = '';

  validationForm = new FormGroup({
    name: new FormControl(this.nameInput, [
      Validators.required,
      Validators.minLength(4)
    ])
  });

  get name() {
    return this.validationForm.get('name');
  }
}
