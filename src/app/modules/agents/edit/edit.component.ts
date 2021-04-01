import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {_fakeDataService} from 'src/services/_fake-data.service';
import {FormComponent} from '../form/form.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, AfterViewInit {
  msg: any;
  @ViewChild(FormComponent, {static: false}) formComponent!: FormComponent;

  constructor(private router: Router,
              private fakeData: _fakeDataService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.msg = params['id'];
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.fakeData.getDataTableFake({id: this.msg}).subscribe(rs => {
        this.formComponent.setFormData(rs.result);
      });
    }, 0);
  }

  onSubmit(): void {
    const dataForm = this.formComponent?.getDataForm();

    if (dataForm) {
      this.fakeData.updateData(dataForm).subscribe(rs => {
        if (!rs.error) {
          // == chuyển trang
          this.router.navigate(['/agents']);
        } else {
          //Lỗi
        }
      });
    }

    // this.fakeData.updateData(this.msg,this.formComponent?.form.value)
    // switch(this.formComponent?.form.controls['type'].value.toLowerCase( )){
    //   case 'agents': this.router.navigate(['/agents']);break;
    //   case  'guns': this.router.navigate(['/guns']);break;
    //   case 'maps': this.router.navigate(['/maps']);break;
    // }
    // alert("Save new "+this.formComponent?.form.controls['type'].value+" blog success")
  }


}
