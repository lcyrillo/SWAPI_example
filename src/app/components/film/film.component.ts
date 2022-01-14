import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { Film } from 'src/models/film';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  public films!: Film;

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getAllFilm()
      .subscribe((data: Film) => {
        this.films = data;
        console.log(this.films);
      });
  }

}
