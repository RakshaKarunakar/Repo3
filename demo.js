const Hello =()=>{
    const time= new Date().toLocaleTimeString();
    const date= new Date().toLocaleDateString();
    console.log('Time :' +time+ ',Date:' +date)
}
const change=(name) =>{
    const a="Sujani"
    console.log('My name is:' +name)
}
module.exports = {Hello, change};