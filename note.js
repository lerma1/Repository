

function Note(options){ //конструктор объекта Задача
  this.header = options.header||"";
  this.text = options.text||"";
  this.date = options.date||"";
  this.list = options.list||[];
  this.image = options.image||"";
  this.archive = options.archive||false;
  this.fasten = options.fasten||false;

   var elem;

  function updateText (header, text) {
     this.header = header;
       this.text = text;
   }


   function showNote (){
     if(!elem) {
       elem = new Note({header: this.header, text: this.text, date: this.date,  list: this.list, image: this.image, archive: this.archive, fasten: this.fasten });
     }
     else {
       elem.updateText(this.header, this.text );
     }
   }

   this.updateText = updateText;
   this.showNote = showNote;
}


//функция создания дом-элемента

//функция

//когда ввели хоть один символ, если нет нового обьекта задачи, создаеться объект новой задачи.
//он изменяеться при каждом изменении полей.
//когда newNote close, создаеться новая задача по объекту в дом.

//буфер хранит только текстовые поля. картинки и таймеры не затрагиваються
//буфер - стек. он существует, пока ньюноте открыта. Представляет из себя стек объектов {header: "", text: ""}; При каждом нажатии кливаши на клавиатуре создаеться новая запись. при ундо редо откатываемся до нужно записи. Не забыть обнулять последующие записи при нажатии клавиши любой после редо.
//Объект буфер?
