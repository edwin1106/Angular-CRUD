import { Component, OnInit } from '@angular/core';
//import { PersonaService } from 'src/app/service/persona.service';
import {Persona} from '../../model/persona'
import {PersonaService} from '../../service/persona.service'

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  //styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  personas: Persona[] = [];
  constructor(private personaService: PersonaService) { }

  ngOnInit() {

  this.personaService.listarPersona().subscribe(
    (personas) => {
      this.personas = personas;
    }

  );
  }

}
