import React from "react";
import image from "../images/image1.jpg"

function Card(){

    const [slide, setSlide] = React.useState(true);

    const buttonStyle = "bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mx-2 my-5";

    return(
        <div className="mx-5">
            <div className="container my-10 mx-auto rounded-md shadow-2xl w-96 h-[37rem] bg-info-200
                            hover:opacity-70 transition ease-in duration-500
                            "
                onClick={() => setSlide(old => !old)} > 
                

                {slide ?
                <div>
                    <img src={image} className="mx-0 rounded-t-md"></img>
                    <p className="text-xl font-semibold my-5 mx-5">The Coolest Road</p>
                    <p className="text-md mx-5 font-rale">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem magni fugiat tenetur quo esse aperiam culpa corporis voluptate illo minus debitis, voluptatem numquam quod nulla vel soluta! Debitis odio porro eum sapiente autem voluptates, voluptatum velit hic, eos provident totam facilis enim odit, ut error sint accusantium. Quod, molestias facilis.
                    </p>
                    <div className="container mx-auto text-center">
                        <button className={buttonStyle}>#photografy</button>
                        <button className={buttonStyle}>#travel</button>
                        <button className={buttonStyle}>#winter</button>
                    </div>
                </div> 
                : 
                <div className="pt-10">
                    <p className="text-md mx-5 font-rale">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem magni fugiat tenetur quo esse aperiam culpa corporis voluptate illo minus debitis, voluptatem numquam quod nulla vel soluta! Debitis odio porro eum sapiente autem voluptates, voluptatum velit hic, eos provident totam facilis enim odit, ut error sint accusantium. Quod, molestias facilis.
                    </p>
                </div>
                }



            </div>


        </div>
    )
    
}

export default Card;