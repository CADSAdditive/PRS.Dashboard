import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DashboardComponent} from './dashboard.component';
import {MachinesComponent} from './machines/machines.component';
import {BuildCylinderMagazineComponent} from './build-cylinder-magazine/build-cylinder-magazine.component';
import {PowderDistributionStationComponent} from './powder-distribution-station/powder-distribution-station.component';
import {PowderRemovalStationComponent} from './powder-removal-station/powder-removal-station.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, MachinesComponent, BuildCylinderMagazineComponent, PowderDistributionStationComponent, PowderRemovalStationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create dashboard', () => {
    expect(component).toBeTruthy();
  });
});
