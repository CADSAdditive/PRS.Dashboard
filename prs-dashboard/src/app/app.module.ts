import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './layout/header/header.component';
import { PowderRemovalStationComponent } from './dashboard/powder-removal-station/powder-removal-station.component';
import { BuildCylinderMagazineComponent } from './dashboard/build-cylinder-magazine/build-cylinder-magazine.component';
import { PowderDistributionStationComponent } from './dashboard/powder-distribution-station/powder-distribution-station.component';
import { MachinesComponent } from './dashboard/machines/machines.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    PowderRemovalStationComponent,
    BuildCylinderMagazineComponent,
    PowderDistributionStationComponent,
    MachinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
