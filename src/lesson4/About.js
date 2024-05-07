import { useNavigate } from "react-router-dom"

export default function About() {
    const navigate = useNavigate()
  
    return (
        <>
            <h1>About the app</h1>
            <button onClick={()=> navigate(-1)}>back</button>
        </>
    )
}