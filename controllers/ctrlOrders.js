$(document).ready(function () {
    listaOrders();
    $("#ordersSort").on("change", function () {
        listaOrders();
    });
})

//general
function ajaxGeneral(a, b, c) {

    var dataConverted = JSON.stringify(b);
    $.ajax({

        url: a,

        type: "post",

        data: {data: dataConverted},

        dataType: "json",

        success: c

    });

}

//functions
function listaOrders() {

    var consulta = new Object();
    consulta.action = 'get_orders';
    consulta.sort = $("#ordersSort option:selected").val();
    var combo = "";
    ajaxGeneral('models/orders.php', consulta, function (r) {

        if (r.response !== false) {
            lista = "";
            $(r.response).each(function (i, objeto) {
                lista += "<li>" + objeto.data + " - " + objeto.nome + "</li>";
            });
            $('#ordersList').html(lista);
        }
    });

}