import React from "react";
import {NavLink} from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { useState } from "react";


export default function Navbar(){
    const [isOpen,setIsOpen]=useState(false);
    return (
        <nav className="bg-main">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between">
                    <div className="flex">
                        <div className="flex">
                            <NavLink 
                                to="/" 
                                exact 
                                activeClassName="text-white" 
                                className="flex items-center py-6 px-3 mr-4 nav-text text-4xl font-bold cursive tracking-widest">
                                JackedProgrammer
                            </NavLink>
                        </div>
                        <div className="hidden md:flex">
                            <NavLink 
                                to="/post"
                                activeClassName="nav-active"
                                className="flex items-center py-3 px-3 my-6 rounded nav-text">
                                Blog
                            </NavLink>
                            <NavLink
                                to="/project"
                                activeClassName="nav-active"
                                className="flex items-center py-3 px-3 my-6 rounded nav-text">
                                Projects
                            </NavLink>
                            <NavLink 
                                to="/about"
                                activeClassName="nav-active"
                                className="flex items-center py-3 px-3 my-6 rounded nav-text">
                                About Me
                            </NavLink>
                        </div>
                    </div>
                    
                    <div className="hidden md:flex py-3 py-3 my-6">
                        <SocialIcon url="https://github.com/JackedProgrammer" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                        <SocialIcon url="https://www.youtube.com/channel/UCbuX73IbfYsCj6EKOun1h6w" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                        <SocialIcon url="https://www.tiktok.com/@jackedprogrammer" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                    </div>
                    <div className="flex md:hidden items-center py-3 px-6 my-6">
                        <button onClick={()=>setIsOpen(!isOpen)}>
                            <svg class="w-6 h-6" fill="none" stroke="#86c232" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </div>
                </div>
                
            </div>
            <div>
                <div className={`${isOpen? "block md:hidden py-1 px-2" : "hidden md:hidden py-1 px-2"}`}>
                    <NavLink 
                        to="/post"
                        activeClassName="nav-active"
                        className="flex items-center px-3 my-3 rounded nav-text">
                        Blog
                    </NavLink>
                    <NavLink
                        to="/project"
                        activeClassName="nav-active"
                        className="flex items-center px-3 my-3 rounded nav-text">
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/about"
                        activeClassName="nav-active"
                        className="flex items-center px-3 my-3 rounded nav-text">
                        About Me
                    </NavLink>
                    <div className="flex py-3 py-3 my-6">
                        <SocialIcon url="https://github.com/JackedProgrammer" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                        <SocialIcon url="https://www.youtube.com/channel/UCbuX73IbfYsCj6EKOun1h6w" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                        <SocialIcon url="https://www.tiktok.com/@jackedprogrammer" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}