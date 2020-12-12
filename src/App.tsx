import React from 'react'
import Sandbox1b from './components/sanbox1/sandbox1'
import Sandbox1 from './components/sanbox1/sandbox1'
import Sandbox2 from './components/sandbox2/Sandbox2';

const App: React.FC = () => {
   const functionOne = () => {
       console.log("hello from function1")
   }
   const functionWithPara = (name: string, age: number) => {
        console.log(age);
        return age;
   }
   const sandbox2Function = (prefer: String): boolean => {
       return prefer === "likegirls" ? true : false
   }
    return (
       <>
            <h1>
                Typescript Playground
            </h1>
            <Sandbox1 
                text="string"
                object={{name: "nambui"}}
                objectUseInterface={{like: "football", hate: "nothing"}}
                function1 = {functionOne}
                functionWithPara = {functionWithPara}

            />
            <Sandbox2 
                isGay={false}
                sanbox2Function={sandbox2Function}
            />
            
        </>
    )
}

export default App;