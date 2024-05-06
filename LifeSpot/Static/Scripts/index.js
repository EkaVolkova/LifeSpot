
/**
 * Логирует информацию о сессии в консоль
 * Метод объявления - Function Expression
 */
const sessionLog = function () {
    console.log('Начало сессии: ' + window.sessionStorage.getItem("startDate"));
    console.log('Даныне клиента: ' + window.sessionStorage.getItem("userAgent"));
    console.log('Возраст пользователя: : ' + window.sessionStorage.getItem("userAge"));

}
/**
 *  Функция провки возраста пользователя
*/
function CheckAge(newVisit) {
    //Проверим, можно ли пользователю посетить сайт
    if (window.sessionStorage.getItem("userAge") >= 18) {
        if (newVisit)
            alert(`Приветствуем на LifeSpot! ` + window.sessionStorage.getItem("startDate"));
    }
    else {
        alert("Сайт предназначен для совершеннолетних!");
        window.location.href = "http://www.google.com";
    }

}
/**
 * Подготавливает сайт к запуску:
 *      получает данные о текущей сессии
 * @param {any} checker функция проверки данных
 */
function HandleSession(checker, logger) {
    //Создадим массив для хранения информации о текущей сессии
    
    //Добавим текущие дату и время
    if (window.sessionStorage.getItem("startDate") == null)
        window.sessionStorage.setItem("startDate", new Date().toLocaleString());

    //Добавим данные о клиенте
    if (window.sessionStorage.getItem("userAgent") == null)
        window.sessionStorage.setItem("userAgent", window.navigator.userAgent);

    //Добавим данные о фозрасте пользователя (через запрос)
    if (window.sessionStorage.getItem("userAge") == null) {
        window.sessionStorage.setItem("userAge", prompt("Пожалуйста, введите ваш возраст"));
        checker(true);
    }
    else {
        checker(false);
    }

    logger();
    
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


setTimeout(() => { alert("Подпишитесь на наш инстаграмм!")}, 60000);
