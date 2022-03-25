import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './AboutCards.css';

const AboutCards = () => {
  return (
    <div className="main">
      <Hero>
        <div className="container">
          <div className="abrow">
            {card1.map((card, i) => (
              <div className="column">
                <Card>
                  <div className="card-title">{card.title}</div>
                  <div className="card-body">{card.description}</div>
                </Card>
              </div>
            ))}
          </div>
          <div className="abrow">
            {card2.map((card, i) => (
              <div className="column">
                <Card>
                  <div className="card-title">{card.title}</div>
                  <div className="card-body">{card.description}</div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Hero>
    </div>
  );
}

function Card({ children }) {
  const ref = useRef();
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      xys: [0, 0, 1],
      config: { mass: 30, tension: 600, friction: 40, precision: 0.00001 }
    };
  });

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07 // Scale
        ];
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        zIndex: isHovered ? 2 : 1,
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        )
      }}
    >
      {children}
    </animated.div>
  );
}



function Hero({ children }) {
  return (
    <div className="hero">
      <div className="hero-body">{children}</div>
    </div>
  );
}


const card1 = [
  {
    title: 'IEEE Standards',
    description:
      'With an active portfolio of nearly 1,300 standards and projects under development, IEEE is a leading developer of industry standards in a broad range of technologies.',
  },
  {
    title: 'IEEE eLearning Library',
    description:
      'Online courses enable you to get up to speed quickly on emerging technologies and trends.',
  },
  {
    title: 'Student Travel Grant',
    description:
      'IEEE offers a number of student travel grants to assist Student members in attending conferences and presenting papers.',
  }
];
const card2 = [
  {
    title: 'Free @ieee.org Email',
    description:
      'With GoogleApps@IEEE, members gain a robust capability for messaging with access to email, calendar, and contact services from any Internet-connected computer.',
  },
  {
    title: 'Scholarships & Fellowships',
    description:
      'IEEE offers a variety of scholarships, grants, and fellowships for IEEE Student members.',
  },
  {
    title: 'IEEE Women In Engineering',
    description:
      'IEEE Women in Engineering (WIE) is a global network of IEEE members and volunteers dedicated to promoting women engineers.',
  }
];


export default AboutCards;