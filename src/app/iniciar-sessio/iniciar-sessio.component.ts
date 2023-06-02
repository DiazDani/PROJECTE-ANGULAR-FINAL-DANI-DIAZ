import { Component,OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-iniciar-sessio',
  templateUrl: './iniciar-sessio.component.html',
  styleUrls: ['./iniciar-sessio.component.css']
})
export class IniciarSessioComponent  implements OnInit {
  constructor(private http: HttpClient) {

    this.http.get<any>("http://localhost:3080/api/iniciar-sessio").forEach((client) =>
      console.log(client)
    )
  }
  ngOnInit() {
    let idLogin = document.getElementById("login")
    // @ts-ignore
    idLogin.onclick = function checkData() {
      let loginform = document.getElementsByClassName("form-login")[0]
      // @ts-ignore
      let nomUsuari = loginform.nom.value
      // @ts-ignore
      let contrasenyaUsuari = password.value
      let checkUsuari = sessionStorage.getItem("nomUsuari")
      let checkContrasenya = sessionStorage.getItem("contrasenyaUsuari")
      if ((nomUsuari == checkUsuari) && (contrasenyaUsuari == checkContrasenya)) {
        alert("Sessió iniciada")
        // @ts-ignore
        localStorage.setItem("usuariSessió", nomUsuari)
        // @ts-ignore
        loginform.reset()
      } else {
        alert("error a l'iniciar sessió")
      }
    }
    let logoutonclick= document.getElementById("logout")
    // @ts-ignore
    logoutonclick.onclick= function tancarsessio(){
      window.localStorage.clear()
      alert("Sessió tancada")
    }
  }
}

