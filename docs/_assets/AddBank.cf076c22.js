import{e,f as l,g as a,u as t,a as s,o as n,c as d,b as r,w as u,h as c,v as o,i as b,j as i,F as m,d as p,l as f}from"./index.dbabb28d.js";var x={setup(){const n=t(),d=s();let r=e(!1);const u=l({full_name:"",number:"",date:""});return{card:u,error:r,addCard:()=>{if(1==a(u))return r.value=!0;n.commit("card/ADD_BANK",u),d.push("/payment")}}}};const w={class:"flex items-center justify-between mb-10"},y=r("svg",{width:"23",height:"24",viewBox:"0 0 23 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM23 10.5L2 10.5V13.5L23 13.5V10.5Z",fill:"black"})],-1),h=r("h1",{class:"text-center text-2xl"},"New Card",-1),v=r("div",{class:"opacity-0"},[r("span",{class:"text-4xl"},"+")],-1),C={class:"nav flex items-center justify-around"},g=f("CARD"),k=f("Bank Account"),A={class:"my-8"},_=r("label",null,"Account Name",-1),L=r("br",null,null,-1),V={class:"my-8"},B=r("label",null,"Account Number",-1),N=r("br",null,null,-1),j={class:"my-8"},S=r("label",null,"BSB",-1),D=r("br",null,null,-1),U={key:0,class:"text-red-800 text-center block"},M=r("button",{class:"bg-blue-500 w-full py-4 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}," SAVE ",-1);x.render=function(e,l,a,t,s,f){const x=p("router-link");return n(),d(m,null,[r("div",w,[r(x,{to:"/payment"},{default:u((()=>[y])),_:1}),h,v]),r("div",C,[r(x,{to:"add-card",class:"w-2/4 h-10 border border-2 border-black text-center py-2"},{default:u((()=>[g])),_:1}),r(x,{to:"add-bank",class:"w-2/4 h-10 text-center py-2 bg-blue-600 text-white"},{default:u((()=>[k])),_:1})]),r("form",{onSubmit:l[4]||(l[4]=i(((...e)=>t.addCard&&t.addCard(...e)),["prevent"])),class:"text-left"},[r("div",A,[_,L,c(r("input",{type:"text",class:"w-full","onUpdate:modelValue":l[1]||(l[1]=e=>t.card.full_name=e),placeholder:"Name Surname "},null,512),[[o,t.card.full_name]])]),r("div",V,[B,N,c(r("input",{type:"text",class:"w-full","onUpdate:modelValue":l[2]||(l[2]=e=>t.card.number=e),placeholder:"############"},null,512),[[o,t.card.number]])]),r("div",j,[S,D,c(r("input",{type:"text",class:"w-full","onUpdate:modelValue":l[3]||(l[3]=e=>t.card.date=e),placeholder:"####"},null,512),[[o,t.card.date]])]),e.empty?(n(),d("span",U,"Please fill all fields")):b("",!0),M],32)],64)};export default x;