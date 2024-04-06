import propTypes from "prop-types";
export const Child = (props) => {
  return (
    <div>{props.children}</div>
  )
};

Child.propTypes={
    children:propTypes.array,
};
