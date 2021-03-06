import React, { useRef , useState } from "react";
import classes from "./homepage.module.css";
import Linkedin from "../assets/linkedin";
import Github from "../assets/github";
import cart from "../assets/cart2.svg";
import connect from "../assets/connect2.svg";
import calc from "../assets/calc2.svg";
import redux from '../assets/redux2.png'
import reduxColored from '../assets/redux-colored.png'
import django from '../assets/django.png'
import djangoColored from '../assets/djangoColored.png'
import MoviesApp from '../assets/movies-icon.png'

const Homepage = () => {
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const handleScroll = (section) => {
    section === "skills" &&
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    section === "Projects" &&
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    section === "Contact" &&
      contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  let renderReduxIcon =  () =>(
    <img alt='icon' className={classes.icon} src={redux}></img>
  )
  let renderReduxIconColored =  () =>(
    <img alt='icon' className={classes.icon} src={reduxColored}></img>
  )
  let renderDjangoIcon =  () =>(
    <img alt='icon' className={classes.icon} src={django}></img>
  )
  let renderDjangoIconColored =  () =>(
    <img alt='icon' className={classes.icon} src={djangoColored}></img>
  )
  const [currentIcon, setCurrentIcon] = useState(renderReduxIcon)
  const [currentDjangoIcon, setCurrentDjangoIcon] = useState(renderDjangoIcon)

  const handleHover= (type ,condition) => {
    type === 'redux' ?
    condition === 'enter'?  setCurrentIcon(renderReduxIconColored) : setCurrentIcon(renderReduxIcon)
    :
    condition === 'enter'?  setCurrentDjangoIcon(renderDjangoIconColored) : setCurrentDjangoIcon(renderDjangoIcon)

  }
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.mainBorderContainer}>
          <div className={classes.mainBorderWrapper}>
            <div className={classes.mainBorder}></div>
          </div>
          <h1 className={classes.title}>Hi, I'm Nour</h1>
          <div className={classes.mainBorderWrapper}>
            <div className={classes.mainBorder1}></div>
          </div>
        </div>
      </div>
      <h4 className={classes.jobTitle}>Full-stack web developer</h4>
      <div className={classes.iconsContainer}>
        <Linkedin className={classes.Linkedin} width={25}></Linkedin>
        <Github className={classes.Linkedin} width={25}></Github>
      </div>
      <div className={classes.borderContainer}>
        <p className={classes.border}> </p>
      </div>
      <div className={classes.links}>
        <a onClick={() => handleScroll("skills")} href="#skills">
          Skills
        </a>
        <div className={classes.test}></div>
        <a onClick={() => handleScroll("Projects")} href="#Projects">
          <span>Projects</span>
        </a>
        <div className={classes.test}></div>
        <a onClick={() => handleScroll("Contact")} href="#Contact">
          <span>Contact</span>
        </a>
        <div className={classes.test}></div>
        <a
          rel="noreferrer"
          target="_blank"
          href="http://www.mediafire.com/file/e45taxv9kql543i/Nour_Midan_-_Copy_%25281%2529.pdf/file"
          
        >
          Resume
        </a>
        <div className={classes.test}></div>
      </div>
      <div className={classes.aboutContainer}>
        <div className={classes.about}>
          <h1 className={classes.aboutme}>About Me</h1>
          <h4 className={classes.text}>
            <b>Hi, I am Nour!</b> I'm a Full-stack web developer, I choose the
            web development world, because it is a growing field with
            many different opportunities and paths to choose from.
          </h4>
          <h4 className={classes.text}>
            I am passionate to learn new technologies. And always working on
            improving my skills.
          </h4>
          <h4 className={classes.text}>
            Besides coding, I enjoy hiking, cooking, watching movies, listening
            to music and gaming.{" "}
          </h4>
        </div>
      </div>
      <div className={classes.skills}>
        <h1 ref={skillsRef}>Skills:</h1>
        <div className={classes.techs}>
          <h1>
            <i className="fab fa-html5"></i>
            <span>HTML5</span>
          </h1>
          <h1>
            <i className="fab fa-css3-alt"></i>
            <span>CSS3</span>
          </h1>
          <h1>
            <i className="fab fa-js-square"></i>
            <span>JavaScript</span>
          </h1>
          <h1>
            <i className="fab fa-react"></i>
            <span>React</span>
          </h1>
          <h1 onMouseEnter={() => handleHover( 'redux', 'enter')} onMouseLeave={() => handleHover('redux','leave')}>
          {currentIcon}
            <span>Redux</span>
          </h1>
          <h1>
            <i className="fab fa-python"></i>
            <span>Python</span>
          </h1>
          <h1 onMouseEnter={() => handleHover( 'django', 'enter')} onMouseLeave={() => handleHover('django','leave')}>
            {currentDjangoIcon}
            <span>Django</span>
          </h1>
        </div>
        <h1 ref={projectsRef} className={classes.aboutme1}>
          Here are some of my recent work
        </h1>
        <div className={classes.project}>
          <h1 className={classes.projectTitle}>Movies App</h1>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://nour-movie-app.herokuapp.com/"
          >
            <img
              alt=""
              src={MoviesApp}
              width={200}
              style={{width: '150px' , padding: '20px '}}
              className={classes.projectIcon}
            />
          </a>
          <h4 className={classes.projectDescription}>
            Movies database user Authentication where users can reset password  and CRUD watchlists 
          </h4>
          <h5 className={classes.projectDescription}>
            Technologies used: React - Redux - Django - Django REST framework
          </h5>
        </div>
        <div className={classes.project}>
          <h1 className={classes.projectTitle}>Online Store</h1>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://best-deals-631d2.web.app/"
          >
            <img
              alt=""
              src={cart}
              width={200}
              className={classes.projectIcon}
            />
          </a>
          <h4 className={classes.projectDescription}>
            Store with user Authentication and shopping cart
          </h4>
          <h5 className={classes.projectDescription}>
            Technologies used: React - Material-Ui - Firebase
          </h5>
        </div>
        <div className={classes.project}>
          <h1 className={classes.projectTitle}>Social App</h1>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://connect--xp.web.app/"
          >
            <img
              alt=""
              src={connect}
              width={200}
              className={classes.projectIcon}
            />
          </a>
          <h4 className={classes.projectDescription}>
            Social App with user Authentication where users can post, comment
            and like
          </h4>
          <h5 className={classes.projectDescription}>
            Technologies used: React - JavaScript- CSS3 - Firebase
          </h5>
        </div>
        <div className={classes.project}>
          <h1 className={classes.projectTitle}>Calculator</h1>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://nourmidan.github.io/React-Calculator/"
          >
            <img
              alt=""
              src={calc}
              width={200}
              className={classes.projectIcon}
            />
          </a>
          <h4 className={classes.projectDescription}>Advanced Calculator</h4>
          <h5 className={classes.projectDescription}>
            Technologies used: React - JavaScript- CSS3
          </h5>
        </div>
        <footer ref={contactRef} className={classes.contact}>
          <h1>Contact Me</h1>
          <a
            rel="noreferrer"
            target="_blank"
            href="mailto:nourmidan67@gmail.com"
            id="emailLink"
          >
            <i className="fa fa-envelope"></i>&nbsp;nourmidan67@gmail.com
          </a>
          <a
          style={{marginBottom : '50px'}}
            rel="noreferrer"
            target="_blank"
            href="https://wa.me/201112712452"
            id="emailLink"
          >
            <i className="fab fa-whatsapp"></i>&nbsp;01112712452
          </a>
          <p className={classes.disclaimer}>
            Design inspired by
            <a
              target="_blank"
              rel="noreferrer"
              href="https://portfolio.sarahbeecroft.me/"
            >
              Sarah Beecroft
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Homepage;
