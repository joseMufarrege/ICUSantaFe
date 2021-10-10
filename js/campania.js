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

window.addEventListener("load", function (event) {
 
  $.ajax({
    type: 'GET',
    url: './campania/campania.csv',
    dataType: "text"
  })
    .done(function (campania) {     
      let arrayCampania = csv2json(campania);  
      printCampania(arrayCampania);     

    })
    .fail(function(){
      alert('Hubo un errror al cargar las campañas')
    })

})

function printCampania(objProducto){
    
  objProducto.pop();

  let contenedor = document.getElementById("Campania");
  
  let table = ` <div class="col-lg-12 text-center">
                  <table class="table">
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
}

const csv2json = (str, delimiter = ';') => {
  let titles = str.slice(0, str.indexOf('\r')).split(delimiter);
  titles[1].replace('\r','');
  const rows = str.slice(str.indexOf('\n') + 1).split('\n');
  return rows.map(row => {
    const values = row.split(delimiter);
    return titles.reduce((object, curr, i) => (object[curr] = values[i], object), {})
  });
};