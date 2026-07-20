export function recommendAITools(
department:string,
role:string
){


const text =
`${department} ${role}`.toLowerCase();



if(
text.includes("marketing") ||
text.includes("content")
){

return {

tools:[

"ChatGPT Plus",

"Canva AI",

"Midjourney"

],

monthlyCost:4500,

reason:
"AI tools for content creation, campaigns and design automation"

};


}



if(
text.includes("finance") ||
text.includes("account")
){

return {

tools:[

"ChatGPT Plus",

"Microsoft Copilot"

],

monthlyCost:3500,

reason:
"AI assistance for reports, analysis and financial automation"

};


}



if(
text.includes("hr") ||
text.includes("human")
){

return {

tools:[

"ChatGPT Plus",

"Notion AI"

],

monthlyCost:3000,

reason:
"AI support for recruitment, documentation and employee management"

};


}



if(
text.includes("developer") ||
text.includes("it") ||
text.includes("software")
){

return {

tools:[

"GitHub Copilot",

"ChatGPT Plus"

],

monthlyCost:4000,

reason:
"AI coding assistance and technical productivity improvement"

};


}



return {


tools:[

"ChatGPT Plus"

],


monthlyCost:2000,


reason:
"General AI productivity improvement"

};


}