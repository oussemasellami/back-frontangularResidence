import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from 'src/core/models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  private UrlResidence = "http://localhost:3000/api/residences";

  constructor(private http: HttpClient) { }

  getNumber(list: any, criteria: string, value: any): number {
    let n = 0;
    for (let i in list) {
      if (list[i][criteria] === value) {
        n++;
      }
    }
    return n;
  }

  getResidences(): Observable<Residence[]> {
    return this.http.get<Residence[]>(this.UrlResidence);
  }

  addResidence(res: Residence): Observable<Residence[]> {
    return this.http.post<Residence[]>(this.UrlResidence, res);
  }

  deleteResidence(id: string | number): Observable<Residence[]> {
    return this.http.delete<Residence[]>(`${this.UrlResidence}/${id}`);
  }

  getResidenceById(id: string | number): Observable<Residence[]> {
    return this.http.get<Residence[]>(`${this.UrlResidence}/${id}`);
  }

  updateResidence(id: string | number, res: Residence): Observable<Residence[]> {
    return this.http.put<Residence[]>(`${this.UrlResidence}/${id}`, res);
  }
}
