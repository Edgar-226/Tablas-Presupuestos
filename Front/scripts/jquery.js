$(function () {
    $('#crear-flujo').on('click', function () {
        if ($.isEmptyObject(flujos)) {
            $('#flujoMes').show()
        } else {
            $('#flujoMes').hide()
            $('#listaTituloFlujo').hide()
        }

        $('#popup-flujo').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        return false;
    });
    $('#close-flujo').on('click', function () {
        $('#popup-flujo').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });

    $('#eliminar-flujo').on('click', function () {
        if ($.isEmptyObject(flujos)) {
            alert('No hay nada a eliminar')
        } else {
            $('#popup-eliminar-flujo').fadeIn('slow');
            $('.popup-overlay-eliminar').fadeIn('slow');
            $('.popup-overlay-eliminar').height($(window).height());
            return false;
        }


    });
    $('#close-flujo-eliminar').on('click', function () {
        $('#popup-eliminar-flujo').fadeOut('slow');
        $('.popup-overlay-eliminar').fadeOut('slow');
        return false;
    });

    $('#guardar-presupuesto').on('click', function () {
        $('#popup-presupuesto').fadeIn('slow');
        $('.popup-overlay-presupuesto').fadeIn('slow');
        $('.popup-overlay-presupuesto').height($(window).height());
        return false;

    });
    $('#close-presupuesto').on('click', function () {
        $('#popup-presupuesto').fadeOut('slow');
        $('.popup-overlay-presupuesto').fadeOut('slow');
        return false;
    });

});
