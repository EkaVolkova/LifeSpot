/**
 * Функция подсчитывает количество элементов на странице и выводит результат на экран
 * */
function countElements() {

    // Получим коллекцию всех элементов страницы
    let elements = document.getElementsByTagName('*');

    // Выведем результат в уведомление
    alert(`Количество элементов на странице:  ${elements.length}`);
}

/**
 * Функция для сохранения контекста функции и вывода на эеран текущего и предыдущего ввода
 * */
function saveContext() {
    let currentInput = document.getElementsByTagName('input')[0].value.toLocaleLowerCase();
    alert(`Текущий ввод: ${currentInput}\r\nПредыдущий ввод: ${this.lastInput}`);
    this.lastInput = currentInput;
}