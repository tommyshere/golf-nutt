import { Component, OnInit, Inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerScore } from '../../../../interface';

@Component({
  selector: 'app-submit-guess-form-dialog',
  templateUrl: './submit-guess-form-dialog.component.html',
  styleUrls: ['./submit-guess-form-dialog.component.scss'],
})
export class SubmitGuessFormDialogComponent implements OnInit {
  userGuessForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.userGuessForm = this.fb.group({
      guesses: this.fb.array([]),
    });
  }

  get guessFormArr() {
    return this.userGuessForm.get('guesses') as FormArray;
  }

  private static createGuess(guess: PlayerScore) {
    return new FormGroup({
      golferName: new FormControl(guess.golferName),
      golferScore: new FormControl(guess.golferScore),
      playerGuess: new FormControl(0, Validators.required),
    });
  }

  ngOnInit(): void {
    for (let playerScore of this.data) {
      this.guessFormArr.push(
        SubmitGuessFormDialogComponent.createGuess(playerScore)
      );
    }
  }

  public onSubmit() {
    console.log(this.userGuessForm.value.guesses);
  }
}
