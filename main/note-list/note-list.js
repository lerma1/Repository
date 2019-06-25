

function Note(options) { //конструктор компонента Note
  var elem;

  function getElem() {
    if (!elem) render();
    return elem;
  }


  function render() {
    elem = document.createElement('div');
    elem.className = "note-list__note";

    if(options.image){
      var imgElem = document.createElement('img');
      imgElem.className = "note-list__note__img";
      imgElem.setAttribute("src", options.image);
      elem.appendChild(imgElem);
    }

    if(options.header){
    var pElem = document.createElement('p');
    pElem.textContent = options.header;
    pElem.className = "note-list__note__header";
    elem.appendChild(pElem);
    }

    if(options.text){
    var pElem = document.createElement('p');
    pElem.textContent = options.text;
    pElem.className = "note-list__note__text";
    elem.appendChild(pElem);
    }

    if(options.list){
    var divElem = document.createElement('div');
    divElem.className = "note-list__note__checkbox-list";

    var idCheckbox = "" + new Date;

    for(var i = 0;i < options.list.length; i++) {

      var inputElem = document.createElement('input');
      inputElem.className = "note-list__note__checkbox";
      inputElem.setAttribute("type", "checkbox");
      inputElem.setAttribute("id", idCheckbox + i);
      divElem.appendChild(inputElem);

      var labelElem = document.createElement('label');
      labelElem.textContent = options.list[i];
      labelElem.className = "note-list__note__label";
      labelElem.setAttribute("for", idCheckbox + i);
      divElem.appendChild(labelElem);

      var brElem = document.createElement('br');
      divElem.appendChild(brElem);

    }

    elem.appendChild(divElem);
    }

    if(options.date){
    pElem = document.createElement('p');
    pElem.textContent = options.date;
    pElem.className = "note-list__note__reminder";
    elem.appendChild(pElem);
    }

    var divElem = document.createElement('div');
    divElem.className = "new-note__menu";
    divElem.textContent = " ";
    elem.appendChild(divElem);


    elem.onmousedown = function() {
      return false;
    };


  }

  function renderOpenNewNote() {



  }

  function open() {
    if (!elem.querySelector('.new-note__icon-fasten')) {
    renderOpenNewNote();
    }
    //elem.classList.remove('new-note-close');
  //  elem.classList.add('new-note_open');



  };

  function close() {
  //  elem.classList.remove('new-note_open');
  //  elem.classList.add('new-note-close');
  };

  function toggle() {
  //  if (elem.classList.contains('new-note_open')) close();
  //  else open();
  };

  function updateText(header, text) {
  elem.querySelector(".note-list__note__header").textContent = header;
  elem.querySelector(".note-list__note__text").textContent = text;
  };


  this.getElem = getElem;
  this.toggle = toggle;
  this.close = close;
  this.open = open;
  this.updateText = updateText;
}
