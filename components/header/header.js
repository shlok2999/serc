import Head from "next/head"
import styles from './header.module.css';
import Link from 'next/link';
import { useState } from "react";
import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 400,
    width: '100%',
    maxHeight: 300,
    height: '100%',

  },
};

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [state, setState] = useState({
    background: '#323232',
    hide: false
  });

  const { background, hide } = state;

  const handleInput = (e) => {
    const { name } = e.target;
    const value = e.target.type === 'checkbox' || e.target.type === 'radio' ? e.target.checked : e.target.value;
    console.log(e.target, name, value)

    setState({
      ...state,
      [name]: value
    })
  }

  return (
    <>
      <Head>
        <title>SERC</title>
        <link rel="icon" href="https://serc.iiit.ac.in/static/images/logo.jpg" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
      </Head>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          font-size: 13px;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      <header>
        <div class={`${styles.logo} container`} style={{ display: hide ? 'none' : 'flex' }}>
          <img src="https://serc.iiit.ac.in/static/images/logo.jpg" height="90px" width="90px" />
          <p class={`${styles.heading}`}>Software Engineering Research Center</p>
          <img src="https://serc.iiit.ac.in/static/images/iiit.png" height="90px" />
        </div>
        <nav class="navbar navbar-inverse navbar-fixed navbar-light" style={{ background }}>
          <div class="container">
            <div class="navbar-header">
              <a class="navbar-brand" href="/">SERC</a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active"><Link href="/">Home</Link></li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  People
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li><Link href="/people/faculty">Faculty</Link></li>
                  <li><Link href="/people/phd">PHD student</Link></li>
                  <li><Link href="/people/MS">MS student</Link></li>
                  <li><Link href="/people/btech">BTech student</Link></li>
                  <li><Link href="/people/intern">Project Intern</Link></li>
                </ul>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  Publication
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li><Link href="/publication/conference-and-workshop">Conference and Workshop</Link></li>
                  <li><Link href="/publication/journal">Journal</Link></li>
                  <li><Link href="/publication/others">Others</Link></li>
                </ul>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  Resources
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li><Link href="/resources/current-funded-projects">Current Funded Projects</Link></li>
                  <li><Link href="/resources/past-funded-projects">Past Funded Projects</Link></li>
                  <li><Link href="/resources/teaching">Teaching</Link></li>
                  <li><Link href="/resources/useful-link">Useful Links</Link></li>
                </ul>
              </li>
              {/* <!--<li><Link href="#">Publication</Link></li>--> */}
              <li><Link href="/focus-area/">Focus Area</Link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right" >
              <li style={{ display: 'flex', alignItems: 'center', marginLeft: 10, height: 50 }}>
                <button type="button" class="btn btn-primary" onClick={setIsOpen} >
                  Admin
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <h4 style={{ margin: 0, textAlign: 'center' }}>Admin Panel</h4>
        <div style={{ padding: '1.25rem', height: 'calc(100% - 20px)', display: 'flex', flexDirection: 'column' }}>
          <label >
            Navbar Color
            <input type='text' name='background' className='form-control' value={background} onInput={handleInput} />
          </label>
          <label style={{marginTop: '1.25rem'}}>
            <input type='checkbox' name='hide' className='form-check-input' defaultChecked={hide} onInput={handleInput} style={{marginRight: 10}}/>
            Hide Header
          </label>
          <button type='button' onClick={() => setIsOpen(false)} className='btn btn-success' style={{ display: 'block', width: 200, alignSelf: 'flex-end', marginTop: 'auto' }}>Save</button>
        </div>
      </ReactModal>
    </>
  )
}

export default Header
