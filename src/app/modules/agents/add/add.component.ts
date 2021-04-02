import {AfterViewInit, Component, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {_fakeDataService} from 'src/services/_fake-data.service';
import {FormComponent} from '../form/form.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  @ViewChild(FormComponent, {static: false}) formComponent?: FormComponent;
  isValid = false;


  constructor(private router: Router,
              private fakeData: _fakeDataService,
  ) {
  }


  ngOnInit(): void {

  }
  ngAfterViewInit(){
    this.formComponent?.form.valueChanges.subscribe(x => {
      if(this.formComponent?.getValid()==false) this.isValid=false;
      else this.isValid=true;
    })
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


  }

}
