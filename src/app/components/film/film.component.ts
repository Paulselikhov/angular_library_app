import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent {
  @Input() set kinopoiskId(kinopoiskId: number){
    this.filmsService.getFilmById(kinopoiskId).subscribe( res => {
      this.data = res
      this.changedetector.detectChanges()
    })
  }

  public data: any
  public notFoundCoverUrl = 'https://a.l3n.co/i/Arb2Qq.png'

  constructor(
    //private route: ActivatedRoute,
    private filmsService: FilmsService,
    private changedetector: ChangeDetectorRef,
    ) {}
}
