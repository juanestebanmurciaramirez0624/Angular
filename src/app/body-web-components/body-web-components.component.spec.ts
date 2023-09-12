import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyWebComponentsComponent } from './body-web-components.component';

describe('BodyWebComponentsComponent', () => {
  let component: BodyWebComponentsComponent;
  let fixture: ComponentFixture<BodyWebComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyWebComponentsComponent]
    });
    fixture = TestBed.createComponent(BodyWebComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
