import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsChildComponent } from './agents-child.component';

describe('AgentsChildComponent', () => {
  let component: AgentsChildComponent;
  let fixture: ComponentFixture<AgentsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentsChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
