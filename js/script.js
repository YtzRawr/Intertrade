
//se ejecutara antes despues de cargar todo lo de mi html
// A $( document ).ready() block.
$( document ).ready(function() {
// asumiendo que la página cuenta con un input[type='text'] con 
// id "rut", la siguiente línea activa el plugin en dicho input.
$("#idrut").rut({
});
});


(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  })()

  // creacion de las variables segun el id del input
  var codigo = document.getElementById('codigo');
  var error = document.getElementById('error');
  error.style.color = 'red';

  function enviarFormulario() {
    console.log('Ingresando producto...');
    //variable mensaes error
    var mensajesError = [];

    if (codigo.value === null || codigo.value === '') {
      mensajesError.push('ingrese un codigo por favor');
    }
    //arreglo para poder mostrar los mensajes seguidos de una coma
    error.innerHTML = mensajesError.join(', ');

    return false;
  }
  ////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////
  //solo numeros codigo, cantidad, numero documento
  function soloNumeros(e) {
    //creacion de las variables a ocupar
    key = e.keycode || e.which;
    teclado = String.fromCharCode(key);
    numeros = "0123456789";
    especiales = "8-37-38-46";//array
    //variable boolean
    teclado_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        teclado_especial=true;
      }
    }
    //si la tecla que estamos capturando se encuentra en numeros
    if(numeros.indexOf(teclado)==-1 && !teclado_especial){
      return false;
    }
  }
  ///////////////////////////////////////////////////////////////////
  //solo numeros precio con punto
  function soloNumerosPunto(e) {
    //creacion de las variables a ocupar
    key = e.keycode || e.which;
    teclado = String.fromCharCode(key);
    numeros = "0123456789";
    especiales = "8-37-38-46";//array
    //variable boolean
    teclado_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        teclado_especial=true;
      }
    }
    //si la tecla que estamos capturando se encuentra en numeros
    if(numeros.indexOf(teclado)==-1 && !teclado_especial){
      return false;
    }
  }
  ///////////////////////////////////////////////////////////////////
  //solo numeros precio con punto
  function soloNumerosMas(e) {
    //creacion de las variables a ocupar
    key = e.keycode || e.which;
    teclado = String.fromCharCode(key);
    numeros = "0123456789+";
    especiales = "8-37-38-46";//array
    //variable boolean
    teclado_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        teclado_especial=true;
      }
    }
    //si la tecla que estamos capturando se encuentra en numeros
    if(numeros.indexOf(teclado)==-1 && !teclado_especial){
      return false;
    }
  }
  ///////////////////////////////////////////////////////////////////
  //solo numeros precio con punto
  function Direccion(e) {
    //creacion de las variables a ocupar
    key = e.keycode || e.which;
    teclado = String.fromCharCode(key);
    direccion = "0123456789#áéíóúabcdefghijklmnñopqrstuvwxyz ";
    especiales = "8-37-38-46";//array
    //variable boolean
    teclado_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        teclado_especial=true;
      }
    }
    //si la tecla que estamos capturando se encuentra en numeros
    if(direccion.indexOf(teclado)==-1 && !teclado_especial){
      return false;
    }
  }
  ///////////////////////////////////////////////////////////////////
  //solo letras y numeros direccion
  function Modelo(e) {
    //creacion de las variables a ocupar
    key = e.keycode || e.which;
    teclado = String.fromCharCode(key);
    modelo = "0123456789#áéíóúabcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ";
    especiales = "8-37-38-46";//array
    //variable boolean
    teclado_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        teclado_especial=true;
      }
    }
    //si la tecla que estamos capturando se encuentra en numeros
    if(modelo.indexOf(teclado)==-1 && !teclado_especial){
      return false;
    }
  }
  /////////////////////////////////////////////////////////////////
  //solo letras
  function soloLetras(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }
  /////////////////////////////////////////////////////////////////
  //solo numeros precio con punto
  function soloNumerosPuntoGuion(e) {
    //creacion de las variables a ocupar
    key = e.keycode || e.which;
    teclado = String.fromCharCode(key);
    numeros = "0123456789.-";
    especiales = "8-37-38-46";//array
    //variable boolean
    teclado_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        teclado_especial=true;
      }
    }
    //si la tecla que estamos capturando se encuentra en numeros
    if(numeros.indexOf(teclado)==-1 && !teclado_especial){
      return false;
    }
  }
  ////////////////////////////////////////////////////////////////////
  //validacion de campos vacios INPUT
  function product(e){

    value1 = document.getElementById("idmodelo").value;
    value2 = document.getElementById("idmarca").value;
    value3 = document.getElementById("iddescripcion").value;
    value4 = document.getElementById("idprecio").value;


    if(value1 !="" && value2 !="" && value3 !="" && value4 !="") {

      $.ajax({
        type: "POST",
        url: "Php/addproduc.php",
        data: {
          txtmodelo : value1,
          txtmarca : value2,
          txtdescripcion : value3,
          txtprecio : value4,
        },
        success: function(result) {
          console.log("respuesta");
          console.log(result);

          Swal.fire({
            icon: 'success',
            title: 'Producto agregado exitosamente!',
            showConfirmButton: true,
            showCancelButton: true,
            cancelButtonColor: '#0d6efd',
            confirmButtonText: 'Seguir agregando productos',
            cancelButtonText: 'Ver productos ingresados'          
          }).then((result) => {
            if(result.isConfirmed){
              // reseteo del formulario
              $(':input','#formularioproduc')
              .not(':button, :submit, :reset, :hidden')
              .val('');
              // Swal.fire('Saved!', '', 'success')
            }else{
              window.location = "Php/viewproductos.php";
            }
            // window.location = "entradas.php";
          })
          console.log("todo ok");
          
        }
      });

    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Error , falla de registro',
        text: 'Debe de ingresar todos los campos vacios',
        footer: '<a href="">Debe de cumplir los campos vacios</a>'
      })
    }
  }
  

  ////////////////////////////////////////////////////////////////////
  //validacion de campos vacios INPUT
  function proveedor(e){

    value1 = document.getElementById("idnombre").value;
    value2 = document.getElementById("iddireccion").value;
    value3 = document.getElementById("idpais").value;
    value4 = document.getElementById("iddescripcion").value;
    value5 = document.getElementById("idtelefono").value;
    value6 = document.getElementById("idarticulos").value;
    value7 = document.getElementById("idarticulo2").value;
    value8 = document.getElementById("idarticulo3").value;

    if(value1 !="" && value2 !="" && value3 !="" && value4 !="" && value5 !="" && value6 !="" && value7 !="" && value8 !="") {

      $.ajax({
        type: "POST",
        url: "Php/addproveedor.php",
        data: {
          txtnombre : value1,
          txtdireccion : value2,
          txtpais : value3,
          txtdescripcion : value4,
          txttelefono : value5,
          txtarticulos : value6,
          txtarticulo2 : value7,
          txtarticulo3 : value8,
        },
        success: function(result) {

          console.log("respuesta");
          console.log(result);

          Swal.fire({
            icon: 'success',
            title: 'Proveedor agregado exitosamente!',
            showConfirmButton: true,
            showCancelButton: true,
            cancelButtonColor: '#0d6efd',
            confirmButtonText: 'Seguir agregando proveedores',
            cancelButtonText: 'Ver proveedores ingresados'
          }).then((result) => {
            if(result.isConfirmed){
              $(':input','#formularioproveedor')
              .not(':button, :submit, :reset, :hidden')
              .val('');
              // Swal.fire('Saved!', '', 'success')
            }else{
              window.location = "Php/viewproveedor.php";

            }
                
          })
          console.log("todo ok");
          
        }
      });

    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Error , falla de registro',
        text: 'Debe de ingresar todos los campos vacios',
        footer: '<a href="">Debe de cumplir los campos vacios</a>'
      })
    }
  }
  ////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////
  //validacion de campos cliente
  function cliente(e){


    value1 = document.getElementById("idnombre").value;
    value2 = document.getElementById("idapellido").value;
    value3 = document.getElementById("idrut").value;
    value4 = document.getElementById("idtelefono").value;
    value5 = document.getElementById("iddireccion").value;
    

    // validacion campos vacios y del largo minimo del rut a ingresar
    if(value1 !="" && value2 !="" &value3 !="" && value4 !="" && value5 !="" && $.validateRut(value3, null, { minimumLength: 9})) {

      
      $.ajax({
        type: "POST",
        url: "Php/validateRut.php",
        data: {
          rut : value3
        },
        success: function(result) {
          result = result.replace(/^\s+|\s+$/g, '');
          if(result == "valido") {
            $.ajax({
              type: "POST",
              url: "Php/addcliente.php",
              data: {
                txtnombre : value1,
                txtapellido : value2,
                txtrut : value3,
                txttelefono : value4,
                txtdireccion : value5,
              },
              success: function() {

                Swal.fire({
                  icon: 'success',
                  title: 'Cliente agregado exitosamente!',
                  showConfirmButton: true,
                  showCancelButton: true,
                  cancelButtonColor: '#0d6efd',
                  confirmButtonText: 'Seguir agregando clientes',
                  cancelButtonText: 'Ver clientes ingresados'
                  }).then((result) => {
                    if(result.isConfirmed){
                      $(':input','#formcliente')
                      .not(':button, :submit, :reset, :hidden')
                      .val('');
                      // Swal.fire('Saved!', '', 'success')
                    }else{
                      window.location = "Php/viewcliente.php";
                    } 
                })
                console.log("todo ok");
                
              }
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error , Rut ya registrado',
              text: 'No pueden haber dos rut iguales para distintos clientes.',
              footer: '<a href="">Intente con otro Rut</a>'
            })
          }
        }
      });
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Error , falla de registro',
        text: 'Debe de ingresar todos los campos vacios',
        footer: '<a href="">Debe de cumplir los campos vacios</a>'
      })
    }

    if(!$.validateRut(value3, null, { minimumLength: 9})) {
      Swal.fire({
        icon: 'error',
        title: 'Rut invalido',
        showConfirmButton: true
      })
      return false;

    }
  }
  

 
  

