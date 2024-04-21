let session = new Map();

session.set("userAgent", window.navigator.userAgent);

session.set("age", prompt("Пожалуйста, введите ваш возраст"));
session.set("date", new Date().toLocaleString());

if (session.get("age") >= 18) {
    alert(`Приветствуем на LifeSpot! ` + session.get("date"));
}
else {
    alert("Сайт предназначен для совершеннолетних!");
    window.location.href = "http://www.google.com";
}


