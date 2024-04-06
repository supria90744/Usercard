import propTypes from "prop-types";
export const Func = (props) => {
    const {handleClick}=props;
  return (
    <div>
        <p>This is a function Component</p>
        <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}
Func.propTypes={
    handleClick:propTypes.func.isRequired,
}
