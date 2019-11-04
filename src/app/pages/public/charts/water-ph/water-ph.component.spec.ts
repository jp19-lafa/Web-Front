import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterPhComponent } from './water-ph.component';

describe('WaterPhComponent', () => {
  let component: WaterPhComponent;
  let fixture: ComponentFixture<WaterPhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterPhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterPhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
