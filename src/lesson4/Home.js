import { useNavigate, useParams } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()
    const {name} = useParams()
    const {password} = useParams()
  
    return (
        <>
            <h1>Hi {name}</h1>
            <button onClick={()=> navigate(-1)}>back</button>
            <button onClick={()=> navigate("/about")}>about</button>
        </>
    )
}