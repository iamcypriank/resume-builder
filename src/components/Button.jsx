export default function Button({ children , handle , type }){

    return (
        <button 
            type={type}
            className="h-[3em] px-[1em] bg-btnbg text-white font-medium rounded-md text-[.875rem] hover:bg-white hover:text-black"
            onClick={(e)=>{
                if(type=="button" && handle){
                    e.preventDefault();
                    handle();
                }
            }} 
        >{children}</button>
    )
}