import React from 'react'
import { Link } from 'react-router-dom'
import { Color } from 'three'
import "./Events.css"

const Sidenav = () => {
  return (
    <div>
        <div className='hh'>
          <h1>EVENTS</h1>
        </div>
        <div class="sidenav">
            <br />
            <Link to="/Events">
                <a href="#">2022</a>
            </Link>
            <hr />
            <Link to="/Events21">
            <a href="#">2021</a>
            </Link>
            <hr />
            <Link to="/Events20">
            <a href="#">2020</a>
            </Link>
            <hr />
            <Link to="/Events19">
            <a href="#">2019</a>
            </Link>
            <hr />
    
</div>
    </div>
  )
}

export default Sidenav