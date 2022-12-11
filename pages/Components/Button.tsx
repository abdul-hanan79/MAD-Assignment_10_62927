
type btn={
    btnText:string;
}

let Button=(props:btn)=>{
    return(
        <>
        <button className="Btn">{props.btnText}</button>
        </>
    )
}
export default Button;