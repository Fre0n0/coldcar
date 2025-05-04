function getValue(){
	var optionVal = $('#country-selector').find(":selected").attr('value');
  setText(optionVal);
}

function setText(optionVal){
  switch(optionVal){
    case '0':
        $(".country").show();
    break;
  	case 'algeria':
        $(".country").hide();
        $('#algeria').show();
    break;
    case 'australia':
        $(".country").hide();
        $('#australia').show();
    break;
    case 'bangladesh':
        $(".country").hide();
        $('#bangladesh').show();
    break;
    case 'bielorussia':
        $(".country").hide();
        $("#bielorussia").show();
    break;
  	case 'brasil':
        $(".country").hide();
        $('#brasil').show();
    break;
    case 'central-america-caribbean-island':
        $(".country").hide();
        $('#central-america-caribbean-island').show();
    break;
    case 'croatia':
        $(".country").hide();
        $('#croatia').show();
    break;
    case 'czeck-republic':
        $(".country").hide();
        $('#czeck-republic').show();
    break;
  	case 'germany':
        $(".country").hide();
        $('#germany').show();
    break;
    case 'greece':
        $(".country").hide();
        $('#greece').show();
    break;
    case 'hungary':
        $(".country").hide();
        $('#hungary').show();
    break;
    case 'india':
        $(".country").hide();
        $('#india').show();
    break;
    case 'israele':
        $(".country").hide();
        $('#israele').show();
    break;
    case 'italia':
        $(".country").hide();
        $('#italia').show();
        $('#italia1').show();
    break;
    case 'kuwait':
        $(".country").hide();
        $('#kuwait').show();
    break;
    case 'mexico':
        $(".country").hide();
        $('#mexico').show();
    break;
    case 'nederlands':
        $(".country").hide();
        $('#nederlands').show();
    break;
    case 'poland':
        $(".country").hide();
        $('#poland').show();
    break;
    case 'portugal':
        $(".country").hide();
        $('#portugal').show();
    break;
    case 'romania':
        $(".country").hide();
        $('#romania').show();
    break;
    case 'russia':
        $(".country").hide();
        $('#russia').show();
    break;
    case 'scandinavia':
        $(".country").hide();
        $('#scandinavia').show();
    break;
    case 'slovakia':
        $(".country").hide();
        $('#slovakia').show();
    break;
    case 'south-america':
        $(".country").hide();
        $('#south-america').show();
    break;
    case 'spain':
        $(".country").hide();
        $('#spain').show();
    break;
    case 'sri-lanka':
        $(".country").hide();
        $('#sri-lanka').show();
    break;
    case 'thailand':
        $(".country").hide();
        $('#thailand').show();
    break;
    case 'u-s-a':
        $(".country").hide();
        $('#u-s-a').show();
    break;
    case 'ukraine':
        $(".country").hide();
        $('#ukraine').show();
    break;
    case 'united-kingdom':
        $(".country").hide();
        $('#united-kingdom').show();
    break;
    case 'vietnam':
        $(".country").hide();
        $('#vietnam').show();
    break;
  }
}

$('#country-selector').change(function(){
	getValue();
});