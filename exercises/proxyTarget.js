const target = {
  message1: "hello",
  message2: "everyone",
};

const handler2 = {
  set(somethig, prop,value,receiver) {
        if(typeof value === "string"){
            somethig[prop]=value;
        }else{
            console.log("Keys must be a string")
            return somethig[prop]
        }
  },
};

const proxy2 = new Proxy(target, handler2);

proxy2.message2=0;
console.log(proxy2.message2)
console.log(target.message2)

//super helpful proxy links
/*
https://dev.to/wizdomtek/unleashing-the-power-of-javascript-proxy-a-comprehensive-introduction-for-developers-3f4j
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
https://tr.javascript.info/proxy#:~:text=receiver%20%E2%80%93%20if%20the%20property%20is,if%20we%20inherit%20from%20proxy).
https://babeljs.io/docs/learn
*/
