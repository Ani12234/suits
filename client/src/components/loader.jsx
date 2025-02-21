import React, { useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

const LoaderContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: black;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
  filter: brightness(0.7) contrast(1.2);
  transition: filter 0.5s ease;
`;

const Title = styled.h1`
  z-index: 2;
  font-size: 4rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  background: linear-gradient(90deg, #ffffff, #d4af37);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Loader = () => {
  useEffect(() => {
    gsap.from("#suitspot-text", {
      y: -100,
      opacity: 0,
      duration: 2.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <LoaderContainer>
      <BackgroundImage
        src="https://i.pinimg.com/originals/a0/21/a4/a021a49df015b0e0e156d9e3481c2abe.png"
        alt="Suit Background"
      />
      <Title id="suitspot-text">SUITSPOT</Title>
    </LoaderContainer>
  );
};

export default Loader;
