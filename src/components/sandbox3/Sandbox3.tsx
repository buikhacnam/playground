import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';


interface gear {
    handleChange: (e: any) => any;
}

interface information extends gear, jobInfo{
    name: string,
    age: number,
    isGay: boolean
}

export interface jobInfo {
    role: string;
    salary?: number;
    
}

const Sandbox3: React.FC<information> = ({handleChange, role}) => {
    //const [job, setJob] = useState<jobInfo>({role: "", salary: 8});
    // const [storeJob, setStoreJob] = useState<jobInfo[]>([]);
    

    return (
        <SandBox3Wrapper>
            <p>
                Hello from Sandbox3 
            </p>
            <form >
                <label>Job:
                    <input type='text' name='role' value={role} onChange={handleChange}/>
                </label>
            </form>
        </SandBox3Wrapper>
    )
}

const SandBox3Wrapper = styled.div`
    display: grid;
    background-color: blueviolet;
    color: white;
    text-align: center;
`

export default Sandbox3;