import React from "react";

function Header() {
  return (
    <div className="header_part">
      <div className="left">
        <h1>Header</h1>
        <h1>Footer</h1>
        <p>
          3 defaultuis utilities locus sed A Lorem Ipsum egy egyszerû
          szövegrészlete, szövegutánzata a betûszedõ és nyomdaiparnak. A Lorem
          Ipsum az 1500-as évek óta standard szövegrészletként szolgált az
         
        </p>
        <div style={{display:"flex",gap:"10px"}}>
        <div style={{backgroundColor:"yellow",width:"30px",height:"30px",borderRadius:"50%",marginTop:"40px"}}></div>
        <div style={{backgroundColor:"red",width:"40px",height:"40px",borderRadius:"50%",marginTop:"10px"}}></div>
        <div style={{backgroundColor:"blue",width:"40px",height:"40px",borderRadius:"50%",marginTop:"40px"}}></div>
        </div>
        
      </div>
      <div className="right">
    
        <img src="https://th.bing.com/th/id/OIP.3nnVdGD5Y738E7S5NSUP5gHaFN?w=294&h=206&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="happy" className="happy"/>
      </div>
    </div>
  );
}

export default Header;
