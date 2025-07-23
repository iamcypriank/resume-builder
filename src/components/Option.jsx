export default function Option({ show , name , img }){
    return (
         <div  className={ show ?  "flex gap-4 px-4 py-2 bg-btnbg rounded-md text-white " : "flex gap-4 px-4 py-2 "} >
            <img 
            className="h-[1.5rem]"
            src={img} 
            alt="" />
            <p 
            className="font-medium">{name}</p>
        </div>
    )
}