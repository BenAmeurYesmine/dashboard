/*! For license information please see src_content_pages_Components_Cards_index_tsx.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkirh_dashboard=self.webpackChunkirh_dashboard||[]).push([["src_content_pages_Components_Cards_index_tsx"],{"./src/components/Footer/index.tsx":function(e,t,a){a.r(t);var n=a("./node_modules/react/jsx-runtime.js"),r=a("./node_modules/@mui/material/Box/Box.js"),i=a("./node_modules/@mui/material/Container/Container.js"),s=a("./node_modules/@mui/material/Typography/Typography.js"),o=a("./node_modules/@mui/material/Link/Link.js"),d=a("./node_modules/@mui/material/styles/styled.js"),l=function(){return l=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l.apply(this,arguments)},u=(0,d.default)(r.default)((function(e){var t=e.theme;return"\n        border-radius: 0;\n        margin: ".concat(t.spacing(3)," 0;\n")}));t.default=function(){return(0,n.jsx)(u,{children:(0,n.jsx)(i.default,l({maxWidth:"lg"},{children:(0,n.jsxs)(r.default,l({py:3,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between"},{children:[(0,n.jsx)(r.default,{children:(0,n.jsx)(s.default,l({variant:"subtitle1"},{children:"© 2021 - Tokyo Free White React Admin Dashboard"}))}),(0,n.jsxs)(s.default,l({sx:{pt:{xs:2,md:0}},variant:"subtitle1"},{children:["Crafted by ",(0,n.jsx)(o.default,l({href:"https://bloomui.com",target:"_blank",rel:"noopener noreferrer"},{children:"BloomUI.com"}))]}))]}))}))})}},"./src/components/PageTitle/index.tsx":function(e,t,a){a.r(t);var n=a("./node_modules/react/jsx-runtime.js"),r=a("./node_modules/prop-types/index.js"),i=a.n(r),s=a("./node_modules/@mui/icons-material/AddTwoTone.js"),o=a("./node_modules/@mui/material/Grid/Grid.js"),d=a("./node_modules/@mui/material/Typography/Typography.js"),l=a("./node_modules/@mui/material/Button/Button.js"),u=function(){return u=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u.apply(this,arguments)},c=function(e){var t=e.heading,a=void 0===t?"":t,r=e.subHeading,i=void 0===r?"":r,c=e.docs,m=void 0===c?"":c,h=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(e,["heading","subHeading","docs"]);return(0,n.jsxs)(o.default,u({container:!0,justifyContent:"space-between",alignItems:"center"},h,{children:[(0,n.jsxs)(o.default,u({item:!0},{children:[(0,n.jsx)(d.default,u({variant:"h3",component:"h3",gutterBottom:!0},{children:a})),(0,n.jsx)(d.default,u({variant:"subtitle2"},{children:i}))]})),(0,n.jsx)(o.default,u({item:!0},{children:(0,n.jsxs)(l.default,u({href:m,target:"_blank",rel:"noopener noreferrer",sx:{mt:{xs:2,md:0}},variant:"contained",startIcon:(0,n.jsx)(s.default,{fontSize:"small"})},{children:[a," Documentation"]}))}))]}))};c.propTypes={heading:i().string,subHeading:i().string,docs:i().string},t.default=c},"./src/components/PageTitleWrapper/index.tsx":function(e,t,a){a.r(t);var n=a("./node_modules/react/jsx-runtime.js"),r=a("./node_modules/@mui/material/Container/Container.js"),i=a("./node_modules/prop-types/index.js"),s=a.n(i),o=a("./node_modules/@mui/material/styles/styled.js"),d=a("./node_modules/@mui/material/Box/Box.js"),l=function(){return l=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l.apply(this,arguments)},u=(0,o.default)(d.default)((function(e){var t=e.theme;return"\n        padding: ".concat(t.spacing(4,0),";\n")})),c=function(e){var t=e.children;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(u,{children:(0,n.jsx)(r.default,l({maxWidth:"lg"},{children:t}))})})};c.propTypes={children:s().node.isRequired},t.default=c},"./src/content/pages/Components/Cards/index.tsx":function(e,t,a){a.r(t);var n=a("./node_modules/react/jsx-runtime.js"),r=a("./node_modules/react-helmet-async/lib/index.module.js"),i=a("./node_modules/react/index.js"),s=a("./src/components/PageTitle/index.tsx"),o=a("./src/components/PageTitleWrapper/index.tsx"),d=a("./node_modules/@mui/material/Container/Container.js"),l=a("./node_modules/@mui/material/Grid/Grid.js"),u=a("./node_modules/@mui/material/Card/Card.js"),c=a("./node_modules/@mui/material/CardHeader/CardHeader.js"),m=a("./node_modules/@mui/material/Divider/Divider.js"),h=a("./node_modules/@mui/material/CardContent/CardContent.js"),f=a("./src/components/Footer/index.tsx"),p=a("./node_modules/@mui/material/CardActions/CardActions.js"),x=a("./node_modules/@mui/material/styles/styled.js"),j=a("./node_modules/@mui/material/Button/Button.js"),g=a("./node_modules/@mui/material/Box/Box.js"),y=a("./node_modules/@mui/material/CardMedia/CardMedia.js"),b=a("./node_modules/@mui/material/Collapse/Collapse.js"),v=a("./node_modules/@mui/material/Avatar/Avatar.js"),_=a("./node_modules/@mui/material/IconButton/IconButton.js"),C=a("./node_modules/@mui/material/Typography/Typography.js"),O=a("./node_modules/@mui/material/colors/red.js"),w=a("./node_modules/@mui/icons-material/Favorite.js"),k=a("./node_modules/@mui/icons-material/Share.js"),T=a("./node_modules/@mui/icons-material/ExpandMore.js"),B=a("./node_modules/@mui/icons-material/MoreVert.js"),P=function(){return P=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},P.apply(this,arguments)},A=(0,x.default)((function(e){e.expand;var t=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(e,["expand"]);return(0,n.jsx)(_.default,P({},t))}))((function(e){var t=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}})),S=(0,n.jsx)(g.default,P({component:"span",sx:{display:"inline-block",mx:"2px",transform:"scale(0.8)"}},{children:"•"}));t.default=function(){var e=(0,i.useState)(!1),t=e[0],a=e[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Helmet,{children:(0,n.jsx)("title",{children:"Cards - Components"})}),(0,n.jsx)(o.default,{children:(0,n.jsx)(s.default,{heading:"Cards",subHeading:"Cards contain content and actions about a single subject.",docs:"https://material-ui.com/components/cards/"})}),(0,n.jsx)(d.default,P({maxWidth:"lg"},{children:(0,n.jsxs)(l.default,P({container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3},{children:[(0,n.jsx)(l.default,P({item:!0,xs:12},{children:(0,n.jsxs)(u.default,{children:[(0,n.jsx)(c.default,{title:"Basic"}),(0,n.jsx)(m.default,{}),(0,n.jsx)(h.default,{children:(0,n.jsxs)(u.default,P({sx:{minWidth:275}},{children:[(0,n.jsxs)(h.default,{children:[(0,n.jsx)(C.default,P({sx:{fontSize:14},color:"text.secondary",gutterBottom:!0},{children:"Word of the Day"})),(0,n.jsxs)(C.default,P({variant:"h5",component:"div"},{children:["be",S,"nev",S,"o",S,"lent"]})),(0,n.jsx)(C.default,P({sx:{mb:1.5},color:"text.secondary"},{children:"adjective"})),(0,n.jsxs)(C.default,P({variant:"body2"},{children:["well meaning and kindly.",(0,n.jsx)("br",{}),'"a benevolent smile"']}))]}),(0,n.jsx)(p.default,{children:(0,n.jsx)(j.default,P({size:"small"},{children:"Learn More"}))})]}))})]})})),(0,n.jsx)(l.default,P({item:!0,xs:12},{children:(0,n.jsxs)(u.default,{children:[(0,n.jsx)(c.default,{title:"Complex Example"}),(0,n.jsx)(m.default,{}),(0,n.jsx)(h.default,{children:(0,n.jsxs)(u.default,P({sx:{maxWidth:345}},{children:[(0,n.jsx)(c.default,{avatar:(0,n.jsx)(v.default,P({sx:{bgcolor:O.default[500]},"aria-label":"recipe"},{children:"R"})),action:(0,n.jsx)(_.default,P({"aria-label":"settings"},{children:(0,n.jsx)(B.default,{})})),title:"Shrimp and Chorizo Paella",subheader:"September 14, 2016"}),(0,n.jsx)(y.default,{sx:{height:0,paddingTop:"56.25%"},image:"/static/images/placeholders/covers/1.jpg",title:"Paella dish"}),(0,n.jsx)(h.default,{children:(0,n.jsx)(C.default,P({variant:"body2",color:"text.secondary"},{children:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."}))}),(0,n.jsxs)(p.default,P({disableSpacing:!0},{children:[(0,n.jsx)(_.default,P({"aria-label":"add to favorites"},{children:(0,n.jsx)(w.default,{})})),(0,n.jsx)(_.default,P({"aria-label":"share"},{children:(0,n.jsx)(k.default,{})})),(0,n.jsx)(A,P({expand:t,onClick:function(){a(!t)},"aria-expanded":t,"aria-label":"show more"},{children:(0,n.jsx)(T.default,{})}))]})),(0,n.jsx)(b.default,P({in:t,timeout:"auto",unmountOnExit:!0},{children:(0,n.jsxs)(h.default,{children:[(0,n.jsx)(C.default,P({paragraph:!0},{children:"Method:"})),(0,n.jsx)(C.default,P({paragraph:!0},{children:"Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."})),(0,n.jsx)(C.default,P({paragraph:!0},{children:"Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."})),(0,n.jsx)(C.default,P({paragraph:!0},{children:"Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)"})),(0,n.jsx)(C.default,{children:"Set aside off of the heat to let rest for 10 minutes, and then serve."})]})}))]}))})]})})),(0,n.jsx)(l.default,P({item:!0,xs:12},{children:(0,n.jsxs)(u.default,{children:[(0,n.jsx)(c.default,{title:"Media"}),(0,n.jsx)(m.default,{}),(0,n.jsx)(h.default,{children:(0,n.jsxs)(u.default,P({sx:{maxWidth:345}},{children:[(0,n.jsx)(y.default,{sx:{height:140},image:"/static/images/placeholders/covers/6.jpg",title:"Contemplative Reptile"}),(0,n.jsxs)(h.default,{children:[(0,n.jsx)(C.default,P({gutterBottom:!0,variant:"h5",component:"div"},{children:"Lizard"})),(0,n.jsx)(C.default,P({variant:"body2",color:"text.secondary"},{children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}))]}),(0,n.jsxs)(p.default,{children:[(0,n.jsx)(j.default,P({size:"small"},{children:"Share"})),(0,n.jsx)(j.default,P({size:"small"},{children:"Learn More"}))]})]}))})]})}))]}))})),(0,n.jsx)(f.default,{})]})}}}]);
//# sourceMappingURL=src_content_pages_Components_Cards_index_tsx.js.map