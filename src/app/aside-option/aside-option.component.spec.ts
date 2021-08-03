import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideOptionComponent } from './aside-option.component';

describe('AsideOptionComponent', () => {
  let component: AsideOptionComponent;
  let fixture: ComponentFixture<AsideOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
