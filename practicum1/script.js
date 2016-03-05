$(function() {
	//Navigation
	$('nav').html(
		'<ul><li><a href="dom.html">The DOM</a></li>' +
		'<li><a href="events.html">Events</a></li>' +
		'<li><a href="mechanics.html">Mechanics</a></li>' +
		'<li><a href="history.html">History</a></li>' +
		'<li><a href="support.html">Browser support</a></li>' +
		'<li><a href="coding.html">Coding</a></li></ul>'
	);
	//References
	var $refList = $('<ol>');
	var $refSection = $('<section>', {'class': 'reflist', html: '<h2>References</h2>'}).append($refList);
	var refCount = 0;
	$('article a').each(function() {
		var $link = $(this);
		var url = $link.attr('href');
		if (/^https?:\/\//.test(url)) {
			refCount++;
			$link.attr('id', 'ref' + refCount);
			$backLink = $('<a>', {'class': 'backlink', href: '#ref' + refCount, text: '^', click: function() {
				$link.addClass('highlight', 500).removeClass('highlight', 2000, 'easeInQuart');
			}});
			$refLink = $('<a>', {'class': 'reflink', href: url, text: url});
			$('<li>').append($backLink, ' ', $refLink).appendTo($refList);
		}
	});
	if (refCount > 0)
		$('article').append($refSection);
	//Disable links to the current page
	$('a[href="' + location.pathname.split('/').pop() + '"]').addClass('disabled');
});
