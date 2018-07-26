import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowderDistributionStationComponent } from './powder-distribution-station.component';

describe('PowderDistributionStationComponent', () => {
  let component: PowderDistributionStationComponent;
  let fixture: ComponentFixture<PowderDistributionStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowderDistributionStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowderDistributionStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
