import{j as s}from"./jsx-runtime-QvZ8i92b.js";import{t as n}from"./HarmonyProvider-UH-hN0kN.js";import"./index-uubelm5h.js";const o=n,t=()=>{const d=Object.keys(o).filter(e=>e.startsWith("strokeWidth"));return s.jsx("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"10px",alignItems:"center"},children:d.map(e=>[s.jsx("div",{children:e},e),s.jsx("div",{style:{borderBottom:`${o[e]} solid black`}},`${e}-value`)])})},c={title:"主题/StrokeWidths",parameters:{docs:{canvas:{sourceState:"none",withToolbar:!1}}}};t.__docgenInfo={description:"",methods:[],displayName:"StrokeWidths"};var r,i,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const strokeWidthTokens = (Object.keys(theme).filter(tokenName => tokenName.startsWith("strokeWidth")) as (keyof StrokeWidthTokens)[]);
  return <div style={{
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gap: "10px",
    alignItems: "center"
  }}>\r
      {strokeWidthTokens.map((strokeWidth: keyof StrokeWidthTokens) => [<div key={strokeWidth}>{strokeWidth}</div>, <div key={\`\${strokeWidth}-value\`} style={{
      borderBottom: \`\${theme[strokeWidth]} solid black\`
    }} />])}\r
    </div>;
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const h=["StrokeWidths"];export{t as StrokeWidths,h as __namedExportsOrder,c as default};
