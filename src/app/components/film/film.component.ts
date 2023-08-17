import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  private id!: number
  public data: any

  constructor(
    private route: ActivatedRoute,
    private filmsService: FilmsService
    ) {}
  
  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']  
    this.filmsService.getFilmById(this.id).subscribe( res => {
      this.data = res
    })
  }
}
