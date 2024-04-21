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


