import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-r-f-root',
  templateUrl: './r-f-root.component.html',
  styleUrls: ['./r-f-root.component.css']
})
export class RFRootComponent {
  //1 example
  name = new FormControl('');

  updateName() {
    this.name.setValue('Nancy')
  }

  //2 example

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
