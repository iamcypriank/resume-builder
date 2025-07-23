import Button from "./Button";

export default function Header(){

    function printHello(){
        console.log('hjello');
    }
    return (
        <header 
        className="flex justify-between p-4">
            <h1 
            className="font-unbounded text-white text-2xl font-bold"
            >Resume Builder</h1>

            <Button 
            handle={printHello}
            > Generate </Button>
        </header>
    )
}