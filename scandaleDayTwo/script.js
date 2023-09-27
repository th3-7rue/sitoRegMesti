window.onload = function () {
    fetch('https://jsonplaceholder.typicode.com/photos').then(
        function (result) {
            return result.json()
        }
    ).then(
        function (data) {
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                let ul = document.querySelector('ul')
                let li = document.createElement('li')
                let img = document.createElement('img')
                accatiemmeelle = "";
                img.src = data[i].thumbnailUrl

                li.appendChild(img)
                li.appendChild(document.createTextNode(data[i].title))
                li.appendChild(document.createElement('br'))
                li.appendChild(document.createTextNode(data[i].url))

                ul.appendChild(li)
            }
        }
    )

}