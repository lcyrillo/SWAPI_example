import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { People } from 'src/models/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  public people!: People;

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getAllPeople()
    .subscribe((data: People) => {
      this.people = data;
      console.log(this.people);
    });
  }

}
