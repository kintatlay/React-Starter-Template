import React from 'react';
import './styles/style.css';
import './styles/style.scss';
import Image from '../test.jpg';
import data from '../Travel_Data.csv';
import { IconContext } from "react-icons";
import { FaBeer } from 'react-icons/fa';

class App extends React.Component {
    render() {
        console.log(data);
        return (
            <div>
                <p className="text-color text-center">Hello</p>
                <img src={Image} alt="test" ></img>
                <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
                    <div>
                        <FaBeer />
                    </div>
                </IconContext.Provider>
            </div>
        )
    }
}

export default App;