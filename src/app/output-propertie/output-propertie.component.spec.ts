import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPropertieComponent } from './output-propertie.component';

describe('OutputPropertieComponent', () => {
  let component: OutputPropertieComponent;
  let fixture: ComponentFixture<OutputPropertieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputPropertieComponent]
    });
    fixture = TestBed.createComponent(OutputPropertieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
