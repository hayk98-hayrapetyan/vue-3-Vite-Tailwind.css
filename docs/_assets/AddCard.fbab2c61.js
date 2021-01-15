import{f as e,g as t,u as a,a as l,o as r,c as n,b as d,w as s,h as c,v as u,k as o,i,j as b,F as m,d as p,l as x}from"./index.dbabb28d.js";var f={setup(){const r=a(),n=l();let d=e({empty:!1,expired:!1,date:!1,number:!1});const s=e({full_name:"",number:"",date:""});return{card:s,errors:d,addCard:()=>{if(d.empty=!1,1==t(s))return d.empty=!0;!function(){let e,t;d.expired=!1,d.date=!1;let a=s.date.slice(3,5),l=s.date.slice(0,2);if(l<1||l>12||isNaN(a)||isNaN(l))return void(d.date=!0);e=new Date,t=new Date,t.setFullYear(Number("20"+a),l-1,1),t<e&&(d.expired=!0)}(),d.number=!1,/^(?:4[0-9]{12}(?:[0-9]{3})?)$/.test(s.number)||(d.number=!0);for(let e in d)if(d[e])return;r.commit("card/ADD_CARD",s),n.push("/payment")},cc:function(){3==s.date.length&&(s.date=s.date.split("/").join(""))}}}};const y={class:"flex items-center justify-between mb-10"},h=d("svg",{width:"23",height:"24",viewBox:"0 0 23 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[d("path",{d:"M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM23 10.5L2 10.5V13.5L23 13.5V10.5Z",fill:"black"})],-1),w=d("h1",{class:"text-center text-2xl"},"New Card",-1),v=d("div",{class:"opacity-0"},[d("span",{class:"text-4xl"},"+")],-1),k={class:"nav flex items-center justify-around"},g=x("CARD"),C=x("Bank Account"),N={class:"my-8"},D=d("label",null,"Full Name",-1),V=d("br",null,null,-1),_={class:"my-8"},L=d("label",null,"Card Number",-1),j=d("br",null,null,-1),A={class:"my-8"},F=d("label",null,"Expire Date",-1),P=d("br",null,null,-1),S={key:0,class:"text-red-800 text-center block"},U={key:1,class:"text-red-800 text-center block"},B={key:2,class:"text-red-800 text-center block"},E={key:3,class:"text-red-800 text-center block"},I=d("button",{class:"bg-blue-500 w-full py-4 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}," SAVE ",-1);f.render=function(e,t,a,l,x,f){const M=p("router-link");return r(),n(m,null,[d("div",y,[d(M,{to:"/payment"},{default:s((()=>[h])),_:1}),w,v]),d("div",k,[d(M,{to:"add-card",class:"w-2/4 h-10 text-center py-2 bg-blue-600 text-white"},{default:s((()=>[g])),_:1}),d(M,{to:"add-bank",class:"w-2/4 h-10 border border-2 border-black text-center py-2"},{default:s((()=>[C])),_:1})]),d("form",{onSubmit:t[7]||(t[7]=b((e=>l.addCard()),["prevent"])),class:"text-left"},[d("div",N,[D,V,c(d("input",{type:"text",class:"w-full","onUpdate:modelValue":t[1]||(t[1]=e=>l.card.full_name=e),placeholder:"Name Surname "},null,512),[[u,l.card.full_name]])]),d("div",_,[L,j,c(d("input",{type:"number",class:"w-full","onUpdate:modelValue":t[2]||(t[2]=e=>l.card.number=e),placeholder:"4554 4554 4554 4554",onInput:t[3]||(t[3]=e=>l.card.number.length>16?l.card.number=l.card.number.slice(0,15):l.card.number)},null,544),[[u,l.card.number]])]),d("div",A,[F,P,c(d("input",{type:"text",class:"w-full","onUpdate:modelValue":t[4]||(t[4]=e=>l.card.date=e),placeholder:"mm/yy",maxlength:"5",onKeydown:t[5]||(t[5]=o(((...e)=>l.cc&&l.cc(...e)),["delete"])),onInput:t[6]||(t[6]=e=>2==l.card.date.length?l.card.date+="/":l.card.date)},null,544),[[u,l.card.date]])]),l.errors.empty?(r(),n("span",S,"Please fill all fields")):i("",!0),l.errors.date?(r(),n("span",U,"Please write true date")):i("",!0),l.errors.number?(r(),n("span",B,"Not a valid Visa credit card number!")):i("",!0),l.errors.expired?(r(),n("span",E,"The expiry date is before today's date. Please select a valid expiry date")):i("",!0),I],32)],64)};export default f;