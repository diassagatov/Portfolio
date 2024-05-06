import './Navbar.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'


const Navbar = () => {
    const [active, setActive] = useState(0)

    function openMenu(){
        try{
            let element = document.getElementsByClassName('nav-elements')[0];
            if(active == 0){
                element.classList.add('active');
                setActive(1)
            }else{
                element.classList.remove('active');
                setActive(0)
            }
        }catch{
            console.log("no menu???")
        }
    }

    return (<>
        <div id='navbar'>
            <div onClick={openMenu} className='nav-elements'>
                <Link onClick={openMenu} className='true-nav-element nav-element' to={`/about`}>Abount me</Link>
                <Link onClick={openMenu} className='true-nav-element nav-element' to={`/projects`}>Projects</Link>
                <a onClick={openMenu} className=' true-nav-element download nav-element'  href="Dias_Sagatov_CV.pdf" download="Dias_Sagatov_CV_(Rus&Eng).pdf">Download CV</a>
                <div className='contact-container'>
                        <a target="_blank" href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZBLCXQgdNmHPGQrcHFXdHRdfnjQHvHkNGBcWpZJpQKXMKHnsfChXKJKDZCVlxCJdtsqzg' className='contact-element'><img src="gmail-icon.svg" alt="" /></a>
                        <a target="_blank" href='https://www.linkedin.com/in/dias-sagatov/' className='contact-element'><img src="in-icon.svg" alt="" /></a>
                        <a target="_blank" href='https://github.com/diassagatov' className='contact-element'><img src="github-icon.svg" alt="" /></a>
                        <a onClick={() => alert("Language switch coming soon, use Google translate for now.")} className='contact-element globe'><img src="globe.svg" alt="" /></a>
                </div>
            </div>
            <div  className='btn-container'>
                <h1>Sagatov_</h1>
                <button onClick={openMenu} className='mbl-btn'>
                        <img width={'10px'} src="menu-icon.svg" alt="menu-icon" />
                </button>
            </div>
        </div>

    </>);
}

export default Navbar;