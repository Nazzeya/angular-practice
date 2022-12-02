import { Component } from '@angular/core';
import { Pet } from '../pet.model';

@Component({
  selector: 'app-t-d-f-root',
  templateUrl: './t-d-f-root.component.html',
  styleUrls: ['./t-d-f-root.component.css']
})
export class TDFRootComponent {
  species = ['fish', 'cat', 'dog'];
  model = new Pet(1, 'Goldie', this.species[0]);
  submited = false;

  onSubmit() {
    this.submited = true;
  }
}
