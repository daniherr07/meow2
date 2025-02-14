'use client'


import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import useSound from 'use-sound';

export default function Home() {
    


  return (
    <div>
        <p>Cantidad de Veces Llamado Globalmente: </p>    
        
    </div>
    
  );
}

//

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


