$(document).ready(function() {

    var rnd = Math.random() * (8000 - 2000) + 2000;
    $('#black').css("animation", "loading " + rnd + "ms linear");

    console.log("rnd ====>>>>", rnd)

    setTimeout(function() {
        $('#black').hide();
        $('#page').removeClass('hidden');
    }, rnd);
});