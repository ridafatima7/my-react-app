import React from "react";
import logoImage from './images/logo.png' 

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
              <a className="navbar-brand" href="/https://www.roomph.pk"> <img src={logoImage} alt="Logo" height="30" className="d-inline-block align-top" /> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" collapse navbar-collapse" id="navbarSupportedContent ">
                    <div className="ms-auto">
                    <ul className="  navbar-nav justify-content-end">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Contact</a>
                        </li>
                    </ul>
                    {/* </div> */}
                    {/* <div > */}
                    {/* <li className="nav-item">
                        <button disabled={true} className="btn btn-primary">signin</button>  
                    </li>    */}
                        </div>  
                            
                    

                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>
            <div className="h-8 px-5 bg-green-500 flex item-center justify-between">
                <h3>Logo</h3>
                <div className="flex gap-10">
                    <h4>about</h4>
                    <h4>contacts</h4>
                    <h4>Blogs</h4>
                </div>
            
            </div>
        </div>
        
    )
}
export default Navbar;
