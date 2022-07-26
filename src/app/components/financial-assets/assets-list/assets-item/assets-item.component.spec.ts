import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsItemComponent } from './assets-item.component';

describe('AssetsItemComponent', () => {
  let component: AssetsItemComponent;
  let fixture: ComponentFixture<AssetsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
