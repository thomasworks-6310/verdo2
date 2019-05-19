import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassprintComponent } from './passprint.component';

describe('PassprintComponent', () => {
  let component: PassprintComponent;
  let fixture: ComponentFixture<PassprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
