import './about.css'
import CSS from '../../assets/css.svg'
import HTML from '../../assets/html.svg'
import JS from '../../assets/js.svg'
import PY from '../../assets/py.svg'
import JAVA from '../../assets/java.svg'
import { useState } from 'react'

function About() {
    const [display, setDisplay] = useState('block')
    const [buttonText, setButtonText] = useState('Hide')

    function toggle() {
        if (display == 'none') {
            setDisplay('block')
            setButtonText('Hide')
        } else {
            setDisplay('none')
            setButtonText('Show')
        }
    }

    return (
        <div id="about">
            <h2>
                <button className="toggler" onClick={toggle}>{buttonText}</button>
                About Me
            </h2>
            <div style={{display: display}}>
                <p>
                    I'm a student at Boston University studying computer science. I'm currently a member of the BU Computer Science Club. I'm excited to learn more about machine learning and software engineering. I have experience in Robotics, Website Development, and Data Systems. Feel free to contact me at suhruthvuppala@gmail.com!
                </p>
                <br/>
                <h3>My Skills</h3>
                <div className="icons">
                    <img width="60" src={HTML}/>
                    <img width="60" src={CSS}/>
                    <img width="60" src={PY}/>
                    <img width="60" src={JS}/>
                    <img width="60" src={JAVA}/>
                </div>
            </div>
        </div>
    )
}

export default About