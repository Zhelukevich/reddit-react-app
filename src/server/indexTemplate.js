export const indexTemplate = (content, token) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reddit</title>
  <script src="/static/client.js" type="application/javascript"></script>
	<script>
	window.__token__ = '${token}'
	if(localStorage.token === 'undefined' || !localStorage.token.trim()) {
		localStorage.setItem('token', '${token}')
	}
  </script>
</head>

<body>
  <div id="react_root">${content}</div>
  <div id="modal_root"></div>
	<div id="dropdown_root"></div>
</body>

</html>
`;
