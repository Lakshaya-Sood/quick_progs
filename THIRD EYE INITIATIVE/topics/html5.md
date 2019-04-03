## HTML5

[What is the origin of term MARK UP?](#what-is-the-origin-of-term-MARK-UP?)
[Ways to move to fragments of the same page?](#Ways-to-move-to-fragments-of-the-same-page?)

### What is the origin of term MARK UP?

> Mark-up is a term from print editing - the editor would go through the text and add annotations 
(i.e. this in italic, that in bold) for the printers to use when producing the final version. 
This was called marking up the text.

###### GoodReads

* https://stackoverflow.com/questions/24041/markdown-vs-markup-are-they-related

[[↑] Back to top](#HTML5)

### Ways to move to fragments of the same page?

1) Smoothy Scroll to fragment

```javascript
function onLinkClick() {
  document.getElementsById('scroll').scrollIntoView();
  // will scroll to the selected element
  
}
```
2) Simply Jump to fragment

```html
<a href="#scroll">Go to Title</a>
<div>
  <h1 id="scroll">Title</h1>
</div>
```
  

###### GoodReads

* http://www.simplehtmlguide.com/linking.php
* https://en.wikipedia.org/wiki/Fragment_identifier

[[↑] Back to top](#HTML5)