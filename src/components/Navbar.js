import React from "react";
import {NavLink} from "react-router-dom";
import { SocialIcon } from "react-social-icons";


export default function Navbar(){
    return (
        <nav className="bg-red-600">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between">
                    <div className="flex">
                        <div className="flex">
                            <NavLink 
                                to="/" 
                                exact 
                                activeClassName="text-white" 
                                className="flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                                JackedProgrammer
                            </NavLink>
                        </div>
                        <div className="hidden md:flex">
                            <NavLink 
                                to="/post"
                                activeClassName="text-red-100 bg-red-700"
                                className="flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                                Blog
                            </NavLink>
                            <NavLink
                                to="/project"
                                activeClassName="text-red-100 bg-red-700"
                                className="flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                                Projects
                            </NavLink>
                            <NavLink 
                                to="/about"
                                activeClassName="text-red-100 bg-red-700"
                                className="flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                                About Me
                            </NavLink>
                        </div>
                    </div>
                    
                    <div className="hidden md:flex py-3 py-3 my-6">
                        <SocialIcon url="https://github.com/JackedProgrammer" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                        <SocialIcon url="https://www.youtube.com/channel/UCbuX73IbfYsCj6EKOun1h6w" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                        <SocialIcon url="https://www.tiktok.com/@jackedprogrammer" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                    </div>
                    <div className="flex md:hidden items-center py-3 px-3 my-6">
                        <p>Button here</p>
                    </div>
                </div>
                
            </div>
            <div className="flex">
                <div className="block md:hidden py-1 px-2">
                    <NavLink 
                        to="/post"
                        activeClassName="text-red-100 bg-red-700"
                        className="flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        Blog
                    </NavLink>
                    <NavLink
                        to="/project"
                        activeClassName="text-red-100 bg-red-700"
                        className="flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/about"
                        activeClassName="text-red-100 bg-red-700"
                        className="flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
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