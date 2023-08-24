import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FilmsService } from '../services/films.service';
import { IFilm, ISimilar } from '../model/films.model';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss', '../../app.component.scss']
})
export class FilmComponent {
  @Input() set kinopoiskId(kinopoiskId: number){
    this.filmsService.getFilmById(kinopoiskId).subscribe( res => {
      this.data = res
      this.changedetector.detectChanges()
    })
    this.filmsService.getSimilarsById(kinopoiskId).subscribe( res => {
      this.similarItems = res.items
      this.similarItems = this.similarItems.slice(0,4)
      this.similarItems.map( (i:ISimilar) => {
        this.filmsService.getFilmById(i.filmId).subscribe( (f:IFilm) => {
          this.similarFilteredItems.push({...i, ...f})
          debugger
        })
      })
      
    })
  }
  public data: any
  public similarItems!: ISimilar[]
  public similarFilteredItems: ISimilar[] = []
  public notFoundCoverUrl = 'https://a.l3n.co/i/Arb2Qq.png'

  constructor(
    //private route: ActivatedRoute,
    private filmsService: FilmsService,
    private changedetector: ChangeDetectorRef,
    ) {}
}
