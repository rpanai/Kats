(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2125],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3899:function(e,t,n){"use strict";n.d(t,{Z:function(){return s},T:function(){return p}});var r=n(2122),a=n(7294),i=n(6742),o=n(2263),l=n(907);function s(e){return a.createElement(i.Z,(0,r.Z)({},e,{to:(t=e.to,s=(0,l.zu)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==s?void 0:s.name)?n:"current"]+t),target:"_blank"}));var t,n,s}function p(e){var t,n=null!=(t=e.text)?t:"Example";return a.createElement(s,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},2227:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=n(3899),l=["components"],s={id:"simple_cli",title:"A simple command-line application"},p={unversionedId:"tutorials/basic/your_first_app/simple_cli",id:"version-1.0/tutorials/basic/your_first_app/simple_cli",isDocsHomePage:!1,title:"A simple command-line application",description:"This is a simple Hydra application that prints your configuration.",source:"@site/versioned_docs/version-1.0/tutorials/basic/your_first_app/1_simple_cli.md",sourceDirName:"tutorials/basic/your_first_app",slug:"/tutorials/basic/your_first_app/simple_cli",permalink:"/Kats/docs/1.0/tutorials/basic/your_first_app/simple_cli",editUrl:"https://github.com/facebookresearch/kats/edit/master/website/versioned_docs/version-1.0/tutorials/basic/your_first_app/1_simple_cli.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1611167889,formattedLastUpdatedAt:"1/20/2021",sidebarPosition:1,frontMatter:{id:"simple_cli",title:"A simple command-line application"},sidebar:"version-1.0/docs",previous:{title:"Tutorials intro",permalink:"/Kats/docs/1.0/tutorials/intro"},next:{title:"Specifying a config file",permalink:"/Kats/docs/1.0/tutorials/basic/your_first_app/config_file"}},c=[],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.T,{to:"examples/tutorials/basic/your_first_hydra_app/1_simple_cli/my_app.py",mdxType:"ExampleGithubLink"}),(0,i.kt)("p",null,"This is a simple Hydra application that prints your configuration.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"my_app")," function is a place holder for your code.\nWe will slowly evolve this example to showcase more Hydra features."),(0,i.kt)("p",null,"The examples in this tutorial are available ",(0,i.kt)(o.Z,{to:"examples/tutorials/basic",mdxType:"GithubLink"},"here"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'},'from omegaconf import DictConfig, OmegaConf\nimport hydra\n\n@hydra.main()\ndef my_app(cfg: DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n')),(0,i.kt)("p",null,"In this example, Hydra creates an empty ",(0,i.kt)("inlineCode",{parentName:"p"},"cfg")," object and pass it to the function annotated with ",(0,i.kt)("inlineCode",{parentName:"p"},"@hydra.main"),"."),(0,i.kt)("p",null,"You can add config values via the command line. The ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," indicates that the field is new."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py +db.driver=mysql +db.user=omry +db.password=secret\ndb:\n  driver: mysql\n  user: omry\n  password: secret\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/Kats/docs/1.0/advanced/hydra-command-line-flags"},"Hydra's command line flags")," and\n",(0,i.kt)("a",{parentName:"p",href:"/Kats/docs/1.0/advanced/override_grammar/basic"},"Basic Override Syntax")," for more information about the command line."))}m.isMDXComponent=!0}}]);