import React,{createContext} from 'react';
import Heads from './Heads';
import Para from './Para';
import CompA from './CompA';
import Body from "./Body";
import Pokemon from "./Pokemon";

const FirstName=createContext();
const LastName=createContext();
function App()
{


    return(
        <>
        {/* <FirstName.Provider value={"Piyush Kumar"}>
            <LastName.Provider value={"Dubey"}>
            <CompA />
            </LastName.Provider>
        </FirstName.Provider> */
            < Pokemon />
        }
            
            
        </>
    );
}

export default App;
export {FirstName,LastName};