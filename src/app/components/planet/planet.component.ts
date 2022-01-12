import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';
import { Planet } from 'src/models/planet';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  private planet!: Planet;

  constructor(private planetService: PlanetService ) { }

  ngOnInit(): void {
    this.planetService.getAllPlanets()
     .subscribe((data: Planet) => {
       this.planet = data;
       console.log(this.planet);
     });
  }
}