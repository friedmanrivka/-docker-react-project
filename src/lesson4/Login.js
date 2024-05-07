import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    return (
        <>
            <center>
                <input placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
                <br></br>
                <input placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                <br></br>
                <button onClick={(e) => navigate(`/home/${name}/${password}`)}>Login</button>
            </center>
        </>
    )
}