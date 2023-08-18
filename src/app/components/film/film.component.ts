import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  @Input() kinopoiskId!: number
  public data: any
  public notFoundCoverUrl = 'https://a.l3n.co/i/Arb2Qq.png'

  constructor(
    //private route: ActivatedRoute,
    private filmsService: FilmsService
    ) {}
  
  ngOnInit(): void {
    //this.id = +this.route.snapshot.params['id']  
    this.filmsService.getFilmById(this.kinopoiskId).subscribe( res => {
      this.data = res
    })
  }
}
