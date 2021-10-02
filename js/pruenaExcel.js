import {XLSX} from 'js/xlsx.mini.js';

let servidor = require('http');

let ser = servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h3>SERVER BASICO</h3>');
    console.log('peticion web');
        
        var url = "campania/campania.xlsx";
        var oReq = new libreriaExcel.XMLHttpRequest();
        oReq.open("GET", url, true);
        oReq.responseType = "arraybuffer";

        oReq.onload = function(e) {
            var arraybuffer = oReq.response;

            /* convert data to binary string */
            var data = new Uint8Array(arraybuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");

            /* Call XLSX */
            var workbook = XLSX.read(bstr, {
                type: "binary"
            });

            /* DO SOMETHING WITH workbook HERE */
            var first_sheet_name = workbook.SheetNames[0];
            /* Get worksheet */
            var worksheet = workbook.Sheets[first_sheet_name];
            console.log(XLSX.utils.sheet_to_json(worksheet, {
                raw: true
            }));
        }

        oReq.send();

    res.end();
})

ser.listen(8080);
console.log('Ejecutando un server local');