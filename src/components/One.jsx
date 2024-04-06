import propTypes from "prop-types";
export const One = (props) => {
    const {color}=props;
  return (
   
    <div style={{backgroundColor:color,padding:"20px",color:"white"}}>
        <p>This component has a background of {color}</p>
    </div>
  )
}
One.propTypes={
    color:propTypes.oneOf(["red","green","blue"]).isRequired,
}
