(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{202:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(2)),i=r(n(325));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t={};return e.modal?t={color:"#CD295A"}:e.chatBox&&(t={color:"silver"}),o.default.createElement("div",{style:t,className:i.default.loader})}},325:function(e,t){e.exports={loader:"UBmsktTD6us6IP-6aYec5",load6:"_3S2CE-OEuu4vdmsJlqdcwr",round:"_2qdnMg3AezWSYwmeeap8bJ"}},326:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getUserData=void 0;var o,i=n(83),r=(o=i)&&o.__esModule?o:{default:o};t.getUserData=function(){return new Promise(function(e,t){r.default.database().ref("usersData/"+r.default.auth().currentUser.uid).on("value",function(t){e(t.val())},function(e){t(e)})})}},327:function(e,t){e.exports={ProfileWindow:"_3q3ooEeiiniA9NGcPxYf9b",profileWindow:"_3q3ooEeiiniA9NGcPxYf9b",ProfileWindow__Main:"_2z1u6qHRs8DI-qF8IJnbBH",profileWindowMain:"_2z1u6qHRs8DI-qF8IJnbBH",ProfileWindow__Main__ProfilePic:"_3ucP5JqZyAd8k_iZllVNuR",profileWindowMainProfilePic:"_3ucP5JqZyAd8k_iZllVNuR",ProfileWindow__Main__Verified:"_27yGWKFlZdeY2x5HCchRzz",profileWindowMainVerified:"_27yGWKFlZdeY2x5HCchRzz",ProfileWindow__Main__MetaData:"MIpCcOtJhwvaEjim3fBFg",profileWindowMainMetaData:"MIpCcOtJhwvaEjim3fBFg",Highlight:"PCd4gyh8eysWuuJoSnfLL",highlight:"PCd4gyh8eysWuuJoSnfLL",MobileBorder:"Uqjwgv8SwUsQuHXC9hZaf",mobileBorder:"Uqjwgv8SwUsQuHXC9hZaf"}},572:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=c(o),r=n(122),a=n(326),l=c(n(202)),u=c(n(83)),f=c(n(327));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y=function(e){function t(){var e,n,o,i,r,a,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,f=new Array(u),c=0;c<u;c++)f[c]=arguments[c];return o=this,n=!(i=(e=p(t)).call.apply(e,[this].concat(f)))||"object"!==s(i)&&"function"!=typeof i?m(o):i,r=m(m(n)),l={userProfile:{},loading:!0},(a="state")in r?Object.defineProperty(r,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[a]=l,n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,o.Component),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;u.default.auth().onAuthStateChanged(function(t){t&&(0,a.getUserData)().then(function(t){e.setState({userProfile:t,loading:!1})}).catch(function(e){})})}},{key:"componentWillUnmount",value:function(){this.setState({userProfile:{}})}},{key:"render",value:function(){var e=i.default.createElement(l.default,null);return this.state.loading||(e=i.default.createElement("div",{className:f.default.ProfileWindow__Main},i.default.createElement("div",{className:f.default.ProfileWindow__Main__ProfilePic},i.default.createElement("img",{src:this.state.userProfile.photoURL,alt:this.state.userProfile.displayName+"-profile"}),i.default.createElement("img",{style:{display:this.props.isVerified?"block":"none"},className:f.default.ProfileWindow__Main__Verified,src:"https://www.continent8.com/wp-content/uploads/2017/10/tick-icon.png",alt:"verified-check"}),i.default.createElement("span",null," ",this.state.userProfile.displayName," ")),i.default.createElement("div",{className:f.default.ProfileWindow__Main__MetaData},i.default.createElement("span",{className:f.default.Highlight}," Description "),i.default.createElement("div",{className:f.default.MobileBorder},i.default.createElement("span",null," ",this.state.userProfile.metaData," "))))),i.default.createElement("div",{className:f.default.ProfileWindow},e)}}])&&d(n.prototype,r),c&&d(n,c),t}();t.default=(0,r.connect)(function(e){})(y)}}]);
//# sourceMappingURL=3.js.map