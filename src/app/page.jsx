'use client'


import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const { width, height } = useWindowSize()
  const [posX, setPosX] = useState("0px")
  const [posY, setPosY] = useState("-120px")


  

  const llamarGato =  async () => {
    const randomPositionXFrom = getRandomArbitrary(0, width) + "px"

    setPosX(randomPositionXFrom)

    const randomPositionXTo = getRandomArbitrary(0, width)+ "px"

    setPosX(randomPositionXTo)

    if (posY == "-120px") {
      const nuevaAltura = (height + 120) + "px"
      setPosY(nuevaAltura)
    } else {
      setPosY("-120px")
    }


    await sleep(2000)
    
  }

  return (
    <div className={styles.page}>
      <p className={styles.buttonMeow} onClick={llamarGato}>Haz clic para llamar al gato :3</p>

        <Image 
        src={"/cat.png"} 
        width={120} 
        height={90} 
        alt="Gato meow" 
        className={styles.gatoIcono}
        animate={{ rotate: 360 }} 
        style={{top: `${posY}`, left: `${posX}`}}
        />

    </div>
  );
}

//

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
     
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

