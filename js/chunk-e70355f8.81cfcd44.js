(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e70355f8"],{1657:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"taties-title-main"},[e("div",{staticClass:"black-horizontal-separator"}),e("div",{staticClass:"title-container"},[e("h4",{staticClass:"taties-subtitle"},[t._v(t._s(t.subtitle))]),e("h2",{staticClass:"taties-title"},[t._v(" "+t._s(t.title)+" "),this.undisplayDot?t._e():e("span",{staticClass:"red-dot"},[t._v("•")])])]),e("div",{staticClass:"black-horizontal-separator end-separator"})])},n=[],i={name:"TatiesTitleComponent",props:["subtitle","title","undisplayDot"]},r=i,o=(e("b522"),e("2877")),l=Object(o["a"])(r,s,n,!1,null,null,null);a["a"]=l.exports},2249:function(t,a,e){},"72c3":function(t,a,e){"use strict";var s=e("fb8e"),n=e.n(s);n.a},"93a0":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"Contact-page-container"}},[e("TitleBackgroundComponent",{attrs:{background_image:t.path_to_image,background_title:t.background_title_value}}),e("TatiesTitleComponent",{attrs:{subtitle:t.title.subtitle_value,title:t.title.contact_title}}),e("div",{attrs:{id:"Form-and-info-container"}},[e("InfoContactFormComponent"),t._m(0)],1),e("MapComponent")],1)},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"contact-page-tmp-placeholder"},[s("img",{attrs:{src:e("0665"),alt:""}}),s("p",[t._v("Envoyez-nous un email en précisant votre demande !")]),s("a",{attrs:{href:"mailto:lestatiesjazzy@gmail.com",title:"Envoyer un email à l'association"}},[s("button",{staticClass:"black-button black-button-txt"},[t._v("ENVOYER UN EMAIL")])])])}],i=e("89b2"),r=e("1657"),o=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"Info-contact-form-component"}},[e("div",{attrs:{id:"Info-contact-header"}},[e("h3",[t._v("Salut "),e("span",{staticClass:"strawberry-text"},[t._v("les artistes")]),t._v(" !")]),e("p",[t._v("Hé oui, c’est ici que ça se joue!")])]),e("br"),e("div",{attrs:{id:"Info-contact-content"}},[e("p",[t._v("Pour tout renseignements concernants:")]),e("ul",[e("li",[t._v("Les artistes voulant "),e("span",{staticClass:"strawberry-text"},[t._v("se produire")]),t._v(" sur la scène des Taties Jazzy;")]),e("li",[t._v("Les fous de jazz qui aimeraient - seul ou à plusieurs- "),e("span",{staticClass:"strawberry-text"},[t._v("participer"),e("br"),t._v(" à l’une de nos Master Class;")])]),e("li",[t._v("Les amateurs éclairés qui voudraient "),e("span",{staticClass:"strawberry-text"},[t._v("devenir bénévole de l’Asso;")])]),e("li",[t._v("Les professionnels voulant proposer leurs services pour "),e("span",{staticClass:"strawberry-text"},[t._v("animer une Master Class;")])])]),e("p",[t._v("et pour tout autres questions et renseignements;")]),e("p",[e("span",{staticClass:"bold-text"},[t._v(" vous répondrons avec plaisir !")])]),e("p",{staticClass:"line-height"},[t._v("En attendant, Les Taties Jazzy vous souhaite bon vent,")]),e("p",[e("span",{staticClass:"strawberry-text-big"},[t._v("Et qu'ça swing !")])])])])}],c={name:"InfoContactFormComponent"},u=c,v=(e("72c3"),e("2877")),p=Object(v["a"])(u,o,l,!1,null,null,null),d=p.exports,m=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"Map-component"}},[s("div",{attrs:{id:"Location_background"}},[s("div",{attrs:{id:"Contact-informations"}},[s("div",{staticClass:"title-container"},[s("h2",[t._v("CLUB DE JAZZ")])]),s("div",{attrs:{id:"Adresse-and-mail-container"}},[s("div",{staticClass:"flex-container"},[s("div",{staticClass:"ajust-icon"},[s("img",{attrs:{src:e("e425"),alt:""}})]),s("p",[t._v(" 55 Rue Victo Hugo, "),s("span",{staticClass:"bold-text"},[t._v("Fontainebleau")])])]),s("div",{staticClass:"flex-container"},[s("div",{staticClass:"ajust-icon"},[s("img",{attrs:{src:e("d557"),alt:""}})]),s("a",{staticClass:"mail-variation",attrs:{href:"mailto:lestatiesjazzy@gmail.com"}},[t._v("lestatiesjazzy@gmail.com")])])]),s("div",{attrs:{id:"External-link-container"}},[s("div",{staticClass:"flex-container"},[s("img",{staticClass:"company-logo",attrs:{src:e("53b9"),alt:""}}),s("a",{attrs:{href:"https://www.waze.com/ul?ll=48.40930490%2C2.69536190&navigate=yes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Voir l’itinéraire sur Waze")])]),s("div",{staticClass:"flex-container"},[s("img",{staticClass:"company-logo",attrs:{src:e("8bb2"),alt:""}}),s("a",{attrs:{href:"https://goo.gl/maps/aE9pE8tfzpcuimmo9",target:"_blank",rel:"noopener noreferrer"}},[t._v("Voir l’itinéraire sur Google Maps")])])])])])])}],f={name:"MapComponent"},C=f,b=(e("9f62"),Object(v["a"])(C,m,_,!1,null,null,null)),g=b.exports,h={name:"ContactPage",components:{TitleBackgroundComponent:i["a"],TatiesTitleComponent:r["a"],InfoContactFormComponent:d,MapComponent:g},data:function(){return{path_to_image:"contact-page-assets/contact-banner.png",background_title_value:"Contact",title:{contact_title:"Contact",subtitle_value:"Les Taties Jazzy"}}}},z=h,y=(e("e4c5"),Object(v["a"])(z,s,n,!1,null,null,null));a["default"]=y.exports},"9f62":function(t,a,e){"use strict";var s=e("2249"),n=e.n(s);n.a},b522:function(t,a,e){"use strict";var s=e("e471"),n=e.n(s);n.a},dd84:function(t,a,e){},e471:function(t,a,e){},e4c5:function(t,a,e){"use strict";var s=e("dd84"),n=e.n(s);n.a},fb8e:function(t,a,e){}}]);
//# sourceMappingURL=chunk-e70355f8.81cfcd44.js.map