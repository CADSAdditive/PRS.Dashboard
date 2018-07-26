import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowderRemovalStationComponent } from './powder-removal-station.component';

describe('PowderRemovalStationComponent', () => {
  let component: PowderRemovalStationComponent;
  let fixture: ComponentFixture<PowderRemovalStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowderRemovalStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowderRemovalStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
