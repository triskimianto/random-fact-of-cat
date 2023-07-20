fetch('https://catfact.ninja/fact')
    .then(res => res.json())
    .then(json => document.getElementById("factValue").innerHTML = json.fact);