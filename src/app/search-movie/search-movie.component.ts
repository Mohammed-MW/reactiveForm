import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
})
export class SearchMovieComponent {

  submitted = false;
  Valide = false;
  currentYear = new Date().getFullYear();

  newMovie = new FormGroup({
    Info: new FormGroup({
      identifiant: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required)
    }, identifiantOuTitreRequis),
    type: new FormControl('Série'),
    realeaseDate: new FormControl('', [Validators.required, Validators.min(1900), Validators.max(this.currentYear),]),
    fiche: new FormControl('Courte')
  });






  // newMovie = new FormGroup({
  //   Info: new FormGroup({
  //     Identifiant: new FormControl(''),
  //     Title: new FormControl(''),
  //   }),
  //   Type: new FormControl('Série'),
  //   realeaseDate: new FormControl('', [
  //     Validators.required,
  //     Validators.min(1900),
  //     Validators.max(this.currentYear),
  //   ]),
  //   fiche: new FormControl('Courte'),
  // })


  createFilm() {
    this.submitted = true;
    if (this.newMovie.valid) {
      console.warn(this.newMovie.value)
    }
  }


}

export function identifiantOuTitreRequis(control: FormGroup) {
  const identifiant = control.get('identifiant');
  const titre = control.get('title');

  if (!identifiant.value && !titre.value) {
    return { identifiantOuTitreRequis: true };
  }

  return null;
}

