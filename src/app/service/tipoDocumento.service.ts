import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import{HttpClient} from '@angular/common/http';
import {TipoDocumento} from '../model/tipoDocumento';
import {Endpoints} from '../util/endpoints';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  constructor(private http: HttpClient) { }

  listarDocumentos():Observable<TipoDocumento[]>{
    return this.http.get<TipoDocumento[]>(Endpoints.TIPOS_DOCUMENTO);
  }
}