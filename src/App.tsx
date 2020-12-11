import React from 'react'
import Sandbox1b from './components/sanbox1/sandbox1'
import Sandbox1 from './components/sanbox1/sandbox1'


const App: React.FC = () => {
   const functionOne = () => {
       console.log("hello from function1")
   }
   const functionWithPara = (name: string, age: number) => {
        console.log(age);
        return age;
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
            
        </>
    )
}

export default App;