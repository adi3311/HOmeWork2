import { Name } from "./name"

export const Arr=()=>{
    const [formValues, setFormValues] = useState({});
    const arr=["text","color","time","file","number","date"]
    const E=[]

    const onclick=(event)=>{
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }
    for(let i=0;i<6; i++)
    E.push(<Name key={i} paramter={arr[i]}></Name>)
    return(<form onSubmit={handleSubmit}>
         <div> {E}</div>
         <button type="submit">שלח טופס</button>
         /<form >);
}