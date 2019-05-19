import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassReprintComponent } from './pass-reprint.component';

describe('PassReprintComponent', () => {
  let component: PassReprintComponent;
  let fixture: ComponentFixture<PassReprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassReprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassReprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
