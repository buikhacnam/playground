import React from 'react'

interface InterfaceObject {
    like : "football",
    hate : string
}

interface Props {
    text: string;
    function1: () => void;
    functionWithPara: (text : string, num: number) => number;
    object: {name: string};
    objectUseInterface: InterfaceObject;
}

//I think this is the proper way:
const Sandbox1: React.FC<Props> = ({text, object, objectUseInterface, function1, functionWithPara}) => {
    
    return (
        <p>
            Hello from sanbox 1 and {text} {object.name} {objectUseInterface.like}
             {function1()}
             {functionWithPara('drogba', 40)} 
        </p>
    )
}

export  function Sandbox1b(props: Props)  {
   const text = props.text;
    return (
        <div>
            Hello from Sandbox1b and {text};
        </div>
    )
}
// or you can do this:
export function Sanbox1a<Props>(){
    return(
        <div>
            Hello from Sanbox1a;
        </div>
    )
}
export default Sandbox1;