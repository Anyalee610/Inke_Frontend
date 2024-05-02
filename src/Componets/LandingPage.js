import React, { useState } from 'react';
import Navbar from './Navbar';
import { Contact } from './JoinUs';
import { Banner } from './Banner';


export default function LandingPage (){


    return (
        <div >
            <Navbar></Navbar>
            <Banner></Banner>
            <Contact></Contact>
      </div>
    )

 }