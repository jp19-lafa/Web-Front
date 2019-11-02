import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightIntensistyComponent } from './light-intensisty.component';

describe('LightIntensistyComponent', () => {
  let component: LightIntensistyComponent;
  let fixture: ComponentFixture<LightIntensistyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightIntensistyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightIntensistyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
