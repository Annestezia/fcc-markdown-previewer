(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){e.exports=t(18)},16:function(e,n,t){},17:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(5),i=t.n(r),s=(t(16),t(6)),h=t(7),l=t(9),d=t(8),c=t(1),u=t(10),m=t(2),p=t.n(m),k="# Ok, heres markup example `h1`\n## Let me tell you a bit about the previewer `h2`\n> You can see \n- editor window (you can change text or delete completely and write your own stuff) and \n- compiled version (you can see result there).\nLinks\n--\nYou can create a link like this\n[Google](https://google.com)\nor a re-usable thing \n\n[Marked]: https://github.com/markedjs/marked/\n\nNow  everytime you write [marked]  in square brackets, you get the link, kinda cool huh?)\n\nMarkdown style for   h1\n==\nand h2 , pick  you  fav  =)\n--\n\n_List name in italic github style_\n- item 1\n- **bold item 2**\n- item 3\n\n\n## `About code`\n`alert('Hola'); \\\\ inline code`\n\n```\nthis\nis a code block\n()=>{}\n```\n\n\n<pre>mycode and evenmore code\nand  on another line yep</pre>\nAnd an _image_ , just like a _link_ but with an exclamation mark in front\n\n![img](http://personal.psu.edu/xqz5228/jpg.jpg)\n\n>> ***W. Shakespeare***\n\n> <pre>When most I wink, then do mine eyes best see,\nFor all the day they view things unrespected;\nBut when I sleep, in dreams they look on thee,\nAnd darkly bright are bright in dark directed.\nThen thou, whose shadow shadows doth make bright,\nHow would thy shadow's form form happy show\nTo the clear day with thy much clearer light,\nWhen to unseeing eyes thy shade shines so!\nHow would, I say, mine eyes be blessed made\nBy looking on thee in the living day, \nWhen in dead night thy fair imperfect shade\nThrough heavy sleep on sightless eyes doth stay!\nAll days are nights to see till I see thee,\nAnd nights bright days when dreams do show thee me.</pre><br />\n\nAnd  heres is [marked.js docs](https://marked.js.org/) in case you want more details.\n",y=(t(17),function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(l.a)(this,Object(d.a)(n).call(this,e))).state={value:k},t.handleChange=t.handleChange.bind(Object(c.a)(t)),t.createMarkup=t.createMarkup.bind(Object(c.a)(t)),t}return Object(u.a)(n,e),Object(h.a)(n,[{key:"componentDidMount",value:function(){}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"createMarkup",value:function(e){return p.a.setOptions({breaks:!0}),{__html:p()(e)}}},{key:"render",value:function(){return o.a.createElement("div",{class:"wrap"},o.a.createElement("div",{class:"app_title"},o.a.createElement("h1",null,"Markdown Previewer")),o.a.createElement(w,{value:this.state.value,onChange:this.handleChange}),o.a.createElement(g,{markup:this.createMarkup(this.state.value)}),o.a.createElement("footer",null,"by Annestezia"))}}]),n}(a.Component)),w=function(e){return o.a.createElement("textarea",{id:"editor",classNames:"column",name:"editor",cols:"1",rows:"15",onChange:e.onChange},e.value)},g=function(e){return o.a.createElement("div",{id:"preview",className:"column",dangerouslySetInnerHTML:e.markup})},b=y;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.7cfdf4e9.chunk.js.map