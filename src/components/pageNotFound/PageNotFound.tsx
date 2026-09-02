import React from "react"
import { Link } from "react-router-dom"
import './PageNotFoundStyle.css'
import img404 from "../../assets/Page404/404.png"

export default function PageNotFound () {
  return (
    <div className="not-found">
      <img src={img404} alt="404 Not Found" />
      <h1>Pagina non trovata</h1>
      <p>Sembra che tu sia finito in un'area inesplorata.</p>
      <Link to="/" className="home-link">Torna alla base</Link>
    </div>
  )
}