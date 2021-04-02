import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {_fakeDataService} from 'src/services/_fake-data.service';
import {FormComponent} from '../form/form.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @ViewChild(FormComponent, {static: false}) formComponent?: FormComponent;
  isValid =true;
  constructor(private router: Router,
              private fakeData: _fakeDataService,
  ) {
  }


  ngOnInit(): void {


  }


  onSubmit(): void {
    const dataForm = this.formComponent?.getDataForm();
    console.log(this.formComponent?.form.status)

    if (dataForm) {
      this.fakeData.addData(dataForm).subscribe(rs => {
        if (!rs.error) {

          this.router.navigate(['/agents']);
        } else {
          alert("Something wrong happen")
        }
      });
    }

    // this.fakeData.addData(this.formComponent?.form.value);


    // switch (this.formComponent?.form.controls['type'].value.toLowerCase()) {
    //   case 'agents':
    //     this.router.navigate(['/agents']);
    //     break;
    //   case  'guns':
    //     this.router.navigate(['/guns']);
    //     break;
    //   case 'maps':
    //     this.router.navigate(['/maps']);
    //     break;
    // }
    // alert('Save new ' + this.formComponent?.form.controls['type'].value + ' blog success');

  }

}
