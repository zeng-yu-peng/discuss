< !DOCTYPE html>
  < html lang="en">

    < head>
      < meta charset="UTF-8">
        < meta name="viewport" content="width=device-width, initial-scale=1.0">
          < title> 履歷表 < /title> < /head>

              < body>
                < script>
                  var acc = document.getElementsByClassName("accordion");
                  var i;

                  for (i = 0; i < acc.length; { acc[i].addEventListener("click", function () {
                    this.classList.toggle("active"); var panel=this.nextElementSibling; if (panel.style.maxHeight) {
                    panel.style.maxHeight=null; } else { panel.style.maxHeight=panel.scrollHeight + "px" ; } }); }
                    < /script> < /body>

                    < /html>