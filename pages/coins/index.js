import axios from "axios"
import Link from "next/link";


const index = ({getData}) => {

 


  return (
    <div>
        {getData.map((e,i)=>(  
            <div key={i}>
                <Link href={`coins/${e.id}`}>
                {e.title}
                </Link>
            </div>
        ))}
    </div>
  )
}


export  const getStaticProps = async()=>{
    const data = await axios.get("https://jsonplaceholder.typicode.com/posts")
    

    return {
        props:{
            getData : data.data
        }
    }
}

export default index