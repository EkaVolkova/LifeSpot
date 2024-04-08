let name = prompt("Введите ваше имя");
alert(`${name}, приветствуем на LifeSpot! ` +
    new Date().toLocaleString());

// Получим коллекцию всех элементов страницы
let elements = document.getElementsByTagName('*');

// Выведем результат в уведомление
alert(`Количество элементов на странице:  ${elements.length}`);
