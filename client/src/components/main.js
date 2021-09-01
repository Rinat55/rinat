import {useState, useEffect} from 'react'
import axios from "axios";

function Main() {
    const [test, setTest] = useState('wait')

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/test').then(({data}) => setTest(data))
    },[])
    return (
        <div>
            Hello
            <p>{test}</p>
        </div>
    );
}

export default Main;
