(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("http-status-codes",{cat:"dev",ic:"🌐",t:"HTTP Status Codes Lookup",d:"Look up what HTTP status codes like 404 and 500 mean.",
h:`<input id="q" placeholder="Search a code or word, for example 404"><div id="o"></div>`,
f:function(){
var L=[[200, "OK", "The request worked."], [201, "Created", "A new item was created."], [204, "No Content", "Success with nothing to return."], [301, "Moved Permanently", "The page has a new permanent address."], [302, "Found", "Temporary redirect."], [304, "Not Modified", "Use your saved copy."], [400, "Bad Request", "The request was wrong or incomplete."], [401, "Unauthorized", "Login is needed."], [403, "Forbidden", "You are not allowed to see this."], [404, "Not Found", "The page does not exist."], [405, "Method Not Allowed", "This action is not allowed here."], [408, "Request Timeout", "The server waited too long."], [409, "Conflict", "The request clashes with the current state."], [410, "Gone", "The page was removed for good."], [418, "I am a teapot", "A joke status from an old April Fools spec."], [429, "Too Many Requests", "You sent too many requests. Slow down."], [500, "Internal Server Error", "Something broke on the server."], [501, "Not Implemented", "The server does not support this."], [502, "Bad Gateway", "A server in between got a bad reply."], [503, "Service Unavailable", "The server is busy or down."], [504, "Gateway Timeout", "A server in between was too slow."]];
function run(){var q=$('q').value.toLowerCase().trim();$('o').innerHTML=L.filter(function(x){return !q||(x[0]+' '+x[1]+' '+x[2]).toLowerCase().indexOf(q)>-1}).map(function(x){return '<div class="box"><b>'+x[0]+' '+esc(x[1])+'</b><br>'+esc(x[2])+'</div>'}).join('')||'No match.'}
$('q').oninput=run;run();
},
how:["Type a code or a word.","Read the meaning.","Use it to fix website errors."],
faq:[["What does 404 mean?","The page was not found."],["What is the difference between 401 and 403?","401 means you must log in. 403 means you are logged in but not allowed."]]});
})(AIO);
