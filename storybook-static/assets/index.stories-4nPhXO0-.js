import{f as S}from"./index-BPHu6psy.js";import{m as x,B}from"./HarmonyProvider-UH-hN0kN.js";import{j as a}from"./jsx-runtime-QvZ8i92b.js";import"./index-DZLKizrv.js";import"./index-uubelm5h.js";const k=`import { makeStyles } from "@griffel/react";\r
import { Button } from "harmony-ui";\r
\r
const useClasses = makeStyles({\r
  root: {\r
    backgroundColor: "#fff",\r
    padding: "100px",\r
  },\r
});\r
\r
export const Custom = () => {\r
  const styles = useClasses();\r
  return (\r
    <div className={styles.root}>\r
      <Button primary label="Button" />\r
    </div>\r
  );\r
};`,j=x({root:{backgroundColor:"#fff",padding:"100px"}}),b=()=>{const C=j();return a.jsx("div",{className:C.root,children:a.jsx(B,{primary:!0,label:"Button"})})};b.__docgenInfo={description:"",methods:[],displayName:"Custom"};const N={title:"Example/Button",component:B,parameters:{layout:"centered"},argTypes:{backgroundColor:{control:"color"}},args:{onClick:S()}},r={args:{primary:!0,label:"Button"}},e={args:{label:"Button"}},o={args:{size:"large",label:"Button"}},s={args:{size:"small",label:"Button"}};b.parameters={docs:{source:{code:k}}};var t,n,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var l,c,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,i,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var g,y,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const L=["Primary","Secondary","Large","Small","Custom"];export{b as Custom,o as Large,r as Primary,e as Secondary,s as Small,L as __namedExportsOrder,N as default};
