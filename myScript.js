function main () {

      alert("Let's create a times table!");
      var spaces = prompt('Please input a number between 5-20', 12);
      //alert(spaces);
      var input = (Number(spaces));


      var id = document.getElementById('multi');
      var out = "";
      var valid = input>=5 && input<=20;
      if(!input || !valid)
      {
            var error = "Please enter a valid input between 5-20."
            alert(error);
      }

      else 
      {
            //Top row
            out += '<tr>';
            out += '<td></td>';
            for (var x = 0; x < input; x++)
            {
            out += '<td>' + (x+1) + '</td>';
            }
            out += '</tr>';


            //Creates rows
            for (var y = 0; y < input; y++)
            {
                  out += '<tr>';
                  out += '<td>' + (y+1) + '</td>';
                  //Creates rows
                  for (var x = 0; x < input; x++)
                  {
                        if(x==y)
                        {
                              out += '<td class="yellow">' + (x+1) * (y+1) + '</td>';
                        }
                        else
                        {
                              out += '<td>' + (x+1) * (y+1) + '</td>'; 
                        }
                  }
                  out += '</tr>';
            }

            id.innerHTML=out;
      }


}