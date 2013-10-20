document.writeln("<table>");
document.writeln("<tr>");
document.writeln("<td>1</td>");
document.writeln("<td>2</td>");
document.writeln("<td>3</td>");
document.writeln("</tr>");

document.writeln("<tr>");
document.writeln("<td>11</td>");
document.writeln("<td>12</td>");
document.writeln("<td>13</td>");
document.writeln("</tr>");
document.writeln("</table>");

function main () {
      //alert("Let's create a times table!");
      //var spaces = prompt('Please input a number between 5-20', 12);
      //alert(spaces);


      var id = document.getElementById('multi');
      var out = "";



      out += '<tr>';
      out += '<td></td>';
      for (var x = 0; x < 20; x++)
      {
      out += '<td class="yellow">' + (x+1) + '</td>';
      }
      out += '</tr>';



      for (var y = 0; y < 20; y++)
      {
            out += '<tr>';
            out += '<td>' + (y+1) + '</td>';
            for (var x = 0; x < 20; x++)
            {
                  out += '<td>' + (x+1) * (y+1) + '</td>';
            }
            out += '</tr>';
      }

      id.innerHTML=out;
}