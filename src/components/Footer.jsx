import React from 'react'
import './style.css'

export default function Footer() {
  return (
    <div className='container-fluid'>
      <div className="row my-footer">
        <div className="foot-left">
          <div className="foot-icon"><a href="https://wa.me/+2348067359106" target="_blank" rel="noopener npreferrer"><i class="bi bi-whatsapp text-success"></i></a></div>         
          <div className="foot-icon text-primary"><i class="bi bi-facebook"></i></div>          
          <div className="foot-icon text-info"><i class="bi bi-telegram"></i></div>
          <div className="foot-icon text-primary"><i class="bi bi-twitter"></i></div>
        </div>
        <div className="foot-right">&copy; 2023  |  powered by <span className='text-primary'><a href="https://hwl.org.ng/">Highdrostom </a></span>Works Limited.</div>
      </div>
    </div>
  )
}
