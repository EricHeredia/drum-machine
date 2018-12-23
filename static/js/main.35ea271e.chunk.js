(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(8),o=a.n(s),c=(a(15),a(2)),i=a(3),d=a(5),u=a(4),l=a(6),m=a(1),p=(a(18),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={},a.playSound=a.playSound.bind(Object(m.a)(Object(m.a)(a))),a.handleKeyPress=a.handleKeyPress.bind(Object(m.a)(Object(m.a)(a))),a.buttonTrigger=a.buttonTrigger.bind(Object(m.a)(Object(m.a)(a))),a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){e.keyCode===this.props.keyCode&&this.buttonTrigger()}},{key:"buttonTrigger",value:function(e){var t=document.getElementById(this.props.id);this.playSound(),t.style.backgroundColor="#2196F3",setTimeout(function(){t.style.backgroundColor="lightgrey"},100)}},{key:"playSound",value:function(e){var t=document.getElementById(this.props.keyTrigger);t.currentTime=0,t.play(),this.props.changeDisplayCB(this.props.id)}},{key:"render",value:function(){return n.a.createElement("div",{onClick:this.buttonTrigger,id:this.props.id,className:"drum-pad"},n.a.createElement("audio",{className:"clip",id:this.props.keyTrigger,src:this.props.url}),this.props.keyTrigger)}}]),t}(n.a.Component)),k=(a(20),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.currentBank.map(function(t,a){return n.a.createElement(p,{key:a,keyCode:t.keyCode,keyTrigger:t.keyTrigger,id:t.id,url:t.url,changeDisplayCB:e.props.changeDisplayCB})});return n.a.createElement("div",{id:"padBank"},t)}}]),t}(n.a.Component)),h={bankOne:[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],bankTwo:[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}]},g=(a(22),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"volumeContainer"},n.a.createElement("input",{type:"range",min:"1",max:"100",value:this.props.currentVolume,id:"volRange",className:"slider",onChange:this.props.adjustVolumeCB}),n.a.createElement("p",null,"Volume: ",this.props.currentVolume,"%"))}}]),t}(n.a.Component)),y=(a(24),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"toggleContainer"},n.a.createElement("h2",null,this.props.bankDisplay),n.a.createElement("label",{className:"bankSwitch"},n.a.createElement("input",{type:"checkbox",checked:this.props.isChecked,onChange:this.props.bankToggleCB}),n.a.createElement("span",{className:"slider"})))}}]),t}(n.a.Component)),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={currentBank:h.bankOne,bankDisplay:"Bank One",toggleChecked:!1,displayText:"",currentVolume:"50"},a.changeDisplay=a.changeDisplay.bind(Object(m.a)(Object(m.a)(a))),a.adjustVolume=a.adjustVolume.bind(Object(m.a)(Object(m.a)(a))),a.bankToggle=a.bankToggle.bind(Object(m.a)(Object(m.a)(a))),a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"changeDisplay",value:function(e){this.setState({displayText:e})}},{key:"adjustVolume",value:function(e){this.setState({currentVolume:e.target.value});var t=e.target.value/100;for(var a in this.state.currentBank)document.getElementById(this.state.currentBank[a].keyTrigger).volume=t}},{key:"bankToggle",value:function(){this.state.currentBank===h.bankOne?this.setState({toggleChecked:!0,currentBank:h.bankTwo,bankDisplay:"Bank Two"}):this.setState({toggleChecked:!1,currentBank:h.bankOne,bankDisplay:"Bank One"})}},{key:"render",value:function(){return n.a.createElement("div",{id:"drum-machine"},n.a.createElement(k,{currentBank:this.state.currentBank,changeDisplayCB:this.changeDisplay}),n.a.createElement("div",{id:"controlsContainer"},n.a.createElement(y,{bankDisplay:this.state.bankDisplay,bankToggleCB:this.bankToggle,isChecked:this.state.toggleChecked}),n.a.createElement("div",{id:"displayContainer"},n.a.createElement("h1",{id:"display"},this.state.displayText)),n.a.createElement(g,{adjustVolumeCB:this.adjustVolume,currentVolume:this.state.currentVolume})))}}]),t}(r.Component);o.a.render(n.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(26)}},[[9,2,1]]]);
//# sourceMappingURL=main.35ea271e.chunk.js.map