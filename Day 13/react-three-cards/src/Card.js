import React from "react";
import "./Card.css"; //Import CSS for styling

function Card({title, content, color, buttonColor}){
    const press = (x) => {
        alert(x);
    }

    return (
        <div className="card" style={{backgroundColor: color}}>
            <h2>{title}</h2>
            <p>{content}</p>
            <button style={{backgroundColor: buttonColor}} onClick={() => press(title)}>Click Me!</button>
        </div>
    );
}

export default Card;