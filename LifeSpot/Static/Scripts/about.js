/**
 * Стрелочная функция добавления отзыва на сайт
 * @param {any} review массив данных об отзыве
 */
const publicReview = (review) => {

    let rate = "";
    if (review.hasOwnProperty('rate')) {
        rate = `<p class="rewiew-rate">Оценка: ${review.rate}</p>`;
    }
    //Формируем текст отзыва
    let addedReview = `<div class="review-data">
<div> <a class="user-name">user: ${review.name}</a> <a class="review-date">${review.date}</a></div>
<p class="rewiew-comment">${review.comment}</p>${rate}</div >`;
    
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
    let comment = new Object();

    //Считываем имя пользователя
    comment.name = prompt("Введите свое имя");
    
    //Проверяем, что имя пользователя не пустая строка
    if (comment.name === null || comment.name.length === 0)
        return;

    //Считываем комментарий пользователя
    comment.comment = prompt("Введите отзыв");

    //Проверяем, что комментарий пользователя не пустая строка
    if (comment.comment === null || comment.comment.length === 0)
        return;

    //Считываем текущие дату и время
    comment.date = new Date().toLocaleString();

    //Проверяем, нужен ли пользователю рейтинг 
    const isRewiew = confirm("Хотите получать оценки от других пользователей");
    console.log(isRewiew);
    if (isRewiew) {
        console.log("Отзыв");
        let rewiew = Object.create(comment);
        rewiew.rate = 0;
        publicReview(rewiew);
    }
    else {
        console.log("Коммент");

        //публикуем отзыв
        publicReview(comment);
    }
}