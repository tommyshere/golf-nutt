import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export function handleError(error: HttpErrorResponse): Observable<Error> {
  let msg: string;
  if (error.error instanceof ErrorEvent) {
    msg = error.error.message;
  } else {
    msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return of(Error(msg));
}
