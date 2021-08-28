class File {
    title
    constructor(title){
        this.title = title;
    }
}

class Product {
    producto
    cantidad

    constructor(product,count){
        this.product = product;
        this.count = count;
    }
}

var ExcelToJSON = function() {
    debugger;
    this.parseExcel = function(file) {
      var reader = new FileReader();

      reader.onload = function(e) {
        var data = e.target.result;
        var workbook = XLSX.read(data, {
          type: 'binary'
        });
        workbook.SheetNames.forEach(function(sheetName) {
          // Here is your object
        
          var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
          var json_object = JSON.stringify(XL_row_object);
          console.log(JSON.parse(json_object));
          
          printCampania(json_object);
    
        })
      };

      reader.onerror = function(ex) {
        console.log(ex);
      };

      reader.readAsBinaryString(file);
    };
};

function handleFileSelect(evt) {
  
  var files = evt.target.files; // FileList object
  var xl2json = new ExcelToJSON();
  xl2json.parseExcel("file/campania.xls");
}

function printCampania(jsonObject){

    let objProducto = JSON.parse(jsonObject);
    let tabla = "";
    let div = document.getElementById("Campania");

    objProducto.forEach(producto =>{ 
      console.log("Producto: " + producto.Producto , "Cantidad: " + producto.Cantidad)
    })
    
}