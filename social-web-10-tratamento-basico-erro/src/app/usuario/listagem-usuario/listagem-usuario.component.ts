import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../shared/model/usuario';
import {UsuarioService} from '../../shared/services/usuario.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent implements OnInit {

  usuarios: MatTableDataSource<Usuario>;

  constructor(private usuarioService: UsuarioService, private roteador: Router) {
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = new MatTableDataSource<Usuario>(usuarios)
    );
  }

  editar(usuario: Usuario): void {
    this.roteador.navigate(['cadastrarusuario', usuario.id]);
  }

  filtrar(value: string): void {
    this.usuarios.filter = value.trim().toLowerCase();
  }

  remover(usuario: Usuario): void {
    this.usuarioService.remover(usuario.id).subscribe(
      resposta => {
        const indxUsuarioARemover = this.usuarios.findIndex(u => u.cpf === usuario.cpf);
        if (indxUsuarioARemover > -1) {
          this.usuarios.splice(indxUsuarioARemover, 1);
        }
      }
    );

  }

}
