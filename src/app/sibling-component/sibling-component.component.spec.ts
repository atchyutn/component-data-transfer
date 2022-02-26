import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingComponentComponent } from './sibling-component.component';

describe('SiblingComponentComponent', () => {
  let component: SiblingComponentComponent;
  let fixture: ComponentFixture<SiblingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiblingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
