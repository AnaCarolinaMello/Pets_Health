
import React, { useState } from "react";
import Axios from 'axios'
import '../public/css/login.css'
import google from '../public/assets/google-white.svg'
import apple from '../public/assets/apple-white.svg'
import facebook from '../public/assets/facebook-white.svg'
import "normalize.css/normalize.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Login(){
    
    return(
        <main>
            <div id="flexbox">
            <div id="banner">
                <h1 id="titleBanner">Bem-vindo de volta!</h1>
                <div id="line"></div>
                <p id="textoPrincipal">Ainda não começou uma jornada conosco?</p>
                <p id="textoSecundario">Cadastre-se agora</p>
                <button id="signUp">Cadastrar</button>
            </div>
            <div id="loginArea">
                <h1 id="loginTitle">Entrar</h1>
                <div id="lineGreen"></div>
                <div id="divInput">
                    <div class="form-floating">
                        <input id="user" type="email" class="form-control" autocomplete="off" placeholder="Email"/>
                        <label class="control-label" for="user">Email</label>
                    </div>
                    <div class="form-floating">
                        <input id="password" type="text" class="form-control" autocomplete="off" placeholder="Senha"/>
                        <label class="control-label" for="password" id="labelPassword">Senha</label>
                    </div>
                </div>
                <div id="divButtons">
                    <button id="login">Entrar</button>
                    <button id='cadastro'>Cadastrar</button>
                </div>
                <p id="marcasText">Ou entre com</p>
                <div id="marcas">
                    <img id='google' className="imgSvg" src={google} alt='google'></img>
                    <img id='apple' className="imgSvg" src={apple} alt='apple'></img>
                    <img id='facebook' className="imgSvg" src={facebook} alt='facebook'></img>
                </div>
            </div>
            </div>
        </main>
    )
}

export default Login