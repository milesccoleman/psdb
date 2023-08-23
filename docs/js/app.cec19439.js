(function(e){function t(t){for(var o,a,r=t[0],c=t[1],l=t[2],h=0,u=[];h<r.length;h++)a=r[h],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&u.push(n[a][0]),n[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],o=!0,r=1;r<i.length;r++){var c=i[r];0!==n[c]&&(o=!1)}o&&(s.splice(t--,1),e=a(a.s=i[0]))}return e}var o={},n={app:0},s=[];function a(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=o,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(i,o,function(t){return e[t]}.bind(null,o));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/psdb/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},17:function(e,t){},18:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,i){"use strict";i.r(t);var o=i("2b0e"),n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("PublicSpeakingDashboard")],1)},s=[],a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"dashboard",attrs:{id:"body"}},[e.loading?e._e():t("p",{attrs:{id:"loadingContainer"}},[e._v("Initializing "),t("br"),t("img",{attrs:{id:"loading",src:"https://media.giphy.com/media/Ky5F5Rhn1WRVZmvE5W/giphy.gif"}}),t("br"),t("span",{attrs:{id:"initialMessage"}},[e._v("(Make sure your webcam is facing you.)")])]),t("h1",{attrs:{id:"mainTitle"}},[t("img",{attrs:{id:"talking",alt:"image of voice waves leaving someone's mouth. Attribution: Speak Icon, by Voysla, 'https://www.flaticon.com/free-icons/speak'",src:"talking.png"}}),e._v(" "+e._s(e.msg)+" ")]),t("p",{attrs:{id:"messageTwo"}},[e._v(" "+e._s(e.msg2)+" ")]),t("p",{attrs:{id:"messageThree"}},[e._v(" "+e._s(e.msg3)+" ")]),t("span",{attrs:{id:"timeHolder"}},[e._v("Time: ")]),t("span",[e.show3?e._e():t("span",{attrs:{id:"dropdownWrapper"}},[t("label",{attrs:{for:"speakingTime",alt:"Choose Desired Speech Length:"}}),e._m(0)]),e.show3?t("button",{attrs:{id:"begin"},on:{click:function(t){e.begin(),e.selectWPM(),e.selectTextEmotion(),e.selectVoiceEmotion(),e.selectFaceEmotion()}}},[e._v("Begin")]):e._e(),e.show3?e._e():t("button",{attrs:{id:"start"},on:{click:e.initiateVoiceControl}},[e._v("Start")]),e.showStop?e._e():t("button",{attrs:{id:"stop"},on:{click:e.stopVoiceControl}},[e._v("Stop")]),e.show3?e._e():t("button",{attrs:{id:"reset"},on:{click:e.reset}},[e._v("Reset")])]),t("br"),t("span",{attrs:{id:"rawData"}}),e.showTime?e._e():t("button",{staticClass:"title",attrs:{id:"timer"}},[e._v(e._s(e.time))]),e._m(1),e.show3?e._e():t("span",{attrs:{id:"volume-visualizer-wrapper"}},[t("button",{attrs:{id:"volume-visualizer"}})]),e.show3?e._e():t("ul",{attrs:{id:"output"}}),t("span",[e.show3?e._e():t("button",{attrs:{id:"dataShowButton"},on:{click:e.unhideData}},[e._v("View Raw Data")]),e.show3?e._e():t("button",{attrs:{id:"dataHideButton"},on:{click:e.hideData}},[e._v("Hide Raw Data")])]),e.showWPM?e._e():t("span",{attrs:{id:"wpmChart"}}),e.showVolume?e._e():t("span",{attrs:{id:"volumeChart"}}),e.showFaceEmotion?e._e():t("span",{attrs:{id:"faceEmotionChart"}}),e.showTextEmotion?e._e():t("span",{attrs:{id:"textEmotionChart"}}),e._m(2)])},r=[function(){var e=this,t=e._self._c;return t("select",{attrs:{name:"speakingTime",id:"speakingTime"}},[t("option",{attrs:{value:"nope",selected:""}},[e._v("Choose Target Speaking Time - (Gives 30 and 15 Sec Warnings Before Selected Time)")]),t("option",{attrs:{value:"60000"}},[e._v("1 Min")]),t("option",{attrs:{value:"180000"}},[e._v("3 Min")]),t("option",{attrs:{value:"300000"}},[e._v("5 Min")]),t("option",{attrs:{value:"600000"}},[e._v("10 Min")]),t("option",{attrs:{value:"900000"}},[e._v("15 Min")]),t("option",{attrs:{value:"1200000"}},[e._v("20 Min")]),t("option",{attrs:{value:"1500000"}},[e._v("25 Min")]),t("option",{attrs:{value:"1800000"}},[e._v("30 Min")]),t("option",{attrs:{value:"2700000"}},[e._v("45 Min")]),t("option",{attrs:{value:"3600000"}},[e._v("60 Min")])])},function(){var e=this,t=e._self._c;return t("span",{attrs:{id:"container"}},[t("div",{staticClass:"video-container",attrs:{id:"video-container"}},[t("video",{attrs:{id:"video",autoplay:"",width:"150",height:"150"}})])])},function(){var e=this,t=e._self._c;return t("footer",{attrs:{id:"footer"}},[t("section",{attrs:{id:"version"}},[e._v("Version 0.1 (Beta)"),t("br"),t("div",{attrs:{id:"bugs"}},[t("section",[e._v("If you find a bug please report it here: "),t("a",{attrs:{href:"https://rowan.co1.qualtrics.com/jfe/form/SV_8AhIsft05UgIUqW"}},[e._v("Bug/Error Report Form")])]),t("br"),e._v(" Known Bugs and Limitations: "),t("br"),t("section",[e._v('- Current version "skips" during voice recognition on mobile (but works correctly on desktop).')]),t("section",[e._v("- App works on Google Chrome (other browsers are currently untested).")]),t("section",[e._v("- User needs to speak for at least 20 seconds before meaningful results are produced.")])])])])}],c=(i("907a"),i("986a"),i("1d02"),i("3c5d"),i("1b3b"),i("3d71"),i("c6e3"),i("14d9"),i("1da6"),i("61cc")),l=i.n(c),d=i("ab39"),h={name:"publicSpeakingDashboard",props:{},data(){return{msg:"Public Speaking Dashboard",msg2:"An AI-powered tool to help you hone your public speaking skills.",msg3:"",wordsSpoken:"START",output:"Recognized Text",workingOutput:"",workingTime:0,grabTimeInterval:"",registerWPMInterval:"",getEmotionStatsInterval:"",initialTime:0,time:"00:00",timeElapsed:0,timeDifference:0,wordCount:0,totalWords:0,wordCountDividedByTime:0,stop:!1,wpm:0,anger:0,fear:0,excitement:0,boredom:0,sadness:0,happiness:0,continuous:!0,show:!0,show2:!0,show3:!0,showStop:!0,loading:!0,show4:!0,showWPM:!0,showTextEmotion:!0,showTime:!0,showData:!0,WPMSelected:!1,WPMColor:"#CBC3E3",textEmotionSelected:!1,textEmotionColor:"#CBC3E3",showVoiceEmotion:!0,voiceEmotionSelected:!1,voiceEmotionColor:"#CBC3E3",showFaceEmotion:!0,faceEmotionSelected:!1,faceEmotionColor:"#CBC3E3",textEmotionData:"",overallDataObject:"",currentDataObject:"",dataNamer:0,time1:!0,time2:!1,placeHolderForTimeCheck:0,volumeCallback:null,volumeInterval:null,volumeValue:0,volumeNumber:0,showVolume:!0,faceEmotionState:"",analyzeFaceInterval:"",renderDataInterval:"",faceAngry:0,faceDisgusted:0,faceFearful:0,faceHappy:0,faceNeutral:0,faceSad:0,faceSurprised:0}},created:function(){console.log("Landing page loaded")},methods:{begin:function(){this.analyzeFace(),window.SpeechRecognition=window.webkitSpeechRecognition||window.SpeechRecognition;let e=new window.SpeechRecognition;e.start(),this.show=!1,this.show3=!1,this.msg2="",this.msg3="Choose a desired speech length. Click start. Then, click stop when finished.",console.log("Dashboard page loaded")},startVolumeMeter:function(){(async()=>{const e=document.getElementById("volume-visualizer");try{const t=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0}}),i=new AudioContext,o=i.createMediaStreamSource(t),n=i.createAnalyser();n.fftSize=512,n.minDecibels=-127,n.maxDecibels=0,n.smoothingTimeConstant=.4,o.connect(n);const s=new Uint8Array(n.frequencyBinCount);this.volumeCallback=()=>{n.getByteFrequencyData(s);let t=0;for(const e of s)t+=e;const i=t/s.length;e.style.setProperty("--volume",100*i/127+"%"),this.volumeNumber=i,this.showVolume=!1}}catch(t){console.error("Failed to initialize volume visualizer, simulating instead...",t);let i=50;this.volumeCallback=()=>{const t=Math.min(Math.max(100*Math.random(),.8*i),1.2*i);i=t,e.style.setProperty("--volume",t+"%")}}null!==this.volumeCallback&&null===this.volumeInterval&&(this.volumeInterval=setInterval(this.volumeCallback,100))})()},setVolume:function(){this.volumeValue=Math.round(this.volumeNumber)},selectWPM:function(){0==this.WPMSelected?(this.msg2="",this.WPMSelected=!0,this.WPMColor="#f48d79",1==this.WPMSelected&&(this.showWPM=!1)):(this.WPMSelected=!1,this.WPMColor="#CBC3E3",0==this.WPMSelected&&(this.showWPM=!0))},selectTextEmotion:function(){0==this.textEmotionSelected?(this.msg2="",this.textEmotionSelected=!0,this.textEmotionColor="#f48d79",1==this.textEmotionSelected&&(this.showTextEmotion=!1)):(this.textEmotionSelected=!1,this.textEmotionColor="#CBC3E3",0==this.textEmotionSelected&&(this.showTextEmotion=!0))},selectVoiceEmotion:function(){0==this.voiceEmotionSelected?(this.msg2="",this.voiceEmotionSelected=!0,this.voiceEmotionColor="#f48d79",1==this.voiceEmotionSelected&&(this.showVoiceEmotion=!1)):(this.voiceEmotionSelected=!1,this.voiceEmotionColor="#CBC3E3",0==this.voiceEmotionSelected&&(this.showVoiceEmotion=!0))},selectFaceEmotion:function(){0==this.faceEmotionSelected?(this.msg2="",this.faceEmotionSelected=!0,this.faceEmotionColor="#f48d79",1==this.faceEmotionSelected&&(this.showFaceEmotion=!1)):(this.faceEmotionSelected=!1,this.faceEmotionColor="#CBC3E3",0==this.faceEmotionSelected&&(this.showFaceEmotion=!0))},initiateVoiceControl:function(){console.log("Voice recognition initiated"),window.SpeechRecognition=window.webkitSpeechRecognition||window.SpeechRecognition,window.SpeechGrammarList=window.SpeechGrammarList||window.webkitSpeechGrammarList,window.SpeechRecognitionEvent=window.SpeechRecognitionEvent||window.webkitSpeechRecognitionEvent;let e="",t=new window.SpeechRecognition;t.interimResults=!0,t.maxAlternatives=10,t.continuous=this.continuous,t.onresult=t=>{let i="";for(let s=t.resultIndex,a=t.results.length;s<a;s++){let a=t.results[s][0].transcript;if(t.results[s].isFinal){if(e+=a,this.workingTime){this.workingOutput=a;var o=document.createElement("li");o.appendChild(document.createTextNode(" "+this.workingTime+": "+this.workingOutput)),document.querySelector("ul").appendChild(o);var n=document.getElementById("output");n.scrollTop=n.scrollHeight,console.log("Detected speech:"+this.workingOutput)}}else i+=a}this.wordsSpoken=e,this.output=this.wordsSpoken+=i,this.wordCount=this.countWords(this.output),this.totalWords=this.wordCount},t.start(),1==this.textEmotionSelected||1==this.WPMSelected||1==this.voiceEmotionSelected||1==this.faceEmotionSelected?(this.msg3="",0==this.stop&&(this.showTime=!1,this.initialTime=Date.now(),this.grabTimeInterval=window.setInterval(this.grabTime,1e3),this.renderDataInterval=window.setInterval(this.renderData,1e3),this.startVolumeMeter(),document.getElementById("container").style.display="inline",this.showStop=!1,this.visualizeData(),console.log("app started")),1==this.stop&&(clearInterval(this.grabTimeInterval),this.showTime=!1,this.continuous=!0,console.log("app stopped"),t.stop(),this.stop=!1)):this.msg2="No input data selected. Try selecting words per minute or another parameter."},analyzeFace:function(){const e=document.querySelector("video");this.loading=!1;const t=document.getElementById("video-container");function i(){var t={audio:!1,video:!0};navigator.mediaDevices.getUserMedia(t).then((function(t){e.srcObject=t})).catch((function(e){console.log(e.name+": "+e.message)}))}Promise.all([d["f"].tinyFaceDetector.loadFromUri("./models"),d["f"].faceLandmark68Net.loadFromUri("./models"),d["f"].faceRecognitionNet.loadFromUri("./models"),d["f"].faceExpressionNet.loadFromUri("./models")]).then(i),e.addEventListener("playing",()=>{console.log("Initializing face recognition");const i=d["b"](e);i.willReadFrequently=!0,t.appendChild(i);const o={width:e.width,height:e.height};d["e"](i,o),this.analyzeFaceInterval=window.setInterval(async()=>{const t=await d["c"](e,new d["a"]).withFaceLandmarks().withFaceExpressions(),n=d["g"](t,o);i.getContext("2d").clearRect(0,0,i.width,i.height);const s=d["g"](t,o);d["d"].drawDetections(i,n);const a=.05;if(d["d"].drawFaceExpressions(i,s,a),n&&Object.keys(n).length>0){const e=n.expressions,t=Math.max(...Object.values(e)),i=Object.keys(e).filter(i=>e[i]===t);this.faceEmotionState='"'+i[0]+'"',0==this.loading&&(this.loading=!0)}this.faceAngry=Math.round(100*t.expressions.angry),this.faceDisgusted=Math.round(100*t.expressions.disgusted),this.faceFearful=Math.round(100*t.expressions.fearful),this.faceHappy=Math.round(100*t.expressions.happy),this.faceNeutral=Math.round(100*t.expressions.neutral),this.faceSad=Math.round(100*t.expressions.sad),this.faceSurprised=Math.round(100*t.expressions.surprised)},500)})},grabTime:function(){if(1==this.time1){this.timeDifference=Date.now()-this.initialTime,this.dataNamer=this.timeDifference;var e=document.getElementById("timeHolder");e.innerHTML=this.dataNamer}if(0==this.time1){this.timeDifference=Date.now()-this.initialTime;var t=parseInt(document.getElementById("timeHolder").innerHTML);this.timeDifference=this.timeDifference+t,this.time2=!0}var i=r(this.timeDifference);document.getElementById("timer").innerHTML=""+i,this.workingTime=i,console.log(i),this.timeElapsed=this.timeDifference,this.placeHolderForTimeCheck=this.timeDifference;var o=document.getElementById("speakingTime").value,n=o-15e3,s=o-3e4,a=document.getElementById("timer");function r(e){var t=Math.floor(e/1e3),i=Math.floor(t/60),o=t-60*i;return o<10&&(o="0"+o),i<10&&(i="0"+i),i+":"+o}this.placeHolderForTimeCheck>=s&&(a.style.backgroundColor="green"),this.placeHolderForTimeCheck>=n&&(a.style.backgroundColor="yellow"),this.placeHolderForTimeCheck>=o&&(a.style.backgroundColor="red")},countWords:function(e){const t=e.split(" ");return t.filter(e=>""!==e).length},registerWPM:function(){this.wpm=Math.round(this.wordCount/(this.timeElapsed/1e3)*60)},getEmotionStats:function(){const e=i("1da6");e.apiKey="hL7rOIhghKLZtrI6w04cFjxVvAOHQ7BiNhjMLAVnMPw",e.emotion(this.workingOutput,"en").then(e=>{let t=JSON.parse(e);this.textEmotionData=e.slice(1),this.anger=Math.round(100*t.emotion.Angry),this.fear=Math.round(100*t.emotion.Fear),this.excitement=Math.round(100*t.emotion.Excited),this.boredom=Math.round(100*t.emotion.Bored),this.sadness=Math.round(100*t.emotion.Sad),this.happiness=Math.round(100*t.emotion.Happy)}).catch(e=>{console.log(e)})},stopVoiceControl:function(){if(this.continuous=!1,this.stop=!0,this.time1=!1,1==this.time2){this.dataNamer=this.timeDifference;var e=document.getElementById("timeHolder");e.innerHTML=this.dataNamer}null!==this.volumeInterval&&(clearInterval(this.volumeInterval),this.volumeInterval=null),this.visualizeData(),this.initiateVoiceControl(),clearInterval(this.grabTimeInterval),clearInterval(this.renderDataInterval)},reset:function(){location.reload()},unhideData:function(){document.getElementById("rawData").style.display="inline-block"},hideData:function(){document.getElementById("rawData").style.display="none"},renderData:function(){const e=new Promise((e,t)=>{this.setVolume(),this.getEmotionStats(),this.registerWPM(),e("Data rendered!"),t("Data render failed")});e.then(()=>{this.constructJSON(),this.visualizeData(),console.log("JSON and charts constructed")})},constructJSON:function(){this.currentDataObject='{"time":"'+this.workingTime+'","wpm":"'+this.wpm+'","content":"'+this.workingOutput+'","Angry":'+this.anger+',"Fear":'+this.fear+',"Excited":'+this.excitement+',"Bored":'+this.boredom+',"Sad":'+this.sadness+',"Happy":'+this.happiness+',"volume":'+this.volumeValue+',"faceAnger":'+this.faceAngry+',"faceDisgust":'+this.faceDisgusted+',"faceFear":'+this.faceFearful+',"faceHappiness":'+this.faceHappy+',"faceNeutral":'+this.faceNeutral+',"faceSadness":'+this.faceSad+',"faceSurprise":'+this.faceSurprised+"},";var e=document.getElementById("rawData");e.innerHTML+=this.currentDataObject,this.overallDataObject=document.getElementById("rawData").innerHTML},visualizeData:function(){var e=document.getElementById("rawData").innerHTML,t="["+e.slice(0,-1)+"]",i=JSON.parse(t);if(0==this.showWPM){let e={x:[],y:[],mode:"lines",name:"Words Per Minute",line:{color:"#f48d79",width:2}};i.forEach((function(t){e.x.push(t["time"]),e.y.push(t["wpm"])}));var o={paper_bgcolor:"#222831",plot_bgcolor:"#222831",title:{text:"Rate of Speech",font:{family:"Arial, sans-serif",size:20,color:"#71c68b"},xref:"paper",automargin:!0,x:.5,xanchor:"center",y:.88,yanchor:"top"},autosize:!0,xaxis:{tickfont:{size:18,color:"#71c68b"},tickcolor:"#36454f",title:{text:"Time",font:{family:"Arial, sans-serif",size:18,color:"#71c68b"}}},yaxis:{margin:{autoexpand:!0},automargin:!0,tickfont:{size:18,color:"#71c68b"},tickcolor:"#36454f",title:{text:"Words Per Minute",font:{family:"Arial, sans-serif",size:18,color:"#71c68b"}}}},n=document.getElementById("wpmChart");l.a.newPlot(n,[e],o)}if(0==this.showVolume){let e={x:[],y:[],mode:"lines",name:"Volume",line:{color:"#40D0E0",width:2}};i.forEach((function(t){e.x.push(t["time"]),e.y.push(t["volume"])}));var s={paper_bgcolor:"#222831",plot_bgcolor:"#222831",title:{text:"Voice Projection",font:{family:"Arial, sans-serif",size:20,color:"#c300ff"},xref:"paper",automargin:!0,x:.5,xanchor:"center",y:.88,yanchor:"top"},autosize:!0,xaxis:{tickfont:{size:18,color:"#c300ff"},tickcolor:"#c300ff",title:{text:"Time",font:{family:"Arial, sans-serif",size:18,color:"#c300ff"}}},yaxis:{margin:{autoexpand:!0},automargin:!0,tickfont:{size:18,color:"#c300ff"},tickcolor:"#c300ff",title:{text:"Volume",font:{family:"Arial, sans-serif",size:18,color:"#c300ff"}}}},a=document.getElementById("volumeChart");l.a.newPlot(a,[e],s)}if(1==this.faceEmotionSelected){let e={x:[],y:[],mode:"lines",name:"Anger",line:{color:"#ff6961",width:2}},t={x:[],y:[],mode:"lines",name:"Fear",line:{color:"#fdfd96",width:2}},o={x:[],y:[],mode:"lines",name:"Surprise",line:{color:"#ffb347",width:2}},n={x:[],y:[],mode:"lines",name:"Neutral",line:{color:"#cfcfc4",width:2}},s={x:[],y:[],mode:"lines",name:"Sadness",line:{color:"#85A1F2",width:2}},a={x:[],y:[],mode:"lines",name:"Happiness",line:{color:"#77dd77",width:2}};i.forEach((function(i){e.x.push(i["time"]),e.y.push(i["faceAnger"]),t.x.push(i["time"]),t.y.push(i["faceFear"]),o.x.push(i["time"]),o.y.push(i["faceSurprise"]),n.x.push(i["time"]),n.y.push(i["faceNeutral"]),s.x.push(i["time"]),s.y.push(i["faceSadness"]),a.x.push(i["time"]),a.y.push(i["faceHappiness"])}));var r={paper_bgcolor:"#222831",plot_bgcolor:"#222831",title:{text:"  Expressions in Face",font:{family:"Arial, sans-serif",size:20,color:"#f48d79"},xref:"paper",automargin:!0,x:.6,xanchor:"center",y:.88,yanchor:"top"},autosize:!0,xaxis:{tickfont:{size:16,color:"#f48d79"},tickcolor:"#f48d79",title:{text:"Time",font:{family:"Arial, sans-serif",size:18,color:"#f48d79"}}},yaxis:{margin:{autoexpand:!0},automargin:!0,tickfont:{size:16,color:"#f48d79"},tickcolor:"#f48d79",title:{text:"Expressions",font:{family:"Arial, sans-serif",size:18,color:"#f48d79"}}}},c=document.getElementById("faceEmotionChart");l.a.newPlot(c,[e,t,o,n,s,a],r)}if(1==this.textEmotionSelected){let e={x:[],y:[],mode:"lines",name:"Anger",line:{color:"#ff6961",width:2}},t={x:[],y:[],mode:"lines",name:"Fear",line:{color:"#fdfd96",width:2}},o={x:[],y:[],mode:"lines",name:"Excitement",line:{color:"#ffb347",width:2}},n={x:[],y:[],mode:"lines",name:"Boredom",line:{color:"#cfcfc4",width:2}},s={x:[],y:[],mode:"lines",name:"Sadness",line:{color:"#85A1F2",width:2}},a={x:[],y:[],mode:"lines",name:"Happiness",line:{color:"#77dd77",width:2}};i.forEach((function(i){e.x.push(i["time"]),e.y.push(i["Angry"]),t.x.push(i["time"]),t.y.push(i["Fear"]),o.x.push(i["time"]),o.y.push(i["Excited"]),n.x.push(i["time"]),n.y.push(i["Bored"]),s.x.push(i["time"]),s.y.push(i["Sad"]),a.x.push(i["time"]),a.y.push(i["Happy"])}));var d={paper_bgcolor:"#222831",plot_bgcolor:"#222831",title:{text:"  Emotions in Words Spoken",font:{family:"Arial, sans-serif",size:20,color:"#fdfd96"},xref:"paper",automargin:!0,x:.6,xanchor:"center",y:.88,yanchor:"top"},autosize:!0,xaxis:{tickfont:{size:16,color:"#fdfd96"},tickcolor:"#36454f",title:{text:"Time",font:{family:"Arial, sans-serif",size:18,color:"#fdfd96"}}},yaxis:{margin:{autoexpand:!0},automargin:!0,tickfont:{size:16,color:"#fdfd96"},tickcolor:"#fdfd96",title:{text:"Emotions",font:{family:"Arial, sans-serif",size:18,color:"#fdfd96"}}}},h=document.getElementById("textEmotionChart");l.a.newPlot(h,[e,t,o,n,s,a],d)}}}},u=h,m=(i("95c5"),i("2877")),f=Object(m["a"])(u,a,r,!1,null,"b6958cb4",null),p=f.exports,g={name:"App",components:{PublicSpeakingDashboard:p}},w=g,v=(i("9452"),Object(m["a"])(w,n,s,!1,null,null,null)),y=v.exports;o["a"].config.productionTip=!1,new o["a"]({render:e=>e(y)}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},9452:function(e,t,i){"use strict";i("c3e9")},"95c5":function(e,t,i){"use strict";i("b71b")},b71b:function(e,t,i){},c3e9:function(e,t,i){}});
//# sourceMappingURL=app.cec19439.js.map