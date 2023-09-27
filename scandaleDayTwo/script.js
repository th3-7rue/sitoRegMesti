window.onload = function () {
    fetch('https://jsonplaceholder.typicode.com/photos').then(
        function (result) {
            return result.json()
        }
    ).then(
        function (data) {
            console.log(data)
        }
    )
}