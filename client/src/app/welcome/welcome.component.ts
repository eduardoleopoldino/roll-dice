import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  
  form = new FormGroup({
    name: new FormControl('')
  })

  constructor(private route: Router) {}

  enterGame() {
    console.log(this.form.value);
    

    this.route.navigate(['game'])
  }
}
