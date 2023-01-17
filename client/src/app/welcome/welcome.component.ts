import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent implements OnInit {
  form!: FormGroup;
  
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(8) ])
    })
  }

  get name() { return this.form.get('name')!; }

  enterGame() {
    if (!this.form.valid) { 
      this.name.markAsDirty();
      return;
    }

    sessionStorage.setItem('playerName', this.name.value);
    this.route.navigate(['game'])
  }
}
