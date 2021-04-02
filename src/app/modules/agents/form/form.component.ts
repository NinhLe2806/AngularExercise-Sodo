import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {dataClass} from 'src/services/data';
import {_fakeDataService} from 'src/services/_fake-data.service';
import {ValidationService} from '../../../../services/validation.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  types = [
    'Agents',
    'Maps',
    'Guns',
    'Others'
  ];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getFormDefault();
  }


  public getFormDefault(): void {
    this.form = this.fb.group({
      id: new FormControl(),
      type: new FormControl(this.types[0], [Validators.required]),
      title: new FormControl('',  [Validators.required, ValidationService.textValidate]),
      content: new FormControl('', [Validators.required]),
      kind: new FormControl('',[Validators.required]),
    });
  }


  setFormData(data: dataClass): void {

    this.form.get('id')?.setValue(data.id);
    this.form.get('type')?.setValue(data.type);
    this.form.get('title')?.setValue(data.title);
    this.form.get('content')?.setValue(data.content);
    this.form.get('kind')?.setValue(data.kind);
  }

  getDataForm(): any {
    // check validate form
    if(this.form.status == 'INVALID'){
      return
    }else {
      return this.form?.value;
    }
  }


}
