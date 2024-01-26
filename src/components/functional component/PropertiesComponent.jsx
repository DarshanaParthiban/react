import "../../css/PropsComponent.css"
function PropsComponent(Props){
    return(
        <div style={{"backgroundColor": "yellow"}}>
            Hello,{Props.name} <br></br>This is {Props.course} class
        </div>
    )
}
export default PropsComponent;