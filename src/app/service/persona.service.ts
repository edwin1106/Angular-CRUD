import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import{HttpClient} from '@angular/common/http';
import {Persona} from '../model/persona';
import {Endpoints} from '../util/endpoints';
import {Header} from '../util/header';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  listarPersona():Observable<Persona[]>{
    return this.http.get<Persona[]>(Endpoints.LISTAR);
  }

  insertar(persona: Persona):Observable<Persona>{
    return this.http.post<Persona>(Endpoints.INSERTAR,persona,{headers:Header.HEADER_JSON});
  }
  eliminar(id:number){
    return this.http.delete<Persona>(Endpoints.ELIMINAR.concat(id.toString()).concat("/persona"),{headers: Header.HEADER_TEXT})
  }
  getPersona(id:number){
    return this.http.get<Persona>(Endpoints.TRAER_PERSONA.concat(id.toString()).concat("/persona"),{headers: Header.HEADER_TEXT})
  }
  actualizar(persona: Persona){
    return this.http.put(Endpoints.ACTUALIZAR.concat(persona.id.toString()).concat("/persona"),persona);
  }
  getByTipodocumentoAndNroDocumento(tipoDocumento: number, nroDocumento: number) :Observable<Persona[]>{
    return this.http.get<Persona[]>(Endpoints.BUSCAR_TIPO_DOCUMENTO_NRO_DOCUMENTO.concat("/").concat(tipoDocumento.toString()).concat("/").concat(nroDocumento.toString()));
  }

}
