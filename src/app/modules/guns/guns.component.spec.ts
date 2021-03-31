import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunsComponent } from './guns.component';

describe('GunsComponent', () => {
  let component: GunsComponent;
  let fixture: ComponentFixture<GunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GunsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
