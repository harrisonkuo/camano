/* $(document).ready(function(){
    $("button").click(function(){
        var api = "https://www.materialsproject.org/rest/v2/materials/Fe2O3/vasp?API_KEY=zVXtvNkIlbhra9ux"
        $.ajax({
            type: 'GET',
            url: api,
            crossDomain: true,
            datatype: "jsonp",
            success: function (data) {
                console.log(data)
                alert("Hi");
            }
        });
    });
}); */
$(function() {
  var Tags = [
    "Water",
    "Stainless Steel",
    "Platinum",
    "Leather",
    "Maple Wood"
  ];
  $( "#textinput" ).autocomplete({
    source: Tags
  });
});
