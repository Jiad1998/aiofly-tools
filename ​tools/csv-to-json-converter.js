(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("csv-to-json-converter",{cat:"web",ic:"📑",t:"CSV to JSON Converter",d:"Convert CSV rows into a JSON array. The first row is used as keys.",
h:`<textarea id="i" placeholder="name,age\\nRafi,25\\nAmina,30"></textarea><textarea id="o" readonly placeholder="JSON appears here"></textarea><button id="cp" type="button">Copy JSON</button>`,
f:function(){
function parse(t){var r=[],row=[],f='',q=false;for(var i=0;i<t.length;i++){var c=t[i];if(q){if(c==='"'){if(t[i+1]==='"'){f+='"';i++}else q=false}else f+=c}else if(c==='"')q=true;else if(c===','){row.push(f);f=''}else if(c==='\n'||c==='\r'){if(c==='\r'&&t[i+1]==='\n')i++;row.push(f);f='';r.push(row);row=[]}else f+=c}if(f!==''||row.length){row.push(f);r.push(row)}return r.filter(function(x){return x.join('')!==''})}
function run(){var t=$('i').value;if(!t.trim()){$('o').value='';return}var r=parse(t),h=r[0],o=r.slice(1).map(function(x){var j={};h.forEach(function(k,i){var v=x[i]===undefined?'':x[i];j[k]=v!==''&&!isNaN(v)?Number(v):v});return j});$('o').value=JSON.stringify(o,null,2)}
$('i').oninput=run;$('cp').onclick=function(){copyText($('o').value,$('cp'))};
},
how:["Paste your CSV. The first row must be the column names.","The JSON appears at once.","Copy it."],
faq:[["Does it handle commas inside quotes?","Yes. Values in double quotes can contain commas."],["Are numbers kept as numbers?","Yes. Values that look like numbers become JSON numbers."]]});
})(AIO);
