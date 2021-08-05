import ctxMenu from './contextMenu.js';

class Pattern{
  length = 0;
  data = [];
  color = 0;
  label = null;
  id = null;
  constructor(name, id){
    this.label = name;
    this.id = id;
  }
}

class Note{
  volume = null;
  pitch = null;
  type = null;
}

export class PatternList{
  table = null;
  patterns = [];
  selected = 0;
  constructor(){
    this.table = document.getElementById("patternTable");
  }
  addPattern(name){
    let pattern = new Pattern(name,this.patterns.length);
    this.patterns.push(pattern);
  }
  refreshPatternListTable(){
    for(let i = 0; i < this.patterns.length; i++){
      this.#generateRow(this.patterns[i], this.selected == i);  
    }
  }
  #generateRow(pattern, selected = false){
    let row = document.createElement("tr");
    row.classList.add("hoverable");
    row.classList.add("patternRow");
    if(selected){
      row.classList.add("selectedPattern");  
    }
    let first = document.createElement("td");
    first.innerHTML = pattern.label;
    row.appendChild(first);

    row.addEventListener('contextmenu', e => {
      let cm = new ctxMenu();
      cm.addItem("Rename",()=>{
        console.log("TODO: RENAME");
      });
      cm.addItem("Duplicate",()=>{
        console.log("TODO: Duplicate");
      });
      cm.addItem("Delete",()=>{
        console.log("TODO: Delete");
      });
      cm.showMenu(e.clientX,e.clientY);
      e.preventDefault();
    });

    this.table.appendChild(row);
  }
}


