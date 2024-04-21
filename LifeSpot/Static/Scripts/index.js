let session = new Map();

/**
 * Логирует информацию о сессии в консоль
 * Метод объявления - Function Expression
 */
const sessionLog = function () {
    for (let item of session) {
        console.log(item);
    }
}
/**
 *  Функция провки возраста пользователя
*/
function CheckAge() {
    //Проверим, можно ли пользователю посетить сайт
    if (session.get("age") >= 18) {
        alert(`Приветствуем на LifeSpot! ` + session.get("date"));
    }
    else {
        alert("Сайт предназначен для совершеннолетних!");
        window.location.href = "http://www.google.com";
    }

}
/**
 * Подготавливает сайт к запуску:
 *      получает данные о текущей сессии
 */
function HandleSession() {
    //Создадим массив для хранения информации о текущей сессии

    //Добавим данные о клиенте
    session.set("userAgent", window.navigator.userAgent);

    //Добавим данные о фозрасте пользователя (через запрос)
    session.set("age", prompt("Пожалуйста, введите ваш возраст"));

    //Добавим текущие дату и время
    session.set("date", new Date().toLocaleString());
    
}

/**
 * функция получения введенного пользователем текста
 */
const inputParseFunction = function (){
    return document.getElementsByTagName('input')[0].value.toLocaleLowerCase();
}

/**
 * Функция фильтрации
 * @param {any} getData функция получения введенного пользователем текста
 */
function FilterContent() {


    //Получаем список всех видео на странице
    let videos = document.getElementsByClassName('video-container');


    for (var i = 0; i < videos.length; i++) {
        //Проверяем, есть ли в названии видео символы, введенные пользователем, если есть - делаем элемент видимым, если нет - невидимым
        let videoName = videos[i].getElementsByClassName('video-title')[0].innerHTML;
        if (videoName.toLowerCase().includes(inputParseFunction()))
            videos[i].style.display = 'inline-block';
        else
            videos[i].style.display = 'none';
    }
}
