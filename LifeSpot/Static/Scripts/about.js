/**
 * Стрелочная функция добавления отзыва на сайт
 * @param {any} review массив данных об отзыве
 */
const publicReview = (review) => {

    //Формируем текст отзыва
    let addedReview = `<div class="review-data">
<div> <a class="user-name">user: ${review["name"]}</a> <a class="review-date">${review["data"]}</a></div>
<p class="rewiew-comment">${review["comment"]}</p></div>`;

    //Получаем текущий список отзывов
    let reviews = document.getElementsByClassName('reviews-data')[0];

    //Если отзывов нет, заменяем на текущий отзыв, если есть, добавляем новый
    if (reviews.getElementsByTagName('p')[0].innerHTML.trim() == "Отзывов пока нет")
        reviews.innerHTML = addedReview;
    else
        reviews.innerHTML += addedReview;
}
/**
 * Функция добавления отзыва
 */
function addReview() {
    //Создаем массив для отзыва
    let review = new Map();

    //Считываем имя пользователя
    review["name"] = prompt("Введите свое имя");
    
    //Проверяем, что имя пользователя не пустая строка
    if (review["name"] === null || review["name"].length === 0)
        return;

    //Считываем комментарий пользователя
    review["comment"] = prompt("Введите отзыв");

    //Проверяем, что комментарий пользователя не пустая строка
    if (review["comment"] === null || review["comment"].length === 0)
        return;

    //Считываем текущие дату и время
    review["data"] = new Date().toLocaleString();

    //публикуем отзыв
    publicReview(review);
    
}