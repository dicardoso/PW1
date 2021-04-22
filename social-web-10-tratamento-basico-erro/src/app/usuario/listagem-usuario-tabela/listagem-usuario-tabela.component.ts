import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../shared/model/usuario';
import {UsuarioService} from '../../shared/services/usuario.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-listagem-usuario-tabela',
  templateUrl: './listagem-usuario-tabela.component.html',
  styleUrls: ['./listagem-usuario-tabela.component.scss']
})
export class ListagemUsuarioTabelaComponent implements OnInit {

  usuarios: MatTableDataSource<Usuario>;
  mostrarColunas: ['ID', 'Nome', 'CPF', 'Idade'];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = new MatTableDataSource<Usuario>(usuarios)
    );
    console.log(this.usuarios);
  }

  filtrar(value: string): void {
    this.usuarios.filter = value.trim().toLowerCase();
  }
}
