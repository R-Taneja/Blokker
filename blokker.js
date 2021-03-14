//To blank out user profiles too (ex: the whole page on https://www.instagram.com/rohan.taneja_/), add this class to the string below: .v9tJq

const DEL_SELECTOR = '.VideM, ._1SP8R, .pbgfb, .XTCLo, .MxEZm';

const mo = new MutationObserver(onMutation);
onMutation([{addedNodes: [document.documentElement]}]);
observe();

function onMutation(mutations) {
  const toRemove = [];
  for (const {addedNodes} of mutations) {
    for (const n of addedNodes) {
      if (n.tagName) {
        if (n.matches(DEL_SELECTOR)) {
          toRemove.push(n);
        } else if (n.firstElementChild && n.querySelector(DEL_SELECTOR)) {
          toRemove.push(...n.querySelectorAll(DEL_SELECTOR));
        }
      }
    }
  }
  if (toRemove.length) {
    mo.disconnect();
    for (const el of toRemove) el.remove();
    observe();
  }
}

function observe() {
  mo.observe(document, {
    subtree: true,
    childList: true,
  });
}

// Adds a message to the blocked Instagram home page
alert("Blokker")