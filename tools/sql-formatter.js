(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("sql-formatter",{cat:"dev",ic:"🗄️",t:"SQL Formatter",d:"Format SQL queries so they are easy to read. Keywords are put in capitals.",
h:`<textarea id="i" placeholder="select id,name from users where age>18 and city="Dubai" order by name"></textarea><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){var kw=['select','from','where','group by','order by','having','limit','left join','right join','inner join','outer join','join','union all','union','insert into','values','update','set','delete from','on','and','or','as','distinct','in','not','null','like','between','case','when','then','else','end','asc','desc','create table','alter table','drop table'];
var t=s.replace(/\s+/g,' ').trim();kw.forEach(function(k){t=t.replace(new RegExp('\\b'+k.replace(/ /g,'\\s+')+'\\b','gi'),k.toUpperCase())});
['SELECT','FROM','WHERE','GROUP BY','ORDER BY','HAVING','LIMIT','LEFT JOIN','RIGHT JOIN','INNER JOIN','OUTER JOIN','UNION ALL','UNION','VALUES','SET'].forEach(function(k){t=t.replace(new RegExp('\\s*\\b'+k.replace(/ /g,'\\s')+'\\b','g'),'\n'+k)});
t=t.replace(/\bJOIN\b/g,function(m,o,str){return /(LEFT|RIGHT|INNER|OUTER)\s$/.test(str.slice(0,o))?m:'\nJOIN'}).replace(/\n(LEFT|RIGHT|INNER|OUTER) \nJOIN/g,'\n$1 JOIN');
t=t.replace(/\s+(AND|OR)\s/g,'\n  $1 ').replace(/,\s*/g,', ');return t.trim()})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Paste your SQL query.","The formatted query appears below.","Press <b>Copy result</b>."],
faq:[["Which SQL types work?","It works for common MySQL, PostgreSQL and SQL Server queries. Very complex queries may need small manual edits."],["Does it change my query?","Only spacing, line breaks and capital letters for keywords. The meaning stays the same."]]});
})(AIO);
