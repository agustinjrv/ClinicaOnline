import { Usuario } from "../usuario/usuario";

export class Especialista extends Usuario{
    
    public especialidad:string;
    public perfil='Especialista';
    public estadoCuenta=false;
}
