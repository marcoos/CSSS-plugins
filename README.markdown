Some CSSS plugins
=================

JSSnippets
----------

Lets you run JS code from textareas during your talk

For example, do this in a CSSS slide:

<textarea class="js-snippet">
alert("Oh hai!");
</textarea>

And at the end of your slides put e.g. this code:

<script src="plugins/js-snippets.js"></script>
<script>
JSSnippets.applyTo(".js-snippet");
</script>

C0nsole
-------

A brain-dead simple console, sort of useful when you need a nice output for stuff run from JSSnippets.

<textarea class="js-snippet">
c0nsole.log("Oh hai again! Kthxbye!");
</textarea>

For c0nsole to work, you need to put:

<link rel="stylesheet" src="plugins/c0nsole.css">

in the <head> part of your slides, and:

<script src="plugins/c0nsole.js"></script>

at the bottom of your slides.

