"use client"

import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect = () => {
  const typedElement = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(typedElement.current, {
      strings: ["Seja bem vindo", "Explore agora!", "Neon Ventura"],
      typeSpeed: 100, 
      backSpeed: 30, 
    });

    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  return (
    <div>
      <span ref={typedElement}></span>
    </div>
  );
};

export default TypingEffect;
