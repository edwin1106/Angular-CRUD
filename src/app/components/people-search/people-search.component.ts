import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { TipoDocumento } from 'src/app/model/tipoDocumento';
import { TipoDocumentoService } from 'src/app/service/tipoDocumento.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
  //styleUrls: ['./people-search.component.css']
})
export class PeopleSearchComponent implements OnInit {

  personas: Persona[] = [];
  public tipoDocumentos: TipoDocumento[];

  constructor(private tipoDocumentoService: TipoDocumentoService, private personaService: PersonaService) { }

  ngOnInit() {

    this.tipoDocumentoService.listarDocumentos().subscribe(
      (tipoDocumentos) => {
        this.tipoDocumentos = tipoDocumentos;
      }
    );
  }

  getByTipoDocumentoAndNroDocumento(tipoDocumento: number,nroDocumento:number){
    this.personaService.getByTipodocumentoAndNroDocumento(tipoDocumento,nroDocumento).subscribe(
      (persona) => {
        this.personas = persona;
      }
    );
  }

}
