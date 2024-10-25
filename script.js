//your JS code here. If required.


document.getElementById('delete').addEventListener('click', () => {
	const color = document.getElementById('colorSelect').value;

	document.getElementById(color).remove();
})
