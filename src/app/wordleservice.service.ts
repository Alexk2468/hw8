import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WordleService {

  constructor(private http:HttpClient) { }

  sendQuery(data: any): Observable<any> {
    return this.http.post<any>(
      'http://localhost:80/evil_wordle/src/app/wordle_api.php',
      //console.log("test"),
      JSON.stringify(data)
    )
  }
}
