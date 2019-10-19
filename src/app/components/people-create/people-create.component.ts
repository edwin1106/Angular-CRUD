import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import{TipoDocumento} from '../../model/tipoDocumento';
import{TipoDocumentoService} from '../../service/tipoDocumento.service'
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-people-create',
  templateUrl: './people-create.component.html',
  //styleUrls: ['./people-create.component.css']
})
export class PeopleCreateComponent implements OnInit {
  public persona: Persona = new Persona();
  public tipoDocumentos:TipoDocumento[];

  constructor(private personaService: PersonaService, private tipoDocumentoService: TipoDocumentoService, private router: Router) { }

  ngOnInit(
  ) {
    this.tipoDocumentoService.listarDocumentos().subscribe(
      (tipoDocumentos) => {
        this.tipoDocumentos = tipoDocumentos;
      }
    );
  }

  insert(){
    this.personaService.insert(this.persona).subscribe(
      _=>{
        this.router.navigate(["/people-list"]);
      }
    )
  }
}
