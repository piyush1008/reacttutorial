import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/250/300";
const img3="https://picsum.photos/200/300";

let d=new Date();
let t=d.getHours();
let gretting='';
const cssStyle={};
if(t>=1 && t<12)
{
  gretting=" MORNING";
  cssStyle.color="green";
}
else if(t>=12 && t<19)
{
  gretting=" EVENING";
  cssStyle.color="Orange";
}
else{
  gretting=" NIGHT";
  cssStyle.color="Black";

}

ReactDOM.render(
<>
<h1 className="heading">HELLO WORLD</h1>
<div className="img_src">
  <img src={img1}/>
  <img src={img2}/>
  <img src={img3}/>
</div>
<br />
<h1 className="heading">HELLO PIYUSH , <span style={cssStyle}>GOOD {gretting} </span></h1>
<App />

</>,
  document.getElementById("root"));
