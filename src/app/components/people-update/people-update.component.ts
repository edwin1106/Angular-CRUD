import { Component, OnInit } from '@angular/core';
import { TipoDocumento } from 'src/app/model/tipoDocumento';
import { Persona } from 'src/app/model/persona';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/service/persona.service';
import { TipoDocumentoService } from 'src/app/service/tipoDocumento.service';

@Component({
  selector: 'app-people-update',
  templateUrl: './people-update.component.html',
  //styleUrls: ['./people-update.component.css']
})
export class PeopleUpdateComponent implements OnInit {

  public tipoDocumentos: TipoDocumento[];
  persona = new Persona();

  constructor( 
    private route: ActivatedRoute, 
    private personaService: PersonaService, 
    private tipoDocumentoService: TipoDocumentoService, 
    private router: Router) { }

  ngOnInit() {
    const id= Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.personaService.getPersona(id).subscribe(
      (persona) => {
        this.persona = persona;
      }

    )

    this.tipoDocumentoService.listarDocumentos().subscribe(
      (tipoDocumentos) => {
        this.tipoDocumentos = tipoDocumentos
      }
    );
  }

  update(){
    this.personaService.actualizar(this.persona).subscribe(
      _=> {
        this.router.navigate(["/people-list"]);
      }
    )
  }
}
