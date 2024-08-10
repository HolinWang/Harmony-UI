import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{t as w,a as k,b as p}from"./HarmonyProvider-UH-hN0kN.js";import"./index-uubelm5h.js";const a={light:w,dark:k,highContrast:p},n=({shadow:r,isBrand:t,...s})=>e.jsx("div",{...s,style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",boxShadow:r,minHeight:"2rem",fontFamily:"monospace",fontSize:10,...t&&{backgroundColor:a.light.colorBrandBackground,color:a.light.colorNeutralForegroundOnBrand}},children:r.split("),").map((h,c,g)=>{const d=c<g.length-1?h+")":h;return e.jsx("div",{children:d},d)})}),o=()=>{const r=Object.keys(a.light).filter(t=>t.startsWith("shadow"));return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr 1fr 1fr",gap:"80px",alignItems:"center",marginBottom:"6em"},children:[e.jsx("h3",{children:"Shadow"},"shadow-title"),e.jsx("h3",{children:"Light"},"shadow-title-light"),e.jsx("h3",{children:"Dark"},"shadow-title-dark"),e.jsx("h3",{children:"High Contrast"},"shadow-title-hc"),r.map(t=>{const s=t.indexOf("Brand")>=0;return[e.jsx("div",{children:t},t),e.jsx(n,{shadow:a.light[t],isBrand:s},`${t}-light`),e.jsx(n,{shadow:a.dark[t],isBrand:s},`${t}-dark`),e.jsx(n,{shadow:a.highContrast[t],isBrand:s},`${t}-hc`)]})]})},y={title:"主题/shadows",parameters:{docs:{canvas:{sourceState:"none",withToolbar:!1}}}};o.__docgenInfo={description:"",methods:[],displayName:"Shadows"};var i,l,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const shadowTokens = (Object.keys(theme.light).filter(tokenName => tokenName.startsWith("shadow")) as (keyof ShadowTokens)[]);
  return <div style={{
    display: "grid",
    gridTemplateColumns: "auto 1fr 1fr 1fr",
    gap: "80px",
    alignItems: "center",
    marginBottom: "6em"
  }}>\r
      <h3 key="shadow-title">Shadow</h3>\r
      <h3 key="shadow-title-light">Light</h3>\r
      <h3 key="shadow-title-dark">Dark</h3>\r
      <h3 key="shadow-title-hc">High Contrast</h3>\r
      {shadowTokens.map(shadow => {
      const isBrand = shadow.indexOf("Brand") >= 0;
      return [<div key={shadow}>{shadow}</div>, <ShadowBox key={\`\${shadow}-light\`} shadow={theme.light[shadow]} isBrand={isBrand} />, <ShadowBox key={\`\${shadow}-dark\`} shadow={theme.dark[shadow]} isBrand={isBrand} />, <ShadowBox key={\`\${shadow}-hc\`} shadow={theme.highContrast[shadow]} isBrand={isBrand} />];
    })}\r
    </div>;
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const B=["Shadows"];export{o as Shadows,B as __namedExportsOrder,y as default};
