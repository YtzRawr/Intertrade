$( document ).ready(function() {
    obtenerProductosSelectSalida("idproducto");
    obtenerClientesSelect("idcliente");

    $("#idproducto").change(function() {
      actualizarDatosProducto();
    });

    $("#idtipoclasificacion").change(function() {
      actualizarDatosProducto();
    });

    function actualizarDatosProducto() {
      var data = getDataProducto($("#idproducto").val());
      console.log($("#idproducto").val());

      $("#idprecio").val(data.precio);

      let cantidad = 0;
      let tipo = $("#idtipoclasificacion").val();

      if(tipo == "C") {
        cantidad = data.cantidad;
      } else if(tipo == "R") {
        cantidad = data.cantidad_reparacion;
      } else if(tipo == "A") {
        cantidad = data.cantidad_arriendo;
      }


      $("#idcantidadDisponible").val(cantidad);
      $("#idcantidad").empty();

      for (i=1; i<=cantidad; i++) {
        $("#idcantidad").append(`<option value="${i}">${i}</option>`);
      }

      $("#idvalor").val(data.precio);
      console.log(data);
    }


    $("#idcantidad").change(function() {
      var total = $("#idcantidad").val() * $("#idprecio").val();
      $("#idvalor").val(total);
    });

    $("#datepicker").datepicker({
        changeYear: true,
        minDate: '-12M',
        maxDate: '+0D',
        dateFormat: "yy/mm/dd",
    })
    .hide()
    .click(function() {
      $(this).hide();
    }).on('change', function (ev) {
       var firstDate = $(this).val();
       console.log(firstDate);

       $("#idfecha").val(firstDate);
    });

    $("#datepickerButton").click(function() {
        console.log("click");
       $("#datepicker").show();
    });

});

  ///////////////////////////////////////////////////////////////////////////////////////
  //validacion campos entradas
  //version de prueba
  function agregarSalida(e) {

    value1 = document.getElementById("idcliente").value;
    value2 = document.getElementById("idproducto").value;
    value3 = document.getElementById("idprecio").value;
    value4 = document.getElementById("idcantidadDisponible").value;
    value6 = document.getElementById("idtipoclasificacion").value;
    value5 = document.getElementById("idcantidad").value;
    value7 = document.getElementById("idvalor").value;
    value8 = document.getElementById("idtipodocumento").value;
    value9 = document.getElementById("idfecha").value;
    if(value1 !="" && value2 !="" && value3 !="" && value4 !="" && value5 !="" && value6 !="" && value7 !="" && value8 !="" && value9 !="") {

      $.ajax({
        type: "POST",
        url: "Php/addSalida.php",
        data: {
          txtcliente : value1,
          txtproducto : value2,
          txtcantidad : value5,   
          txtclasificacion : value6,
          txtvalor : value7,
          txttipodocumento : value8,
          txtfecha : value9, 
        },
        success: function(result) {

            console.log("respuesta");
            console.log(result);

          Swal.fire({
            icon: 'success',
            title: 'Salida realizada correctamente!',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#1a8754',
            cancelButtonColor: '#0d6efd',
            confirmButtonText: 'Seguir realizando salidas',
            cancelButtonText: 'Ver Productos'
          }).then((result) => {
            if (result.isConfirmed) {
                $(':input','#formularioregistro')
                .not(':button, :submit, :reset, :hidden')
                .val('');
                // Swal.fire('Saved!', '', 'success')
              } else {
                window.location = "Php/viewproductos.php";
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