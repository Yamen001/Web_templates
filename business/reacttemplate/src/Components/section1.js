import { useState , react } from "react";
import "../styles/section1.css"
export default function Sec1(){
    let text = ["yamen","majd","ahmed"]
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
                    <button onClick={()=>{btnbackground(0)}} >Description</button>
                    <button onClick={()=>{btnbackground(1)}}>Specification</button>
                    <button onClick={()=>{btnbackground(2)}}>Reviews</button>
                </div>
                <div className="Text">{text[text1]}</div>
                <ul className="details">
                    <li><p>Pretium quam vulputate dignissim suspendisse.</p></li>
                    <li><p>Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras.</p></li>
                    <li><p>Sed vulputate mi sit amet mauris commodo. Neque laoreet suspendisse interdum</p></li>
                </ul>
                <button>Learn More</button>
            </div>
        </section>
    )
}