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

window.addEventListener("load", function(event) {

})

var ExcelToJSON = function() {

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
  debugger;
  var files = evt.target.files; // FileList object
  var xl2json = new ExcelToJSON(); 
  //files[0].name = "Campania/campania.xlsx"
  xl2json.parseExcel(files[0]);
}

function printCampania(jsonObject){

    let objProducto = JSON.parse(jsonObject);
    
    let contenedor = document.getElementById("Campania");
 
    let table = ` <div class="col-lg-4">
                    <table class=" table">
                      <thead>
                        <tr>
                          <th>Articulos</th>
                          <th>Cantidad</th>				  
                        </tr>
                      </thead>`;

    objProducto.forEach(producto =>{ 
    table += `<tr>
                <td> ${producto.Producto} </td>
                <td>${producto.Cantidad}</td>		
              </tr>`;
  
    });
    table += ` </tbody>
               </table>
               </div>`;

    contenedor.innerHTML = table;

    console.log(contenedor);
}