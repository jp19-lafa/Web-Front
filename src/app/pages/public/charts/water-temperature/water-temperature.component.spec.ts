import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterTemperatureComponent } from './water-temperature.component';

describe('WaterTemperatureComponent', () => {
  let component: WaterTemperatureComponent;
  let fixture: ComponentFixture<WaterTemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterTemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
