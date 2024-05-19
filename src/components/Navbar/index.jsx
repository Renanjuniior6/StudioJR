/* eslint-disable prettier/prettier */
import React from "react"
import "bootstrap"

import "./styles.scss"
import "./styles.css"

import Logo from "../../../Images/General/Logo-preview-copy.png"

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img className="Logo-img" src={Logo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#specialization">
                  Especializações
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#about">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#results">
                  Resultados
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#about-space">
                  Conheça o espaço
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#services">
                  Serviços
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#products">
                  Produtos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#certificates">
                  Certificados
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#assessments">
                  Avaliações
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#main-questions">
                  Perguntas Frequentes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#addicional-information">
                  Informações adicionais
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Outros
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a className="dropdown-item" href="#">
                      Agendamento
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cuidados capilares
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
