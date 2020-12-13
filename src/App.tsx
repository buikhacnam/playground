// @ts-ignore
import React, {useState} from 'react';
import Sandbox1b from './components/sanbox1/sandbox1'
import Sandbox1 from './components/sanbox1/sandbox1'
import Sandbox2 from './components/sandbox2/Sandbox2';
import Sandbox3 from './components/sandbox3/Sandbox3';
import {jobInfo} from './components/sandbox3/Sandbox3'

const App: React.FC = () => {

    const [job, setJob] = useState<jobInfo>({role: "", salary: 8});
    
   const functionOne = () => {
       console.log("hello from function1")
   }
   const functionWithPara = (name: string, age: number) => {
        console.log(age);
        return age;
   }
   const sandbox2Function = (prefer: String): Boolean => {
       return prefer === "likegirls" ? true : false
   }
   const handleChangeSandbox3 = (e:any): any => {
        const value = e.target.value;
        const name = e.target.name;
        setJob((prev:any) => {
            return {...prev, [name]: value}
        })
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

            <Sandbox3 
                name="BuiNam"
                age={26}
                isGay={false}
                handleChange={handleChangeSandbox3}
                role={job.role}
            />
            {<p>output Sanbox3: {job.role}</p>}
            
        </>
    )
}

export default App;