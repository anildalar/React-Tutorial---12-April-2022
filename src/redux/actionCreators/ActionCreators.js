
//Action are js object which must have type property

const { A } = require("../constants")

// Action Creator are function that return actions

let loginActionCreator = ()=>{
    return {
        type:A,
        username:''
    }
}
let registerActionCreator = ()=>{
    return {
        type:'b',
        fname:'',
        lname:'',
        mobno:'',
    }
}



module.exports = { loginActionCreator,registerActionCreator }