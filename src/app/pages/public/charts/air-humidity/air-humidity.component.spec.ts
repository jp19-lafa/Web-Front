import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirHumidityComponent } from './air-humidity.component';

describe('AirHumidityComponent', () => {
  let component: AirHumidityComponent;
  let fixture: ComponentFixture<AirHumidityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirHumidityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirHumidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
