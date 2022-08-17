

function obtenerProductosSelect(idSelect) {

    $.ajax({
        type: "GET",
        url: "Php/getProductos.php",
        contentType: "application/json",
        dataType: "json",
        data: {
        },
        success: function(data) {
            console.log(data);
            for(let key in data) {
                $("#"+idSelect).append(`<option value="${data[key]["id"]}">${data[key]["modelo"]} ${data[key]["marca"]}</option>`);
            }
        }
      });
}

var productos = {};

function obtenerProductosSelectSalida(idSelect) {

    $.ajax({
        type: "GET",
        url: "Php/getProductos.php",
        contentType: "application/json",
        dataType: "json",
        data: {
        },
        success: function(data) {
            console.log(data);
            for(let key in data) {
                productos[data[key]["id"]] = {
                    precio: parseInt(data[key]["precio"]),
                    cantidad: parseInt(data[key]["cantidad"]),
                    cantidad_reparacion: parseInt(data[key]["cantidad_reparacion"]),
                    cantidad_arriendo: parseInt(data[key]["cantidad_arriendo"]),
                };
                $("#"+idSelect).append(`<option value="${data[key]["id"]}">${data[key]["modelo"]} ${data[key]["marca"]}</option>`);
            }
        }
      });
}

function getDataProducto(id) {
    return productos[id];
}


function obtenerProveedoresSelect(idSelect) {
    
    $.ajax({
        type: "GET",
        url: "Php/getProveedores.php",
        contentType: "application/json",
        dataType: "json",
        data: {
        },
        success: function(data) {
            console.log(data);
            for(let key in data) {
                $("#"+idSelect).append(`<option value="${data[key]["id"]}">${data[key]["nombre"]}</option>`);
            }
        }
      });
}
function obtenerClientesSelect(idSelect) {
    
    $.ajax({
        type: "GET",
        url: "Php/getClientes.php",
        contentType: "application/json",
        dataType: "json",
        data: {
        },
        success: function(data) {
            console.log(data);
            for(let key in data) {
                $("#"+idSelect).append(`<option value="${data[key]["id"]}" ${data[key]["rut"]}>${data[key]["nombre"]}</option>`);
            }
        }
      });
}