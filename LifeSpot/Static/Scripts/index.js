let age = prompt("Пожалуйста, введите ваш возраст");
if (age >= 18) {
    alert(`Приветствуем на LifeSpot! ` +
        new Date().toLocaleString());
}
else {
    alert("Сайт предназначен для совершеннолетних!");
    window.location.href = "http://www.google.com";
}


