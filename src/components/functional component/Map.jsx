const Map=()=>{
    const array=["Ramchran","Yash"]
    const array1=[...array,"Surya","Karthi"]
    return(
        <div>
    <ul type="None">
                {array1.map((val,index)=>(
                <li key={index}>{val}</li>
                ))}
            
            </ul>
        </div>
    )
}
export default Map;