import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSneakersComponent } from './delete-sneakers.component';

describe('DeleteSneakersComponent', () => {
  let component: DeleteSneakersComponent;
  let fixture: ComponentFixture<DeleteSneakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSneakersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSneakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
