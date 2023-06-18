
let arr =["arkasya","avinabh"]

//arr.push()

// how arr getting acess to push method?

let obj1 ={
    name:"avinabh",
    city:"jamshedpur",
    getinfo:function(){
        console.log(this.name + "from" +this.city) 
    }
}

let obj2 ={
    name:"akshay"
}

obj2.__proto__ = obj1

// same like above array here object will also get some other properties how? 
// incase of function also it gets some properties like: call,apply,bind

// when we create javascript object[array,object,function], javascript engine atomatically attaches
// our object with some hidden property and methods,we can use using dot(.)

// protype=> so bassically attached the object to the original our object,
// thats why we get access to those property and method

//  arr.__proto__.  =>  Array.prototype   >> by using this we also get the hidden property and method
//  arr.__proto__.__proto__  => Object.prototype 
//  arr.__proto__.__proto__.__proto__   => null  =>>this is prototype chain and end will be null


// fun.__proto__     =>> Function.prototype
// fun.__proto__.__proto__  => Object.prototype


// obj.__proto__   =>> this point to this object  Object.prototype
// obj.__proto__.__proto__  => this will be null


