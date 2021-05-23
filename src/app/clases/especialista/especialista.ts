import { Usuario } from "../usuario/usuario";

export class Especialista extends Usuario{
    
    public especialidades:any[]=[];
    public perfil='Especialista';
    public estadoCuenta=false;
}
