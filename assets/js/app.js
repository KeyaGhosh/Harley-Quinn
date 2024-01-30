	window.onscroll = function () {

	if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {
		jQuery('#navbar').addClass('scrolled');
		// document.getElementById('navbar').classlist.add('scrolled');
	} else {
		jQuery('#navbar').removeClass('scrolled');
	}
}