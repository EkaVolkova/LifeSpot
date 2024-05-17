/**
 * Функция увеличения рейтинга 
 * @param {any} id
 */
function addLike(id) {

    //Получаем кнопку по id
    let button = document.getElementById(id);

    //Достаем полезную информацию
    arrayButton = button.innerHTML.split(' ');

    //Прибавляем лайк
    res = parseInt(arrayButton[1]) + 1;

    //Собираем кнопку обратно
    arrayButton[1] = `${res}`;
    button.innerHTML = arrayButton.join(' ');
}
/**
 * Стрелочная функция добавления отзыва на сайт
 * @param {any} review массив данных об отзыве
 */
const publicReview = (review) => {

    let rate = "";
    if (review.hasOwnProperty('rate')) {
        const id = Math.random();
        rate = `<button id=${id} onClick="addLike(id)" class="rewiew-rate">❤️ ${review.rate}</button>`;
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
 * Функция-корнструктор для комментария
 * */
function Comment() {

    //Считываем имя пользователя
    let name = prompt("Введите свое имя");

    //Проверяем, что имя пользователя не пустая строка
    if (name === null || name.length === 0) {
        this.empty = true;
        return;
    }
    this.name = name;

    //Считываем комментарий пользователя
    let comment = prompt("Введите отзыв");

    //Проверяем, что комментарий пользователя не пустая строка
    if (comment === null || comment.length === 0) {
        this.empty = true;
        return;
    }

    this.comment = comment;

    //Считываем текущие дату и время
    this.date = new Date().toLocaleString();
    this.empty = false;
}
/**
 * Функция добавления отзыва
 */
function addReview() {
    //Создаем массив для отзыва
    let comment = new Comment();

    // проверяем, успешно ли юзер осуществил ввод
    if (comment.empty) {
        return;
    }
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