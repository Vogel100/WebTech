$(function() {
	$('nav').html(
		'<ul><li><a href="dom.html">The DOM</a></li>' +
		'<li><a href="events.html">Events</a></li>' +
		'<li><a href="mechanics.html">Mechanics</a></li>' +
		'<li><a href="history.html">History</a></li>' +
		'<li><a href="support.html">Browser support</a></li>' +
		'<li><a href="coding.html">Coding</a></li></ul>'
	);
	/*UNFINISHED
	var $refList = $('<ol>');
	var $refSection = $('<section>', {'class': 'reflist', html: '<h2>References</h2>'}).append($refList);
	var refCount = 0;
	$('a').each(function() {
		var $link = $(this);
		var url = $link.attr('href');
		if (/^https?:\/\//.test(url)) {
			refCount++;
			$link.attr('id', 'ref' + refCount);
			$backlink = $('<a>', {'class': 'backlink', href: '#ref' +refCount, text:'^'}).click()
			$refList.append('<li><a class="backlink" href="#ref' + refCount + 
				'">^</a> <a class="reflink" href="' + url + '">' + url +'</a></li>');
		}
	});
	if (refCount > 0)
		$('article').append($refSection);
	*/
});
