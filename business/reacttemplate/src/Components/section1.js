import { useState , react } from "react";
import "../styles/section1.css"
export default function Sec1(){
    let text = ["Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. In iaculis nunc sed augue lacus viverra vitae congue eu. Nunc vel risus commodo viverra maecenas accumsan lacus. Egestas dui id ornare arcu odio ut. Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. In iaculis nunc sed augue lacus viverra vitae congue eu. Nunc vel risus commodo viverra maecenas accumsan lacus. Egestas dui id ornare arcu odio ut."
    ,"Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. In iaculis nunc sed augue lacus viverra vitae congue eu. ","Click again or double click to start editing the text. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. In iaculis nunc sed augue lacus viverra vitae congue eu. Nunc vel risus commodo viverra maecenas accumsan lacus. Egestas dui id ornare arcu odio ut."]
    const [text1,setText] = useState(0)
    function btnbackground(num){
        document.querySelectorAll(".Sec1 .container .buttons button").forEach(function(ele,index){
            if(index === num){
                ele.classList.add("active")
            }
            else{
                if(ele.classList.contains("active")){
                    ele.classList.remove("active")
                }
            }
            setText(num)
        })
    }
    return(
        <section className="Sec1">
            <div className="container">
                <div className="buttons">
                    <button className="active" onClick={()=>{btnbackground(0)}} >Description</button>
                    <button onClick={()=>{btnbackground(1)}}>Specification</button>
                    <button onClick={()=>{btnbackground(2)}}>Reviews</button>
                </div>
                <div className="Text">{text[text1]}</div>
                <ul className="details">
                    <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-check" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                    </svg>
                        <span>Pretium quam vulputate dignissim suspendisse.</span></li>
                    <li>
                    <svg xmlns="http://www.w3.org/2000/svg"  className="bi bi-check" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                    </svg>
                        <span>Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras.</span></li>
                    <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-check" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                    </svg>
                    <span>Sed vulputate mi sit amet mauris commodo. Neque laoreet suspendisse interdum</span></li>
                </ul>
                <button className="learnMore">Learn More</button>
            </div>
        </section>
    )
}