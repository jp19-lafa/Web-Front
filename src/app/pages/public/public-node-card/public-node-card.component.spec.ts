import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicNodeCardComponent } from './public-node-card.component';

describe('PublicNodeCardComponent', () => {
  let component: PublicNodeCardComponent;
  let fixture: ComponentFixture<PublicNodeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicNodeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicNodeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
