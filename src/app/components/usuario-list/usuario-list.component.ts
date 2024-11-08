import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { Password } from 'primeng/password';
@Component({
  selector: 'app-usuario-list',
  standalone: true,
  imports: [ButtonModule, DropdownModule, DialogModule, TableModule, FormsModule, ReactiveFormsModule],
  templateUrl: './usuario-list.component.html',
  providers: [DialogService],
  animations:[
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate('500ms 0s ease-in')
      ]),
      transition(':leave', [
        animate('500ms 0s ease-out', style({
          opacity: 0
        }))
      ])
    ])
  ],
  styleUrl: './usuario-list.component.css'
})
export class UsuarioListComponent {

  usuarios: any [] = [];
  displayDialog: boolean = false;
  usuarioForm!: FormGroup;

  constructor(private fb: FormBuilder){}
  ngOnInit(){
  this.usuarioForm = this.fb.group({
    idUsuario: [null],
    names: ['', Validators.required],
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });
  }
  openDialog(){
    this.displayDialog = true;
  }
}
