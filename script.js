


var newNote = new NewNote();

var note1 = new Note({
      header: "Спланировать летний отпуск",
      date: "21 августа 2019, 11:40",
      list: [
        "Купить билеты на самолет",
        "Найти гостиницу",
        "Регистрация и пропуск в заповедник",
        "Раскладка",
        "Встретиться с будущими попутчиками"
      ]
    });

    var note2 = new Note({
          header: "Рецепт макарон По-Чукотски",
          text: "Основные ингридиенты:  \nпомидоры 800 г\nспагетти 500 г\nфиле белой рыбы типа палтуса или морского волка 300 г\nлимон 1 шт.\nсливочное масло 80 г\nпетрушка зелень 1 шт.",
          date: "21 мая 2020, 11:40",
          image: "image/1.jpg"
        });

var note3 = new Note({
        header: "Настоящий друг не позволит тебе совершать глупости в одиночку.",
        text: " Народная мудрость"
            });


var mainElem = document.querySelector("#main");
mainElem.appendChild(newNote.getElem());

mainElem.appendChild(note1.getElem());
mainElem.appendChild(note2.getElem());
mainElem.appendChild(note3.getElem());

mainElem.onclick = function(event) {
              if (!event.target.closest('.new-note')) {
                newNote.close();
              }

              if (event.target.closest('.new-note__button')) {
                var n = newNote.getNote();
                var NoteCurrent = new Note ({header: n.header, text: n.text, date: n.date,  list: n.list, image: n.image, archive: n.archive, fasten: n.fasten });
                this.insertBefore(NoteCurrent.getElem(), document.querySelector(".note-list__note"));
                newNote.clearNewNote();
                newNote.close();

            }
}
