import propTypes from "prop-types";
export const Stu = (props) => {
    return (
      <div className="student">
          <table>
            <tbody>
            <tr>
                  <th>Name</th>
                  <td>{props.name}</td>
              </tr>
              <tr>
                  <th>Age</th>
                  <td>{props.age}</td>
              </tr>
              <tr>
                  <th>Maritalstatus</th>
                  <td>{props.Maritalstatus?"yes":"No"}</td>
              </tr>
              </tbody>
          </table>
      </div>
    )
  }
  Stu.propTypes={
    name: propTypes.string,
    age: propTypes.number,
    Maritalstatus: propTypes.bool,
  };

Stu.defaultProps={
    name:"no name",
    age:0,
    Maritalstatus:false
}


  