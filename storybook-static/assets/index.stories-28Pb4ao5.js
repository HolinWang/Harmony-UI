import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{r as v}from"./index-uubelm5h.js";import{m as b,t as x}from"./HarmonyProvider-UH-hN0kN.js";const a=x,h=b({durationAnimation:{width:"4px",height:"64px",margin:"0 30px",backgroundColor:"#ccc",position:"relative",animationIterationCount:"infinite",animationName:{from:{transform:"rotate(0)"},to:{transform:"rotate(180deg)"}}},curvesAnimation:{width:"64px",height:"64px",borderRadius:"64px",backgroundColor:"#ccc",position:"relative",animationIterationCount:"infinite",animationName:{from:{left:0},to:{left:"200px"}}}}),i=()=>{const s=h(),[t,r]=v.useState(!1);return e.jsxs("div",{children:[e.jsx("input",{type:"checkbox",id:"durationEnableAnimations",checked:t,onChange:()=>{r(n=>!n)}}),e.jsx("label",{htmlFor:"durationEnableAnimations",children:"Enable animations"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"auto auto 1fr",gap:"10px",alignItems:"center"},children:Object.keys(a).filter(n=>n.startsWith("duration")).map(n=>[e.jsx("div",{children:n},n),e.jsx("div",{children:a[n]},`${n}-value`),e.jsx("div",{children:e.jsx("div",{className:s.durationAnimation,style:{animationDuration:t?a[n]:"0ms"}})},`${n}-demo`)])})]})},o=()=>{const s=h(),[t,r]=v.useState(!1);return e.jsxs("div",{children:[e.jsx("input",{type:"checkbox",id:"curvesEnableAnimations",checked:t,onChange:()=>{r(n=>!n)}}),e.jsx("label",{htmlFor:"curvesEnableAnimations",children:"Enable animations"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"auto auto 1fr",gap:"10px",alignItems:"center"},children:Object.keys(a).filter(n=>n.startsWith("curve")).map(n=>[e.jsx("div",{children:n},n),e.jsx("div",{children:a[n]},`${n}-value`),e.jsx("div",{children:e.jsx("div",{className:s.curvesAnimation,style:{animationDuration:t?"2s":"0s",animationTimingFunction:a[n]}})},`${n}-demo`)])})]})},f={title:"主题/motion",parameters:{docs:{canvas:{sourceState:"none",withToolbar:!1}}}};i.__docgenInfo={description:"",methods:[],displayName:"MotionDuration"};o.__docgenInfo={description:"",methods:[],displayName:"MotionCurves"};var d,l,m;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const classes = useStyles();
  const [animationEnabled, setAnimationEnabled] = React.useState(false);
  return <div>\r
      <input type="checkbox" id="durationEnableAnimations" checked={animationEnabled} onChange={() => {
      setAnimationEnabled(e => !e);
    }} />\r
      <label htmlFor="durationEnableAnimations">Enable animations</label>\r
      <div style={{
      display: "grid",
      gridTemplateColumns: "auto auto 1fr",
      gap: "10px",
      alignItems: "center"
    }}>\r
        {(Object.keys(theme).filter(tokenName => tokenName.startsWith("duration")) as (keyof DurationTokens)[]).map(durationToken => [<div key={durationToken}>{durationToken}</div>, <div key={\`\${durationToken}-value\`}>{theme[durationToken]}</div>, <div key={\`\${durationToken}-demo\`}>\r
            <div className={classes.durationAnimation} style={{
          animationDuration: animationEnabled ? theme[durationToken] : "0ms"
        }} />\r
          </div>])}\r
      </div>\r
    </div>;
}`,...(m=(l=i.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,u,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const classes = useStyles();
  const [animationEnabled, setAnimationEnabled] = React.useState(false);
  return <div>\r
      <input type="checkbox" id="curvesEnableAnimations" checked={animationEnabled} onChange={() => {
      setAnimationEnabled(e => !e);
    }} />\r
      <label htmlFor="curvesEnableAnimations">Enable animations</label>\r
      <div style={{
      display: "grid",
      gridTemplateColumns: "auto auto 1fr",
      gap: "10px",
      alignItems: "center"
    }}>\r
        {(Object.keys(theme).filter(tokenName => tokenName.startsWith("curve")) as (keyof CurveTokens)[]).map(curveToken => [<div key={curveToken}>{curveToken}</div>, <div key={\`\${curveToken}-value\`}>{theme[curveToken]}</div>, <div key={\`\${curveToken}-demo\`}>\r
            <div className={classes.curvesAnimation} style={{
          animationDuration: animationEnabled ? "2s" : "0s",
          animationTimingFunction: theme[curveToken]
        }} />\r
          </div>])}\r
      </div>\r
    </div>;
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const E=["MotionDuration","MotionCurves"];export{o as MotionCurves,i as MotionDuration,E as __namedExportsOrder,f as default};
