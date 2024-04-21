function HandleSession() {
    //Создадим массив для хранения информации о текущей сессии
    let session = new Map();

    //Добавим данные о клиенте
    session.set("userAgent", window.navigator.userAgent);

    //Добавим данные о фозрасте пользователя (через запрос)
    session.set("age", prompt("Пожалуйста, введите ваш возраст"));

    //Добавим текущие дату и время
    session.set("date", new Date().toLocaleString());

    //Проверим, можно ли пользователю посетить сайт
    if (session.get("age") >= 18) {
        alert(`Приветствуем на LifeSpot! ` + session.get("date"));
    }
    else {
        alert("Сайт предназначен для совершеннолетних!");
        window.location.href = "http://www.google.com";
    }
}
/*
 * Функция фильтрации
 */
function FilterContent() {
    //Находим на главной странице элемент input
    let elements = document.getElementsByTagName('input');
    let element = elements[0];

    //Получем его значение (введенный текст)
    let elementText = element.value;

    //Получаем список всех видео на странице
    let videos = document.getElementsByClassName('video-container');


    for (var i = 0; i < videos.length; i++) {
        //Проверяем, есть ли в названии видео символы, введенные пользователем, если есть - делаем элемент видимым, если нет - невидимым
        let videoName = videos[i].getElementsByClassName('video-title')[0].innerHTML;
        if (videoName.toLowerCase().includes(elementText.toLowerCase()))
            videos[i].style.display = 'inline-block';
        else
            videos[i].style.display = 'none';
    }
}
