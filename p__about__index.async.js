(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{O0dG:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});a("LdZX");var n=a("3AiO"),l=(a("RczJ"),a("QKK5")),r=a("q1tI"),c=a.n(r),i=["terrible","bad","normal","good","wonderful"];function o(e){return c.a.createElement("h1",null,"hello,",e.name)}function s(e){function t(t){t.preventDefault();var a=[1,2,3];e.handleClickqq(a)}return c.a.createElement("a",{href:"http://www.jd.com",onClick:t},"Click me")}class h extends r["Component"]{constructor(e){super(e),this.state={value:3,date:(new Date).toLocaleTimeString()},this.handleChange=this.handleChange.bind(this)}handleChange(e){this.setState({value:e})}tick(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Hello, world!"),c.a.createElement("h2",null,"It is ",this.state.date,"."))}handleClickle(e){console.log(e,"---")}componentDidMount(){this.timer=setInterval(()=>{this.setState({date:(new Date).toLocaleTimeString()})},1e3)}componentWillUnmount(){clearInterval(this.timer)}render(){var e=this.state.value;return c.a.createElement("div",null,c.a.createElement(l["a"],{active:!0}),c.a.createElement(o,{name:"reactApp"}),c.a.createElement(o,{name:"feiyu"}),c.a.createElement("span",null,c.a.createElement(n["a"],{tooltips:i,onChange:this.handleChange,value:e}),e?c.a.createElement("span",{className:"ant-rate-text"},i[e-1]):""),this.tick(),c.a.createElement(s,{handleClickqq:this.handleClickle}),c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"hello"),c.a.createElement("p",null,"react")))}}}}]);