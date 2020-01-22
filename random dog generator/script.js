<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Random dog picture generator</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>

    <header>
    <span class="banner-text">Find your picture!</span>
    </header>

    <main>
      <div>How many dogs would you like to see?</div>
      <form id="dog-form">
        <input id="dog-input" type="text" name="dog-number">
        <input type="submit" name="submit">
      </form>
      <div>*Notes: Pick a number between 1 and 50. If you dont pick any number three random dogs will appear.</div>
      <section>
        <div class="dog-image"></div>
      </section>
    </main>
    <script
  src="https://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous"></script>
    <script src="script.js"></script>
  </body>
</html>
