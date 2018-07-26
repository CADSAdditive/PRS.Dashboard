import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildCylinderMagazineComponent } from './build-cylinder-magazine.component';

describe('BuildCylinderMagazineComponent', () => {
  let component: BuildCylinderMagazineComponent;
  let fixture: ComponentFixture<BuildCylinderMagazineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildCylinderMagazineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildCylinderMagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
