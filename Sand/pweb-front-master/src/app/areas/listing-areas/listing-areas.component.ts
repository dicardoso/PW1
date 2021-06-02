import {Component, OnInit} from '@angular/core';
import {Area} from '../../shared/model/area';
import {AreaService} from '../../shared/services/area.service';
import {RegistrationAreasComponent} from '../registration-areas/registration-areas.component';
import {MatDialog} from '@angular/material/dialog';
import {ReserveDialogComponent} from '../reserve-dialog/reserve-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing-areas',
  templateUrl: './listing-areas.component.html',
  styleUrls: ['./listing-areas.component.scss']
})
export class ListingAreasComponent implements OnInit {

  areas: Array<Area>;
  isAdmin: String

  constructor(private areaService: AreaService,
              public dialog: MatDialog,
              private rotalAtual: ActivatedRoute) {
    this.isAdmin = this.rotalAtual.snapshot.paramMap.get('user')
  }

  ngOnInit(): void {
    console.log(this.isAdmin)
    this.areaService.list().subscribe(
      areas => this.areas = areas
    );
  }

  removeArea(id: number): void {
    this.areaService.remover(id).subscribe();
    window.location.reload();
  }

  openReserveDialog(areaSelec: Area) {
    const dialogRef = this.dialog.open(ReserveDialogComponent, {
      width: '500px',
      data: {area: areaSelec}
    });
  }
}
