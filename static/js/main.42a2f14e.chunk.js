(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(t,e,s){},16:function(t,e,s){},19:function(t,e,s){"use strict";s.r(e);var r,a=s(1),n=s.n(a),i=s(10),c=s.n(i),l=(s(15),s(16),s(2)),o=s(3),u=s(6),d=s(5),p=s(4),b=s(7),j=s(0),O=function(t){Object(d.a)(s,t);var e=Object(p.a)(s);function s(t){var r;return Object(l.a)(this,s),(r=e.call(this,t)).EqualsButton=-1,r.state={},r}return Object(o.a)(s,[{key:"OnClick",value:function(){this.props.ButtonPressedCallback(this.props.myNumber)}},{key:"render",value:function(){var t=this;return Object(j.jsx)(b.a,{className:"CalculatorButton",onClick:function(){return t.OnClick()},variant:"dark",children:this.props.DisplayNumber})}}]),s}(a.Component);function h(t){switch(t){case r.Add:return"\u2795";case r.Subtract:return"\u2796";case r.Multiply:return"\u2716";case r.Divide:return"\u2797";default:return""}}!function(t){t[t.Add=0]="Add",t[t.Subtract=1]="Subtract",t[t.Multiply=2]="Multiply",t[t.Divide=3]="Divide",t[t.Equals=4]="Equals",t[t.Clear=5]="Clear",t[t.None=6]="None"}(r||(r={}));var C,x=function(t){Object(d.a)(s,t);var e=Object(p.a)(s);function s(t){var r;return Object(l.a)(this,s),(r=e.call(this,t)).EqualsButton=-1,r.state={},r}return Object(o.a)(s,[{key:"OnClick",value:function(){this.props.ButtonPressedCallback(this.props.myOperationType)}},{key:"render",value:function(){var t=this;return Object(j.jsx)(b.a,{className:"CalculatorButton",onClick:function(){return t.OnClick()},variant:"dark",children:this.props.DisplayString})}}]),s}(a.Component),y=function(t){Object(d.a)(s,t);var e=Object(p.a)(s);function s(t){var r;return Object(l.a)(this,s),(r=e.call(this,t)).state={},r}return Object(o.a)(s,[{key:"render",value:function(){return Object(j.jsx)("table",{className:"CalculatorButtons",children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{}),Object(j.jsx)("td",{}),Object(j.jsx)("td",{}),Object(j.jsx)("td",{children:Object(j.jsx)(x,{ButtonPressedCallback:this.props.OperationPressedCallback,DisplayString:"\ud83c\udd91",myOperationType:r.Clear})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)(O,{myNumber:1,DisplayNumber:"1",ButtonPressedCallback:this.props.ButtonPressedCallback})}),Object(j.jsx)("td",{children:Object(j.jsx)(O,{myNumber:2,DisplayNumber:"2",ButtonPressedCallback:this.props.ButtonPressedCallback})}),Object(j.jsx)("td",{children:Object(j.jsx)(O,{myNumber:3,DisplayNumber:"3",ButtonPressedCallback:this.props.ButtonPressedCallback})}),Object(j.jsx)("td",{children:Object(j.jsx)(x,{DisplayString:"\u2795",myOperationType:r.Add,ButtonPressedCallback:this.props.OperationPressedCallback})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)(O,{myNumber:4,DisplayNumber:"4",ButtonPressedCallback:this.props.ButtonPressedCallback})}),Object(j.jsx)("td",{children:Object(j.jsx)(O,{myNumber:5,DisplayNumber:"5",ButtonPressedCallback:this.props.ButtonPressedCallback})}),Object(j.jsx)("td",{children:Object(j.jsx)(O,{myNumber:6,DisplayNumber:"6",ButtonPressedCallback:this.props.ButtonPressedCallback})}),Object(j.jsx)("td",{children:Object(j.jsx)(x,{DisplayString:"\u2796",myOperationType:r.Subtract,ButtonPressedCallback:this.props.OperationPressedCallback})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)(O,{myNumber:7,DisplayNumber:"7",ButtonPressedCallback:this.props.ButtonPressedCallback})}),Object(j.jsx)("td",{children:Object(j.jsx)(O,{myNumber:8,DisplayNumber:"8",ButtonPressedCallback:this.props.ButtonPressedCallback})}),Object(j.jsx)("td",{children:Object(j.jsx)(O,{myNumber:9,DisplayNumber:"9",ButtonPressedCallback:this.props.ButtonPressedCallback})}),Object(j.jsx)("td",{children:Object(j.jsx)(x,{DisplayString:"\u2716",myOperationType:r.Multiply,ButtonPressedCallback:this.props.OperationPressedCallback})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{colSpan:3,children:Object(j.jsx)(O,{myNumber:0,DisplayNumber:"0",ButtonPressedCallback:this.props.ButtonPressedCallback})}),Object(j.jsx)("td",{children:Object(j.jsx)(x,{DisplayString:"\u2797",myOperationType:r.Divide,ButtonPressedCallback:this.props.OperationPressedCallback})})]})]})})}}]),s}(a.Component),m=function(t){Object(d.a)(s,t);var e=Object(p.a)(s);function s(t){var r;return Object(l.a)(this,s),(r=e.call(this,t)).state={},r}return Object(o.a)(s,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"CalculatorDisplay",children:this.props.displayString})}}]),s}(a.Component);!function(t){t[t.FirstOperand=0]="FirstOperand",t[t.SecondOperand=1]="SecondOperand",t[t.Result=2]="Result"}(C||(C={}));var k=function(t){Object(d.a)(s,t);var e=Object(p.a)(s);function s(t){var a;return Object(l.a)(this,s),(a=e.call(this,t)).OnNumberButtonPressed=a.OnNumberButtonPressed.bind(Object(u.a)(a)),a.OnOperationButtonPressed=a.OnOperationButtonPressed.bind(Object(u.a)(a)),a.computeResult=a.computeResult.bind(Object(u.a)(a)),a.state={operand1:0,operand1Text:"",operand2:0,operand2Text:"",result:"",Operation:r.None,CurrentState:C.FirstOperand},a}return Object(o.a)(s,[{key:"OnNumberButtonPressed",value:function(t){if(this.state.CurrentState===C.Result)this.setState((function(e){return{operand1:t,operand1Text:t.toString(),operand2:0,operand2Text:"",result:"",Operation:r.None,CurrentState:C.FirstOperand}}));else if(this.state.CurrentState===C.FirstOperand)this.setState((function(e){return{operand1Text:e.operand1Text+t.toString(),operand1:+(e.operand1Text+t.toString())}}));else{if(this.state.CurrentState!==C.SecondOperand)throw new Error("Unknown state '"+C[this.state.CurrentState]);this.setState((function(e){return{operand2Text:e.operand2Text+t.toString(),operand2:+(e.operand2Text+t.toString())}}))}}},{key:"computeResult",value:function(){switch(this.state.Operation){case r.Add:0,this.setState({result:(this.state.operand1+this.state.operand2).toString()});break;case r.Subtract:this.setState({result:(this.state.operand1-this.state.operand2).toString()});break;case r.Multiply:this.setState({result:(this.state.operand1*this.state.operand2).toString()});break;case r.Divide:this.setState({result:(this.state.operand1/this.state.operand2).toString()});break;default:console.log("Unhandled state")}}},{key:"OnOperationButtonPressed",value:function(t){switch(t){case r.Equals:this.state.CurrentState===C.SecondOperand&&(this.computeResult(),this.setState({CurrentState:C.Result}));break;case r.Clear:this.setState({operand1:0,operand1Text:"",operand2:0,operand2Text:"",Operation:r.None,CurrentState:C.FirstOperand});break;default:this.setState({Operation:t,CurrentState:C.SecondOperand,operand2:0,operand2Text:""})}}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"Calculator",children:[Object(j.jsx)(m,{displayString:this.state.operand1Text+" "+h(this.state.Operation)+" "+this.state.operand2Text+(this.state.CurrentState===C.Result?" = "+this.state.result:"")}),Object(j.jsx)(m,{displayString:this.state.CurrentState===C.FirstOperand?this.state.operand1Text:this.state.CurrentState===C.SecondOperand&&""===this.state.operand2Text?h(this.state.Operation):this.state.operand2Text}),Object(j.jsx)(y,{ButtonPressedCallback:this.OnNumberButtonPressed,OperationPressedCallback:this.OnOperationButtonPressed}),Object(j.jsx)("p",{}),Object(j.jsx)(x,{ButtonPressedCallback:this.OnOperationButtonPressed,myOperationType:r.Equals,DisplayString:"Calculate"})]})}}]),s}(a.Component);s(18);var S=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"TitleBar",children:"My Calculator App"}),Object(j.jsx)(k,{})]})},B=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(e){var s=e.getCLS,r=e.getFID,a=e.getFCP,n=e.getLCP,i=e.getTTFB;s(t),r(t),a(t),n(t),i(t)}))};c.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),B()}},[[19,1,2]]]);
//# sourceMappingURL=main.42a2f14e.chunk.js.map