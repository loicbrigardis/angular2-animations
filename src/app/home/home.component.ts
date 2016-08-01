import { Component, OnInit,
  trigger,
  state,
  style,
  keyframes,
  transition,
  animate } from '@angular/core';

import { FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import {JsonService} from './home.service';

@Component({
  moduleId: module.id,
  providers: [JsonService],
  selector: 'app-home',
  directives: [REACTIVE_FORM_DIRECTIVES],
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  animations: [
    trigger('myTrigger', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate(600, keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  private state: string = "in";
  private contents: Array<any>;
  private form: FormGroup;

  constructor(private _jsonService: JsonService, private fb: FormBuilder) { }

  ngOnInit() {
    this.contents = this._jsonService.getJson();
    this.form = this.fb.group({
      "fname": ['', Validators.required],
      "lname": ['', Validators.required],
      "uname": ['', Validators.required]
    });
  }

  onSubmit() {
    this._jsonService.addUser(this.form.value);

    // Reset inputs
    for (let name in this.form.controls) {
      (<any>this.form.controls[name]).updateValue();
      this.form.controls[name].updateValueAndValidity();
    }
  }

  deleteUser(user) {
    this._jsonService.removeUser(user)
  }

}
