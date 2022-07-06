import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSneakersComponent } from './add-sneakers.component';

describe('AddSneakersComponent', () => {
  let component: AddSneakersComponent;
  let fixture: ComponentFixture<AddSneakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSneakersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSneakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
