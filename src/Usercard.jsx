function User(props){
    return <div className="cards">
        <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        <img src={props.profile} className="img" width={"140px"} alt="User"/>
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary.out">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skills,index)=>(<li key={index}>{skills}</li>))}
            </ul>
        </div>
    </div>
}
export const Usercard = () => {
  return (
    
        <User name="Supria" city="Theni" description="Aspiring Web Developer" skills={["Python","C","C++","HTML","CSS","Javascript"]} online={true} profile="Images/suppu.jpg"/>
    
  )
}
