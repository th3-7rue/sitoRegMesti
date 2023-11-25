window.onload = function () {
    let button = document.getElementById('genera')
    button.onclick = function () {
        document.getElementById('password').innerHTML = "Password: "
        var length = document.getElementById('length').value;
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/passwordgenerator?length=' + length,
            headers: { 'X-Api-Key': 'STJ5uzJD3q30HCQQWIKDkQ==5mZq2d71OYUL4H1e' },
            contentType: 'application/json',
            success: function (result) {
                console.log(result);
                document.getElementById('password').innerHTML += result.random_password;

            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    }
}
