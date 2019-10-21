import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicGraphComponent } from './public-graph.component';

describe('PublicGraphComponent', () => {
  let component: PublicGraphComponent;
  let fixture: ComponentFixture<PublicGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
