import React from 'react';
import Sanbox2Interface from './Sandbox2Interface';

interface Props extends Sanbox2Interface {
    isGay: boolean;
}

const Sandbox2: React.FC<Props> = ({isGay, sanbox2Function}):any => {
    
    console.log(`Sandbox2: Nam is gay?: ${isGay} and likes girls?: ${sanbox2Function("likegirls")}`)
    return(
        <p>Sandbox2: Nam is gay?: {isGay} and likes girls?: {sanbox2Function("likegirls")}</p>
    )
}

export default Sandbox2;