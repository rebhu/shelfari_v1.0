function openframe(obj)
{
	$(obj).children('#open').css({'visibility':'visible','opacity':'0.0'}).animate({'opacity':'1.0'});
	$(document).dblclick(function() {
			$(obj).children('#open').animate({'opacity':'0.0'}).css({'visibility':'hidden'});
			location.reload(true);
		});
}

function closeframe()
{
	alert("From HTML!");
	$('#open').css({'visibility':'hidden'});
}

function opennew()
{
    $('#new').css({'visibility':'visible','opacity':'0.0'}).animate({'opacity':'1.0'});
    $(document).dblclick(function() {
			$('#new').animate({'opacity':'0.0'}).css({'visibility':'hidden'});
			location.reload(true);
		});
}