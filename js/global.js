$('input#name-submit').on('click', function() {
	var name = $('input#name').val();
	$.post('db/connect.php', {name: name}, function(data) {
		$('div#name-data').text(data);
		renderHTML(data);
	});
});

function renderHTML(data) {
	var htmlString = '';

	for (var i = 0; i < data.length; i++) {
		htmlString += '<p> Company Name ' + data[i].compName + ' File Name ' + data[i].fileName;
	}
	document.getElementById('name-data').insertAdjacentHTML('beforeend', htmlString);
}
