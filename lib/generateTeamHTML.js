function generateTeamHTML(data,mgr) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Summary</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
</head>
<body>
    <div class = "container px-0">
       <header class="text-white p-3" style="background-color: steelblue">
          <h2 class="text-center">${mgr}'s Team Summary</h2>
        </header>
    </div>

    <div class="container px-0" style="background-color: #E9EDEE;">
       <div class="row w-100">
          <div class="col-12 d-flex flex-wrap justify-content-center">
            ${data}
          </div>
        </div>
    </div>
</body>
</html>`

}

module.exports = { generateTeamHTML };