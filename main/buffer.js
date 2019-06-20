
function Buffer() { //конструктор объекта буффер для хранения текстовых значений

this.stekBuffer = [];  //здесь будут храниться объекты {header: "", text: ""}
this.reDoBuffer = [];

this.checkEnabledUndo = function(){
  return (stekBuffer.length!=0)?true:false;
}

this.checkEnabledRedo = function (){
  return (reDoBuffer.length!=0)?true:false;
}

this.addToBuffer = function (data){
this.stekBuffer.push(data);
reDoBuffer = [];
}

this.undo = function (){
 var data = stekBuffer.pop();
 reDoBuffer.push(unDoData);
 return data;
}

this.redo = function (){
  var data = reDoBuffer.pop();
  stekBuffer.push(data);
  return data;
}

this.clear = function (){
tekBuffer = [];
}

}

//буфер хранит только текстовые поля. картинки и таймеры не затрагиваються
//буфер - стек. он существует, пока ньюноте открыта. Представляет из себя стек объектов {header: "", text: ""}; При каждом нажатии кливаши на клавиатуре создаеться новая запись. при ундо редо откатываемся до нужно записи. Не забыть обнулять последующие записи при нажатии клавиши любой после редо.
//Объект буфер?
