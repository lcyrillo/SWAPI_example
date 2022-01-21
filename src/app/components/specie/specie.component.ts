import { Component, OnInit } from '@angular/core';
import { SpecieService } from 'src/app/services/specie.service';
import { Specie } from 'src/models/specie';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.scss']
})
export class SpecieComponent implements OnInit {
  public species!: Specie;

  constructor(private specieService: SpecieService) { }

  ngOnInit(): void {
    this.specieService.getAllSpecie()
    .subscribe((data: Specie) => {
      this.species = data;
      console.log(this.species);
    });
  }

}
