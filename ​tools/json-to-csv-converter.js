(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("json-to-csv-converter",{cat:"web",ic:"🗃️",t:"JSON to CSV Converter",d:"Turn a JSON array into CSV that opens in Excel.",
h:`<textarea id="i" placeholder='[{"name":"Rafi","age":25}]'></textarea><div class="res" id="e"></div><textarea id="o" readonly placeholder="CSV appears here"></textarea><button id="cp" type="button">Copy CSV</button>`,
f:function(){
function cell(v){if(v===null||v===undefined)return '';if(typeof v==='object')v=JSON.stringify(v);v=String(v);return /[",\n\r]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v}
function run(){var t=$('i').value.trim();$('e').textContent='';if(!t){$('o').value='';return}try{var d=JSON.parse(t);if(!Array.isArray(d))d=[d];var k=[];d.forEach(function(r){Object.keys(r||{}).forEach(function(x){if(k.indexOf(x)<0)k.push(x)})});$('o').value=[k.map(cell).join(',')].concat(d.map(function(r){return k.map(function(x){return cell((r||{})[x])}).join(',')})).join('\n')}catch(e){$('e').textContent='Invalid JSON: '+e.message}}
$('i').oninput=run;$('cp').onclick=function(){copyText($('o').value,$('cp'))};
},
how:["Paste a JSON array of objects.","The CSV appears.","Copy it and save it as a .csv file."],
faq:[["What JSON works?","An array of objects such as [{\"a\":1},{\"a\":2}]. Each object becomes a row."],["What about nested data?","Nested values are written as JSON text inside the cell."]]});
})(AIO);
