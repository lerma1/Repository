

function NewNote(options) { //конструктор компонента newNote
  var elem;
  var note = new Note();
  var buffer = new Buffer();

  function getElem() {
    if (!elem) render();
    return elem;
  }


  function render() {
    elem = document.createElement('div');
    elem.className = "new-note new-note-close";

    var inputElem = document.createElement('input');
    inputElem.className = "new-note__input";
    inputElem.setAttribute("type", "text");
    inputElem.setAttribute("placeholder", "Новая заметка...");
    elem.appendChild(inputElem);

    var imgElem = document.createElement('img');
    imgElem.className = "new-note__icon";
    imgElem.setAttribute("src", "icon/list.png");
    imgElem.setAttribute("data-tooltip", "Создать список");
    elem.appendChild(imgElem);

    imgElem = document.createElement('img');
    imgElem.className = "new-note__icon";
    imgElem.setAttribute("src", "icon/paint.png");
    imgElem.setAttribute("data-tooltip", "Создать заметку с рисунком");
    elem.appendChild(imgElem);


    imgElem = document.createElement('img');
    imgElem.className = "new-note__icon";
    imgElem.setAttribute("src", "icon/image.png");
    imgElem.setAttribute("data-tooltip", "Создать фотозаметку");
    elem.appendChild(imgElem);


    elem.onmousedown = function() {
      //return false;
    };

    elem.onclick = function(event) {
      if (event.target.closest('.new-note-close')) {
        toggle();
      }
    }

    elem.oninput = function(event) {
         changeNote(event.target);
      }
  }

  function renderOpenNewNote() {
    var textareaElem = document.createElement('textarea');
    elem.appendChild(textareaElem);
    textareaElem.className = "new-note__input_text";
    textareaElem.setAttribute("type", "text");
    textareaElem.setAttribute("placeholder", "Текст заметки...");
    textareaElem.setAttribute("rows", "4");

    var imgElem = document.createElement('img');
    imgElem.className = "new-note__icon-fasten";
    imgElem.setAttribute("src", "icon/fasten.png");
    imgElem.setAttribute("data-tooltip", "Закрепить");
    elem.appendChild(imgElem);

    var menuElem = document.createElement('div');
    menuElem.className = "new-note__menu";

    imgElem = document.createElement('img');
    imgElem.className = "new-note__icon-min";
    imgElem.setAttribute("src", "icon/new-reminder.png");
    imgElem.setAttribute("data-tooltip", "Создать напоминание");
    menuElem.appendChild(imgElem);

    imgElem = document.createElement('img');
    imgElem.className = "new-note__icon-min";
    imgElem.setAttribute("src", "icon/new-coauthor.png");
    imgElem.setAttribute("data-tooltip", "Добавить соавтора");
    menuElem.appendChild(imgElem);

    imgElem = document.createElement('img');
    imgElem.className = "new-note__icon-min";
    imgElem.setAttribute("src", "icon/new-color.png");
    imgElem.setAttribute("data-tooltip", "Изменить цвет");
    menuElem.appendChild(imgElem);

    imgElem = document.createElement('img');
    imgElem.className = "new-note__icon-min";
    imgElem.setAttribute("src", "icon/new-image.png");
    imgElem.setAttribute("data-tooltip", "Добавить картинку");
    menuElem.appendChild(imgElem);

    imgElem = document.createElement('img');
    imgElem.className = "new-note__icon-min";
    imgElem.setAttribute("src", "icon/new-archive.png");
    imgElem.setAttribute("data-tooltip", "Перенести в архив");
    menuElem.appendChild(imgElem);

    imgElem = document.createElement('img');
    imgElem.className = "new-note__icon-min";
    imgElem.setAttribute("src", "icon/more.png");
    imgElem.setAttribute("data-tooltip", "Еще");
    menuElem.appendChild(imgElem);

    imgElem = document.createElement('img');
    imgElem.className = "new-note__icon-min";
    imgElem.setAttribute("src", "icon/cancel.png");
    imgElem.setAttribute("data-tooltip", "Отменить");
    menuElem.appendChild(imgElem);

    imgElem = document.createElement('img');
    imgElem.className = "new-note__icon-min";
    imgElem.setAttribute("src", "icon/repeat.png");
    imgElem.setAttribute("data-tooltip", "Повторить");
    menuElem.appendChild(imgElem);

    elem.appendChild(menuElem);

  }

  function open() {
    if (!elem.querySelector('textarea')) {
    renderOpenNewNote();
    }
    elem.classList.remove('new-note-close');
    elem.classList.add('new-note_open');

    elem.querySelector('textarea');

  };

  function close() {
    elem.classList.remove('new-note_open');
    elem.classList.add('new-note-close');
  };

  function toggle() {
    if (elem.classList.contains('new-note_open')) close();
    else open();
  };

  function changeNote(target){
    var header = elem.querySelector('.new-note__input');
    var text = elem.querySelector('.new-note__input-text');
    buffer.addToBuffer([header,text]);
    this.note.addText(header, text);

    //событие срабатывает при опен объекта
    //назначаеться обработчик события инпут на оба инпута. или их назначить сразу???
    //
    //обработчик:
    // если нет обьекта задачи - создаеться объект новой задачи.
    //если нет буффера - создаеться буффер
    //значения полей записываються в обьект
    //значения полей записываються в буффер
    //изменяем кнопку ундо, если нужно

    //когда newNote close, создаеться новая задача по объекту в дом.
  }

  //функция - повесить обработчики на кнопки ундо и редо
  //функция обработчик ундо { обьект = буффер ундо. меняем значения у обоих инпутов}

  this.getElem = getElem;
  this.toggle = toggle;
  this.close = close;
  this.open = open;
}
