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
