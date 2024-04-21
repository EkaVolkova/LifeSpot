/**
 * Логирует информацию о сессии в консоль
 * Метод объявления - Function Expression
 * @param {any} session массив данных о сессии
 */
const sessionLog = function (session) {
    for (let item of session) {
        console.log(item);
    }
}
/**
 * Подготавливает сайт к запуску:
 *      получает данные о текущей сессии
 *      проверяет возраст
 */
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
    return session;
}

/**
 * функция получения введенного пользователем текста
 */
function GetInputData() {
    return document.getElementsByTagName('input')[0].value.toLocaleLowerCase();
}

/**
 * Функция фильтрации
 * @param {any} getData функция получения введенного пользователем текста
 */
function FilterContent(getData) {

    let filterText = getData();

    //Получаем список всех видео на странице
    let videos = document.getElementsByClassName('video-container');


    for (var i = 0; i < videos.length; i++) {
        //Проверяем, есть ли в названии видео символы, введенные пользователем, если есть - делаем элемент видимым, если нет - невидимым
        let videoName = videos[i].getElementsByClassName('video-title')[0].innerHTML;
        if (videoName.toLowerCase().includes(filterText))
            videos[i].style.display = 'inline-block';
        else
            videos[i].style.display = 'none';
    }
}
