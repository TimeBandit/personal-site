function getListItemClass(entryUrl, pageUrl) {
  if(entryUrl === '/'){
    if(pageUrl === '/'){
      return 'active'
    }
    return ''
  }
  if(pageUrl.includes(entryUrl)){
    return 'active'
  }
}

async function navListItemShortcode(entry) {
  console.log("BUILDING...😸");
  const listItemClass = getListItemClass(entry.url, this.page.url);
  
  return `<li>
        <a href=${entry.url} class="${"menu-item " + listItemClass}">
          ${entry.title}
        </a>
      </li>`;
}

module.exports = navListItemShortcode;
