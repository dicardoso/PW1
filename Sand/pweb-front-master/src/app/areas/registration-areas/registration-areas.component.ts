import {Component, OnInit} from '@angular/core';
import {Area} from '../../shared/model/area';
import {AreaService} from '../../shared/services/area.service';
import {MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration-areas',
  templateUrl: './registration-areas.component.html',
  styleUrls: ['./registration-areas.component.scss']
})
export class RegistrationAreasComponent implements OnInit {

  area: Area;
  inputName: string;
  inputImage: string;
  inputDescription: string;
  private snackBar: MatSnackBar;


  constructor(
    private areaService: AreaService,
    public dialogRef: MatDialogRef<RegistrationAreasComponent>,
  ) {
    this.area = new Area();
  }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  createArea(): void {
    this.area.id = null;
    this.area.name = this.inputName;
    this.area.image = this.inputImage;
    this.area.description = this.inputDescription;
    this.areaService.create(this.area).subscribe(
      area => console.log(area)
    );
    this.area = new Area();
    this.cancel();
    window.location.reload();
  }
}
