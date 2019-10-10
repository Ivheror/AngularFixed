import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Owner } from './owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }
  results:string[];

  getOwners(): Observable<Owner[]>{
    return this.http.get<Owner[]>('http://10.125.124.67:9966/petclinic/api/owners');
  }
}
