(window.webpackJsonplabnotes=window.webpackJsonplabnotes||[]).push([[0],{23:function(e,t,n){e.exports=n(48)},28:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(19),i=n.n(c);n(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(3),l=n(4),u=n(6),s=n(5),d=n(7),h=n(9),m=n.n(h),p=m.a.initializeApp({apiKey:"AIzaSyCJQg7CG7ZOGa3_95qwdAl08lZs22v7uiE",authDomain:"notesinreact.firebaseapp.com",databaseURL:"https://notesinreact.firebaseio.com",projectId:"notesinreact",storageBucket:"gs://notesinreact.appspot.com/",messagingSenderId:"328441495789",appId:"1:328441495789:web:1c7f336517167d03"}),f=(n(38),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).handleAuth=function(){var e=new m.a.auth.GoogleAuthProvider;e.addScope("https://www.googleapis.com/auth/plus.login"),p.auth().signInWithPopup(e).then(function(e){return console.log("".concat(e.user.email," ha iniciado sesi\xf3n"))}).catch(function(e){return console.log("Error ".concat(e.code,": ").concat(e.message," "))})},e.handleAuthFace=function(){var e=new m.a.auth.FacebookAuthProvider;e.addScope("public_profile"),p.auth().signInWithPopup(e).then(function(e){return console.log("".concat(e.user.email," ha iniciado sesi\xf3n"))}).catch(function(e){return console.log("Error ".concat(e.code,": ").concat(e.message," "))})},e.handleAuthEmailAndPass=function(){var t=e.textEmail.value,n=e.textPass.value;p.auth().signInWithEmailAndPassword(t,n).then(function(){console.log("login successful")}).catch(function(e){p.auth().createUserWithEmailAndPassword(t,n).then(function(){return console.log("register has been successful")}).catch(function(e){return console.log(e)})})},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"NotesStart"},o.a.createElement("center",null,o.a.createElement("h2",null,"Don\xb4t forget-App"),o.a.createElement("h4",null,"Your personal app notes")),o.a.createElement("img",{src:"https://media.tenor.com/images/3cfad63c022113f11ffb8d164692cef7/tenor.gif",className:"catImage"}),o.a.createElement("form",null,o.a.createElement("input",{required:!0,ref:function(t){e.textEmail=t},type:"text",placeholder:"Type your email"}),o.a.createElement("br",null),o.a.createElement("input",{required:!0,ref:function(t){e.textPass=t},type:"password",placeholder:"Type your password"}),o.a.createElement("br",null),o.a.createElement("input",{onClick:this.handleAuthEmailAndPass,type:"Button",value:"Sign In"}),o.a.createElement("br",null)),o.a.createElement("h3",null,"Login with"),o.a.createElement("input",{onClick:this.handleAuthFace,value:"Facebook",type:"button"}),o.a.createElement("br",null),o.a.createElement("input",{onClick:this.handleAuth,value:"Google",type:"button"}))}}]),t}(a.Component)),g=(n(39),n(40),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleRemove=function(e){window.confirm("\xbfEst\xe1s seguro de que quieres eliminar la nota?")&&n.props.removeNote(e)},n.Update=function(e){var t=prompt("Edit\xa0your\xa0note"),a=new Date,o=a.getDate(),c=a.getMonth()+1,i=a.getHours(),r=a.getMinutes();n.db.child(e).update({noteContent:t,edited:o+"/"+c+"\xa0"+i+":"+r})},n.db=p.database().ref().child("notes"),n.noteId=e.noteId,n.noteContent=e.noteContent,n.date=e.date,n.removeNote=e.removeNote,n.edited=e.edited,n.file=e.file,n.state={notes:[]},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e){var t=this;return o.a.createElement("div",{key:this.noteId,className:"Note"},o.a.createElement("input",{onClick:function(){return t.Update(t.noteId)},id:"edit",type:"image",src:"https://www.pinclipart.com/picdir/big/8-89038_big-image-editing-clip-art-png-download.png"}),o.a.createElement("input",{onClick:function(){return t.handleRemove(t.noteId)},type:"image",src:"https://www.pinclipart.com/picdir/big/240-2407973_tache-logo-of-accord-logo-of-cargill-clipart.png"}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h2",null,this.noteContent),o.a.createElement("p",null,"Created:",this.date),o.a.createElement("p",null,"Edited:",this.edited),o.a.createElement("p",null," ",this.file," "))}}]),t}(a.Component)),v=(n(41),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).addNote=function(){e.props.addNote(e.textInput.value),e.textInput.value="",e.textInput.focus()},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"NoteForm"},o.a.createElement("input",{ref:function(t){e.textInput=t},placeholder:"Write a new note",type:"textarea"}),o.a.createElement("input",{onClick:this.addNote,type:"button",value:"Add Note"}))}}]),t}(a.Component)),b=(n(42),n(43),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).getDataUser=function(){var e=p.auth().currentUser;e.accessToken;null!=e&&(n.name=e.displayName,n.photo=e.photoURL,null==n.photo&&null==n.name&&(n.email=e.email,n.photo="https://media.giphy.com/media/q4wcaEbmboPOE/giphy.gif"))},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.getDataUser()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Welcome"),o.a.createElement("img",{className:"avatar",src:this.photo}),o.a.createElement("h2",null,this.name),o.a.createElement("h2",null,this.email))}}]),t}(a.Component)),E=(a.Component,function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).removeNote=function(t){e.db.child(t).remove()},e.addNote=function(t){var n=new Date,a=n.getDate(),o=n.getMonth()+1,c=n.getHours(),i=n.getMinutes();e.db.push().set({noteContent:t,noteUid:p.auth().currentUser.uid,date:a+"/"+o+" "+c+":"+i,edited:""})},e.logOut=function(){m.a.auth().signOut().then(function(e){return console.log("Se ha cerrado sesion")}).catch(function(e){return console.log("Error ".concat(e.code,": ").concat(e.message," "))})},e.db=p.database().ref().child("notes"),e.state={notes:[]},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=(p.auth().currentUser.uid,this.state.notes);this.db.on("child_added",function(n){t.push({noteId:n.key,noteContent:n.val().noteContent,noteUid:n.val().noteUid,date:n.val().date,edited:n.val().edited}),e.setState({notes:t})}),this.db.on("child_removed",function(n){for(var a=0;a<t.length;a++)t[a].noteId===n.key&&t.splice(a,1);e.setState({notes:t})}),this.db.on("child_changed",function(n){for(var a=0;a<t.length;a++)t[a].noteId===n.key&&(t[a]=n.val());e.setState({notes:t})})}},{key:"render",value:function(){var e=this,t=p.auth().currentUser.uid;return o.a.createElement("div",{className:"notesContainer"},o.a.createElement("div",{className:"notesHeader"},o.a.createElement("h2",{className:"dont"},"Don\xb4t forget-App"),o.a.createElement("p",null,"by Karina"),o.a.createElement("input",{className:"logout",onClick:this.logOut,value:"LogOut",type:"image",src:"https://media.giphy.com/media/3FjuotitkhOffmPamc/giphy.gif",title:"LogOut"})),o.a.createElement("div",{className:"noteStart"},o.a.createElement(b,null)),o.a.createElement("div",{className:"notesBody"},o.a.createElement("h1",null,"My notes"),this.state.notes.map(function(n){if(n.noteUid===t)return o.a.createElement(g,{noteContent:n.noteContent,noteId:n.noteId,date:n.date,edited:n.edited,key:n.noteId,removeNote:e.removeNote,updateNote:e.updateNote})}).reverse()),o.a.createElement("div",{className:"notesFooter"},o.a.createElement(v,{addNote:this.addNote})))}}]),t}(a.Component)),y=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={user:null},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;p.auth().onAuthStateChanged(function(t){t?e.setState({user:t}):e.setState({user:null})})}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.user?o.a.createElement(E,null):o.a.createElement(f,null))}}]),t}(a.Component);n(50);i.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.4cd6e7b6.chunk.js.map