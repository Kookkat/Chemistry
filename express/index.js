const express = require("express");

const app = express();

app.get("{/*path}", async (req, res, next) => {
  console.log(req.path);
  next();
});
app.get("{/*path}", async (req, res) => {
  return res.send(
    `<script>
    let i = 0;
    setInterval(function(){
    history.replaceState(null,'',i.toString())
    i++;
    },250)
    </script>`
  );
});
app.listen(3000, () => {
  console.log(`Server is running on port 3000!`);
});
