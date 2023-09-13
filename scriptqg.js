// let quotesList=[
//     {
//         quote:"wisdom gathered over time I have found that every experinece is a form of",
//         author:"ansel adams"
//     },
//     {
//         quote:"hello",
//         author:"siddhu"
//     },
//     {
//         quote:"hey darling",
//         author:"vinayak"
//     },
//     {
//         quote:"welcome baby",
//         author:"not toady"
//     },
// ]

// let quote=document.getElementById("quote")
// let author=document.getElementById("author")

// function getlocalquotes(){
//     let i=Math.floor(Math.random()*quotesList.length)
//     quote.innerText=quotesList[i].quote
//     author.innerText="--" + " " + quotesList[i].author 
// }
// document.getElementById("getquote").onclick=getlocalquotes






async function quoteAPI(){
    let response=await fetch("https://api.quotable.io/random");
    let quoteele=await response.json()
    quotea.innerText=quoteele.content
    authora.innerText="--" + " " + quoteele.author
}
document.getElementById("getquote").onclick=quoteAPI