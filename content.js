function f(n) {
  let cs = n.childNodes;
  for (let i = 0; i < cs.length; i++) {
    let c = cs[i];
    if (c.nodeType == Node.TEXT_NODE) {
      c.textContent = c.textContent.replace(/とは？/g, "とは...何か(ﾈｯﾄﾘ) ");
    } else {
      f(c);
    }
  }
}

f(document.body);
