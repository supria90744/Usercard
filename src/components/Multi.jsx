import propTypes from "prop-types";
export const Multi = (props) => {
  return (
    <div>
        <p>The value is:{props.value}</p>
    </div>
  )
}
Multi.propTypes={
    value:propTypes.oneOf([propTypes.string,propTypes.number,propTypes.bool]).isRequired,
}