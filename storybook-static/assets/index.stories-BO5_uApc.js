import{m as t,c as n,w as m,t as l,d as c,a as h,b as x,e as s}from"./HarmonyProvider-UH-hN0kN.js";import{j as e}from"./jsx-runtime-QvZ8i92b.js";import"./index-uubelm5h.js";const v=t({provider:{border:"1px",borderRadius:"5px",padding:"5px"},text:{backgroundColor:s.colorBrandBackground2,color:s.colorBrandForeground2,fontSize:"20px",border:"1px",borderRadius:"5px",padding:"5px"}}),a=()=>{const r=v();return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(n,{className:r.provider,theme:m,children:e.jsx("div",{className:r.text,children:"Web Light Theme"})})}),e.jsx("div",{children:e.jsx(n,{className:r.provider,theme:l,children:e.jsx("div",{className:r.text,children:"Teams Light Theme"})})}),e.jsx("div",{children:e.jsx(n,{className:r.provider,theme:c,children:e.jsx("div",{className:r.text,children:"webDarkTheme"})})}),e.jsx("div",{children:e.jsx(n,{className:r.provider,theme:h,children:e.jsx("div",{className:r.text,children:"Teams Dark Theme"})})}),e.jsx("div",{children:e.jsx(n,{className:r.provider,theme:x,children:e.jsx("div",{className:r.text,children:"teamsHighContrastTheme"})})})]})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};const p=`import { makeStyles } from "@griffel/react";
import {
  HarmonyProvider,
  tokens,
  webLightTheme,
  teamsLightTheme,
  teamsDarkTheme,
  webDarkTheme,
  teamsHighContrastTheme,
} from "harmony-ui";

const useStyles = makeStyles({
  provider: {
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
  text: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    fontSize: "20px",
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
});

export const Default = () => {
  const styles = useStyles();
  return (
    <>
      <div>
        <HarmonyProvider className={styles.provider} theme={webLightTheme}>
          <div className={styles.text}>Web Light Theme</div>
        </HarmonyProvider>
      </div>
      <div>
        <HarmonyProvider className={styles.provider} theme={teamsLightTheme}>
          <div className={styles.text}>Teams Light Theme</div>
        </HarmonyProvider>
      </div>
      <div>
        <HarmonyProvider className={styles.provider} theme={webDarkTheme}>
          <div className={styles.text}>webDarkTheme</div>
        </HarmonyProvider>
      </div>
      <div>
        <HarmonyProvider className={styles.provider} theme={teamsDarkTheme}>
          <div className={styles.text}>Teams Dark Theme</div>
        </HarmonyProvider>
      </div>
      <div>
        <HarmonyProvider
          className={styles.provider}
          theme={teamsHighContrastTheme}
        >
          <div className={styles.text}>teamsHighContrastTheme</div>
        </HarmonyProvider>
      </div>
    </>
  );
};
`,y=`import { makeStyles } from "@griffel/react";\r
import { tokens, HarmonyProvider } from "harmony-ui";\r
\r
const useStyles = makeStyles({\r
  example: {\r
    backgroundColor: tokens.colorBrandBackground2,\r
    color: tokens.colorBrandForeground2,\r
    border: \`5px solid \${tokens.colorBrandStroke1}\`,\r
    borderRadius: "5px",\r
    margin: "5px",\r
  },\r
  text: {\r
    padding: "5px",\r
    fontSize: "18px",\r
  },\r
});\r
\r
export const Nesting = () => {\r
  const styles = useStyles();\r
  return (\r
    <HarmonyProvider>\r
      <div className={styles.example}>\r
        <div className={styles.text}>Web Light Theme using brand tokens</div>\r
        <HarmonyProvider\r
          theme={{\r
            colorBrandStroke1: "red",\r
            colorBrandBackground2: "green",\r
            colorBrandForeground2: "yellow",\r
            // 更多的 theme 属性\r
          }}\r
        >\r
          <Child />\r
        </HarmonyProvider>\r
        <Child />\r
      </div>\r
    </HarmonyProvider>\r
  );\r
};\r
\r
function Child() {\r
  const styles = useStyles();\r
  return (\r
    <div className={styles.example}>\r
      <div className={styles.text}>\r
        Child Nested FishProvider with partial theme\r
      </div>\r
    </div>\r
  );\r
}\r
`,d=t({example:{backgroundColor:s.colorBrandBackground2,color:s.colorBrandForeground2,border:`5px solid ${s.colorBrandStroke1}`,borderRadius:"5px",margin:"5px"},text:{padding:"5px",fontSize:"18px"}}),i=()=>{const r=d();return e.jsx(n,{children:e.jsxs("div",{className:r.example,children:[e.jsx("div",{className:r.text,children:"Web Light Theme using brand tokens"}),e.jsx(n,{theme:{colorBrandStroke1:"red",colorBrandBackground2:"green",colorBrandForeground2:"yellow"},children:e.jsx(o,{})}),e.jsx(o,{})]})})};function o(){const r=d();return e.jsx("div",{className:r.example,children:e.jsx("div",{className:r.text,children:"Child Nested FishProvider with partial theme"})})}i.__docgenInfo={description:"",methods:[],displayName:"Nesting"};const N={title:"组件/HarmonyProvider",component:n};a.parameters={docs:{source:{code:p}}};i.parameters={docs:{description:{story:"HarmonyProvider可以嵌套使用。"}},source:{code:y}};const b=["Default","Nesting"];export{a as Default,i as Nesting,b as __namedExportsOrder,N as default};
