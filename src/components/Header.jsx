// 
//     return React.createElement("div",null,React.createElement("h1",{className:"name"},"SUPPU"),React.createElement("p",{className:"qoute"},"Grow Through What You Go Through"));
//
export const Header = () => {
    let customCSS="error"
    const isLoggedIn=true;
    const greeting=isLoggedIn? <p>Welcome</p> : <p>Please Login</p>
    const items=["i1","i1","i3"];
 return (
     <>
          <div>
      <h1 className="name">SUPPU</h1>
         <p className="qoute" style={{fontStyle:"italic"}}>Grow Through What You Go Through</p>
         <p className={customCSS} style={{fontSize:'25px'}}>25+45={25+45}</p>
         {greeting}
         <ul>
            {items.map((items,index)=>(<li key={index}>{items}</li>))}
         </ul>
     </div>
     </>
   );
 };
