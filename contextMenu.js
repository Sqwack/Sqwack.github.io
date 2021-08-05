export default class contextMenu{
  options = [];
  constructor(){
  }
  addItem(name, callback){
    this.options.push({"name":name,"call":callback});
  }
  showMenu(x,y){
    let cover = document.createElement("div");
    cover.classList.add("coverScreen");
    cover.onclick = (e) => {
      document.body.removeChild(cover);  
    }
    
    let list = document.createElement("div");
    list.classList.add("contextList");
    cover.appendChild(list);
    list.style.top = y + "px";
    list.style.left = x + "px";

    for(let i = 0; i < this.options.length; i++){
      let item = document.createElement("div");
      item.innerText = this.options[i].name;
      item.classList.add("contextItem");
      item.onclick = (e) => {
        this.options[i].call();
      }
      list.appendChild(item);
    }  
    document.body.appendChild(cover);
  }
  showStringMenu(x,y){
    let cover = document.createElement("div");
    cover.classList.add("coverScreen");
    cover.onclick = (e) => {
      document.body.removeChild(cover);  
    }
    
    let list = document.createElement("div");
    list.classList.add("contextList");
    cover.appendChild(list);
    list.style.top = y + "px";
    list.style.left = x + "px";

    let input = document.createElement("input");
    
  }
}
