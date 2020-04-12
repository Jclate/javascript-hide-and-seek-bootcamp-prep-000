function getFirstSelector(selector) {
  const element = document.querySelector(selector)
  return element
}

function nestedTarget() {
  const targetElement = document.getElementById('nested').querySelector('.target')
  return targetElement
}

function increaseRankBy(n) {
var wtf = []
  const lis = document
  .querySelectorAll('ul.ranked-list > li');
  for (var i = 0; i < lis.length; i++) {

    wtf[i] = parseInt(lis[i].innerHTML)
    var num = wtf[i]
    lis[i].innerHTML = (num + n).toString();

      }
}

function deepestChild() {
  const deep = document.querySelector('div#grand-node>div>div>div>div')
  const list = deep.children
  var current
  var num = deep.length
  var i = 0
  return deep
}
