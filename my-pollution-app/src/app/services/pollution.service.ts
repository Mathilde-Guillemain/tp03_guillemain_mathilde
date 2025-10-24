  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { environment } from '../../environments/environment';

  export interface Pollution {
    id?: number;
    titre: string;
    type: string;
    description: string;
    dateObservation: string;
    lieu: string;
    latitude: number;
    longitude: number;
    photoUrl?: string;
  }

  @Injectable({
    providedIn: 'root'
  })
  export class PollutionService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    getPollutions(): Observable<Pollution[]> {
      return this.http.get<Pollution[]>(this.apiUrl);
    }

    addPollution(pollution: Pollution): Observable<Pollution> {
      return this.http.post<Pollution>(this.apiUrl, pollution);
    }

    updatePollution(pollution: Pollution): Observable<Pollution> {
      return this.http.put<Pollution>(`${this.apiUrl}/${pollution.id}`, pollution);
    }

    deletePollution(id?: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
  }
