$('#Menu-colecciones').on('click', function() {
    $('#Mobile-colecciones').toggleClass('d-block');
});

$("#search-button").on("click", function() {
    var searchedproduct = $("#query-search").val().trim();
    searchedproduct = searchedproduct.charAt(0).toUpperCase() + searchedproduct.slice(1);
    window.location.replace("/consulta/" + searchedproduct);

});


$("#filtroBrBa")
    .change(function() {
        var filter = "F";
        console.log(filter);

        $("select option:selected").each(function() {
            filter += $(this).text() + " ";
            console.log(filter);
        });
        if (filter == "Precio - Más alto a más bajo") {
            window.location.replace("breakingbad/p1");
        } else if (filter == "Precio - Más bajo a más alto") {
            window.location.replace("/breakingbad/p2");
        } else if (filter == "Alfabético") {
            window.location.replace("/breakingbad/alf");
        } else if (filter == "Relevancia") {
            window.location.replace("/breakingbad/");
        }
    })
    .trigger("change");