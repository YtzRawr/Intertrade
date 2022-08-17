$( document ).ready(function() {
    obtenerProductosSelect("idproducto");
    obtenerProveedoresSelect("idproveedor");


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
  function agregarEntrada(e) {

    value1 = document.getElementById("idproducto").value;
    value2 = document.getElementById("idproveedor").value;
    value3 = document.getElementById("idtipodocumento").value;
    value4 = document.getElementById("idcantidad").value;
    value6 = document.getElementById("idtipoclasificacion").value;
    value5 = document.getElementById("idndocumento").value;
    value7 = document.getElementById("idprecio").value;
    value8 = document.getElementById("idfecha").value;
    if(value1 !="" && value2 !="" && value3 !="" && value4 !="" && value5 !="" && value6 !="" && value7 !="" && value8 !="") {

      $.ajax({
        type: "POST",
        url: "Php/addEntradas.php",
        data: {
          ProductoId : value1,
          ProveedorId : value2,
          txttipodocumento : value3,
          txtcantidad : value4,
          txtdocumento : value5,
          txttipoclasificacion : value6,
          txtprecio : value7,
          txtfecha : value8,
        },
        success: function(result) {

            console.log("respuesta");
            console.log(result);

          Swal.fire({
            icon: 'success',
            title: 'Entrada agregada exitosamente!',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#1a8754',
            cancelButtonColor: '#0d6efd',
            confirmButtonText: 'Seguir Agragando',
            cancelButtonText: 'Ver Entradas'
          }).then((result) => {
            if (result.isConfirmed) {
                $(':input','#formularioregistro')
                .not(':button, :submit, :reset, :hidden')
                .val('');
                // Swal.fire('Saved!', '', 'success')
              } else {
                window.location = "Php/viewentradas.php";
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