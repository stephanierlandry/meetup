(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],{181:function(e,t,n){e.exports=n(383)},186:function(e,t,n){},364:function(e,t,n){},365:function(e,t,n){},383:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(54),s=n.n(i),o=(n(186),n(8)),c=n(13),l=n(10),u=n(9),h=n(11),m=n(158),d=n.n(m),p=(n(364),n(365),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){!1===e.state.showDetails?e.setState({showDetails:!0}):e.setState({showDetails:!1})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state.showDetails,n=this.props.event,a=new Date(new Date(n.local_date).toDateString()),i=n.rsvp_limit,s=i-n.yes_rsvp_count,o=[{name:"people coming",value:n.yes_rsvp_count},{name:"free slots",value:s}],c=["#ED1C40","#0555BB"];return r.a.createElement("div",{className:"event"},r.a.createElement("div",{className:"eventOverview"},r.a.createElement("h1",{className:"eventName"},n.name),r.a.createElement("p",{className:"eventDate"},a.toUTCString()),r.a.createElement("p",{className:"eventVenue"},n.venue?n.venue.name:null),t&&r.a.createElement("button",{className:" detail-btn btn",onClick:function(){return e.handleShowDetails()}},"hide details"),!t&&r.a.createElement("button",{className:"detail-btn btn",onClick:function(){return e.handleShowDetails()}},"show details")),t&&r.a.createElement("div",{className:"eventDetails"},r.a.createElement("p",{className:"eventDescription",dangerouslySetInnerHTML:{__html:n.description}}),r.a.createElement("a",{href:n.link,target:"_blank",className:"eventLink"},"More Info"),r.a.createElement("div",{className:"rsvp-chart"},i>0&&r.a.createElement(h.f,{height:250,width:300},r.a.createElement(h.e,{width:400,height:250},r.a.createElement(h.d,{dataKey:"value",startAngle:180,endAngle:0,data:o,cx:200,cy:200,fill:"#8884d8",label:!0},o.map((function(e,t){return r.a.createElement(h.b,{key:"cell-".concat(t),fill:c[t]})}))),r.a.createElement(h.i,null),r.a.createElement(h.c,{verticalAlign:"bottom",align:"center"})))),r.a.createElement("div",{className:"no-rsvp"},!i&&r.a.createElement("p",{className:"no-rsvp-container"},n.yes_rsvp_count," people have RSVPd"))))}}]),n}(a.Component)),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("ul",{className:"EventList"},r.a.createElement("div",{className:"units-row"},this.props.events.map((function(e){return r.a.createElement("div",{className:"event-container unit-50",tabIndex:"0"},r.a.createElement("li",{key:e.id},r.a.createElement(p,{event:e})))}))),r.a.createElement("div",{className:"units-row"}))}}]),n}(a.Component),v=n(25),g=n.n(v),b=n(58),w=[{created:1563825339e3,duration:9e6,id:"263370107",name:"Microservices mit dem MicroProfile 3.x",rsvp_limit:80,date_in_series_pattern:!1,status:"upcoming",time:15669252e5,local_date:"2020-08-26",local_time:"19:00",updated:1563825339e3,utc_offset:72e5,waitlist_count:79,yes_rsvp_count:80,venue:{id:26266792,name:"adesso AG",lat:53.54524230957031,lon:9.950983047485352,repinned:!1,address_1:"Gro\xdfe Elbstra\xdfe 36",city:"Hamburg",country:"de",localized_country_name:"Deutschland"},group:{created:1387402147e3,name:"Java User Group Hamburg",id:11500362,join_mode:"open",lat:53.54999923706055,lon:10,urlname:"jug-hamburg",who:"Mitglieder",localized_location:"Hamburg, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/jug-hamburg/events/263370107/",description:"<p>Wer Microservices in Java entwickeln m\xf6chte, muss nicht zwangsl\xe4ufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verf\xfcgbar sind und bez\xfcglich ihrer Funktionalit\xe4t stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) f\xfcr die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu z\xe4hlen die Unterst\xfctzung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. F\xfcr den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gew\xe4hlt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte f\xfcr Enterprise Java und Systemintegration unterst\xfctzt er seine Kunden \xfcberwiegend durch Entwicklung, Reviews oder die Durchf\xfchrung von Schulungen. Thilo ist (Co-)Autor mehrerer B\xfccher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelm\xe4\xdfig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups.</p> ",visibility:"public",member_pay_fee:!1},{created:1596623415e3,duration:288e5,id:"272375614",name:"Classic Southern Route - Classic Sunday Ride ",rsvp_limit:0,date_in_series_pattern:!1,status:"upcoming",time:159696e7,local_date:"2020-08-24",local_time:"10:00",updated:15966294e5,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:12,venue:{id:26920287,name:"Perlacher Forst",lat:48.089385986328125,lon:11.574456214904785,repinned:!0,city:"Perlacher Forst",country:"de",localized_country_name:"Germany"},is_online_event:!1,group:{created:1431768559e3,name:"Munich Social Cyclists",id:18601603,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"munich-social-cyclists",who:"Social cyclists",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/munich-social-cyclists/events/272375614/",description:'<p>Due to some very disruptive construction works on most of the S-Bahn lines, we\'re going to meet at an unusual place this Sunday.</p> <p>Please be at the north entrance to Perlacher Forest before 10:00 am.</p> <p><a href=n"https://goo.gl/maps/D5SMxvihM9n1CKQe6n" class=n"linkifiedn">https://goo.gl/maps/D5SMxvihM9n1CKQe6</a></p> <p>Or, meet me at Deutsches Museum - Ludwigsbr\xfccke side, where the Giant Propeller use to be - at 0930.</p> <p>Route planning is still in progress, but you can assume this will be approx. 60 km with only moderate hills.</p> <p>There will be 3 biergarden stops - all of which are well known to the group.</p> <p>The route might look something like this:<br/><a href=n"https://www.bikemap.net/en/r/6934667n" class=n"linkifiedn">https://www.bikemap.net/en/r/6934667</a></p> <p>As usual, please read the n"What we\'re aboutn" page, and be sure you have checked over your bike before Sunday.</p> ',visibility:"public",member_pay_fee:!1},{created:1596547466e3,duration:612e5,id:"272355710",name:"Auf die Gotzenalm \xfcber alten vergessenen Steig am K\xf6nigssee",rsvp_limit:3,date_in_series_pattern:!1,status:"upcoming",time:15968592e5,local_date:"2020-08-24",local_time:"06:00",updated:1596547466e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:1,venue:{id:23387472,name:" U-Bahn Giselastra\xdfe",lat:48.155120849609375,lon:11.586016654968262,repinned:!1,address_1:"Giselastra\xdfe",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},is_online_event:!1,group:{created:1594909978e3,name:"Raus aus der Komfortzone - Trau Dich",id:33972537,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Raus-aus-der-Komfortzone-Trau-Dich",who:"Die Mutigen",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Raus-aus-der-Komfortzone-Trau-Dich/events/272355710/",description:"<p>Hallo Ihr Mutigen.<br/>Ich gehe am Samstag von Sch\xf6nau am K\xf6nigssee auf die Gotzenalm. Jedoch m\xf6chte ich hier einen alten vergessenen Steig wieder finden, der am Ostufer des K\xf6nigssees entlang zur behelfsm\xe4\xdfigen Schiffs Haltestelle \u201eKessel\u201c f\xfchrt. Von dort aus geht der Reitsteig dann zur Alm auf der wir eine gem\xfctliche Brotzeit einnehmen k\xf6nnen. Je nach Fitness und Lust k\xf6nnen von hier aus auch noch andere Ziele angesteuert werden. Wer also Lust hat auf dieses Abenteuer ist herzlich eingeladen mitzufahren.<br/>Voraussetzungen:<br/>Gutes Schuhwerk, Trittsicherheit, gute Kondition und Lust auf ein wenig Abenteuer. Ich habe im Auto noch drei Pl\xe4tze frei.<br/>LG euer Toni</p> ",visibility:"public",member_pay_fee:!1}],y=n(59),_=n.n(y);function k(e){return E.apply(this,arguments)}function E(){return(E=Object(b.a)(g.a.mark((function e(t){var n,a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,j();case 4:if(!(n=e.sent)){e.next=11;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,_.a.get(a);case 9:return r=e.sent,e.abrupt("return",r.data);case 11:return e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t,n){return O.apply(this,arguments)}function O(){return(O=Object(b.a)(g.a.mark((function e(t,n,a){var r,i,s,o,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",w);case 2:if(navigator.onLine){e.next=5;break}return r=localStorage.getItem("lastEvents"),e.abrupt("return",JSON.parse(r));case 5:return e.next=7,j();case 7:if(!(i=e.sent)){e.next=20;break}return s="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+i,t&&n&&(s+="&lat="+t+"&lon="+n),a&&(s+="&page"+a),t&&n&&a&&(s+="&lat="+t+"&lon="+n+"&page="+a),e.next=15,_.a.get(s);case 15:return o=e.sent,c=o.data.events,console.log("events"),c.length&&localStorage.setItem("lastEvents",JSON.stringify(c)),e.abrupt("return",c);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){var e=localStorage.getItem("access_token");if(!e){var t=new URLSearchParams(window.location.search).get("code");return t?x("get",t):(window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=o3q8bebq46en36kbff39jm0srr&response_type=code&redirect_uri=https://stephanierlandry.github.io/meetup/",null)}var n=localStorage.getItem("last_saved_time");return e&&Date.now()-n<36e5?e:x("renew",localStorage.getItem("refresh_token"))}function x(e,t){return z.apply(this,arguments)}function z(){return(z=Object(b.a)(g.a.mark((function e(t,n){var a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?a="https://dqcf31qq59.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n:"renew"===t&&(a="https://dqcf31qq59.execute-api.eu-central-1.amazonaws.com/dev/api/refresh/"+n),e.next=3,_.a.get(a);case 3:return r=e.sent,localStorage.setItem("access_token",r.data.access_token),localStorage.setItem("refresh_token",r.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",r.data.access_token);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Alert"},r.a.createElement("p",{className:"error",style:this.getStyle()},this.props.text))}}]),n}(a.Component),D=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(N),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(N),T=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(N),M=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],infoText:"",offlineText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({query:n}),k(n).then((function(t){e.setState({suggestions:t}),n&&0===t.length?e.setState({infoText:"We can not find the city you are looking for. Please try another city"}):e.setState({infoText:""})}))},e.handleItemClicked=function(t,n,a){e.setState({query:t,suggestions:[]}),e.props.updateEvents(n,a)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,placeholder:"Where do you want to meet up?"}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)}))),r.a.createElement(D,{text:this.state.infoText}))}}]),n}(a.Component),A=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32,infoText:""},e.handleNumberChange=function(t){var n=t.target.value;e.setState({numberOfEvents:n}),e.props.updateEvents(null,null,n),n<1?e.setState({infoText:"Number must be 1 or greater"}):e.setState({infoText:""})},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"numberOfEvents"},r.a.createElement("input",{type:"text",value:this.state.numberOfEvents,onChange:this.handleNumberChange,className:"number",placeholder:"number of events"}),r.a.createElement(C,{text:this.state.infoText}))}}]),n}(a.Component),I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={events:[],page:null,lat:null,lon:null,offlineText:""},e.updateEvents=function(t,n,a){navigator.onLine?e.setState({offlineText:""}):e.setState({offlineText:"You are offline! Reconnect to get new events."}),t&&n?S(t,n,e.state.page).then((function(a){return e.setState({events:a,lat:t,lon:n})})):a?S(e.state.lat,e.state.lon,a).then((function(t){return e.setState({events:t,page:a})})):S(e.state.lat,e.state.lon,e.state.page).then((function(t){return e.setState({events:t})}))},e.countEventsOnADate=function(t){for(var n=0,a=0;a<e.state.events.length;a+=1)e.state.events[a].local_date===t&&(n+=1);return n},e.getData=function(){for(var t=[],n=d()(),a=0;a<7;a+=1){n.add(1,"days");var r=n.format("YYYY-MM-DD"),i=e.countEventsOnADate(r);t.push({date:r,number:i})}return t},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;S().then((function(t){return e.setState({events:t})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("img",{src:"https://auth-server-dev-serverlessdeploymentbucket-1gfi6z6bkqcu9.s3.eu-central-1.amazonaws.com/logo--script.svg",alt:"Meetup Logo in pink",width:"400px",className:"logo"}),r.a.createElement(M,{updateEvents:this.updateEvents}),r.a.createElement(T,{text:this.state.offlineText}),r.a.createElement(A,{updateEvents:this.updateEvents,numberOfEvents:this.state.events.length,lat:this.state.lat,lon:this.state.lon}),r.a.createElement("div",{className:"units-row"},r.a.createElement("div",{className:"unit-10"}),r.a.createElement("div",{className:"unit-80"},r.a.createElement(h.f,{height:300},r.a.createElement(h.h,{margin:{top:20,right:20,bottom:20,left:20},className:"chart-container"},r.a.createElement(h.a,null),r.a.createElement(h.j,{type:"category",dataKey:"date",name:"date"}),r.a.createElement(h.k,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),r.a.createElement(h.i,{cursor:{strokeDasharray:"3 3"}}),r.a.createElement(h.g,{data:this.getData(),fill:"#0555BB"})))),r.a.createElement("div",{className:"unit-10"})),r.a.createElement(f,{events:this.state.events}))}}]),n}(a.Component),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var W=n(159);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetup",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meetup","/service-worker.js");G?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):P(t,e)}))}}(),W.config("b7ca45bf3b8d463b83dcbd650930a97b").install()}},[[181,1,2]]]);
//# sourceMappingURL=main.851086ae.chunk.js.map