document.addEventListener('DOMContentLoaded', function () {
    // Example character data for demonstration
    const charactersData = [
        // Ваш массив данных с персонажами
        {
            "id": 1,
            "name": "Наруто Узумаки",
            "image": "https://static.wikia.nocookie.net/naruto/images/3/36/Naruto_Uzumaki.png/revision/latest/scale-to-width/360?cb=20210822183225&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Саске Учиха",
            "image": "https://upload.wikimedia.org/wikipedia/uk/thumb/f/f0/Sasuke.jpeg/300px-Sasuke.jpeg"
        },
        {
            "id": 2,
            "name": "Какаши Хатаке",
            "image": "https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest?cb=20210214190655&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Орочимару",
            "image": "https://static.wikia.nocookie.net/naruto/images/1/14/Orochimaru_Infobox.png/revision/latest?cb=20151017160235&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Мадара Учиха",
            "image": "https://static.wikia.nocookie.net/naruto/images/0/0c/Madara_img2.png/revision/latest?cb=20210227095726&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Гаара",
            "image": "https://static.wikia.nocookie.net/naruto/images/0/0f/Gaara_Part_II.png/revision/latest?cb=20170507172824&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Ямато",
            "image": "https://static.wikia.nocookie.net/naruto/images/f/f7/Yamato_newshot.png/revision/latest?cb=20190202094154&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Кабуто",
            "image": "https://static.wikia.nocookie.net/naruto/images/c/c9/Kabuto_Part_1.png/revision/latest?cb=20170906124719&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Сакура",
            "image": "https://static.wikia.nocookie.net/naruto/images/e/e8/SakuraHaruno01.png/revision/latest?cb=20210224205405&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Нагато",
            "image": "https://pm1.aminoapps.com/6998/3595cfa00f27a68e55649ca3a93041843dee4b46r1-400-400v2_00.jpg"
        },
        {
            "id": 2,
            "name": "Джирайя",
            "image": "https://static.wikia.nocookie.net/naruto/images/2/21/Profile_Jiraiya.PNG/revision/latest?cb=20170818131513&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Обито",
            "image": "https://static.wikia.nocookie.net/naruto/images/4/4a/Obito_Uchiha.png/revision/latest?cb=20210214221823&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Гай",
            "image": "https://static.wikia.nocookie.net/naruto/images/4/40/MightGuy.png/revision/latest?cb=20150423135435&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Гурен",
            "image": "https://wiki.jcdn.ru/w/images/thumb/c/c3/Guren_Filler.jpg/250px-Guren_Filler.jpg"
        },
        {
            "id": 2,
            "name": "Итачи",
            "image": "https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest?cb=20210225204731&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Хаширама Сенджу",
            "image": "https://static.wikia.nocookie.net/naruto/images/7/7e/Hashirama_Senju.png/revision/latest?cb=20210302194016&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Минато",
            "image": "https://static.wikia.nocookie.net/naruto/images/7/71/Minato_Namikaze.png/revision/latest?cb=20200324174322&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Цунаде",
            "image": "https://static.wikia.nocookie.net/naruto/images/e/e6/Tsunade_Infobox.png/revision/latest?cb=20181114200155&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Данзо",
            "image": "https://wiki.jcdn.ru/w/images/thumb/5/5f/Danzo.jpg/250px-Danzo.jpg"
        },
        {
            "id": 2,
            "name": "Белый Зецу",
            "image": "https://static.wikia.nocookie.net/naruto/images/9/9d/WZetsu.png/revision/latest?cb=20141226062545&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Черный Зецу",
            "image": "https://static.wikia.nocookie.net/naruto/images/c/cd/BZetsu.png/revision/latest?cb=20150329220029&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Эй",
            "image": "https://static.wikia.nocookie.net/naruto/images/4/4c/Fourth_Raikage_2.png/revision/latest?cb=20200327222710&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Хирузен",
            "image": "https://static.wikia.nocookie.net/naruto/images/e/e4/Hiruzen_Sarutobi.png/revision/latest?cb=20170930091606&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Сасори",
            "image": "https://upload.wikimedia.org/wikipedia/uk/7/70/SasoriOrig.jpg"
        },
        {
            "id": 2,
            "name": "Оноки",
            "image": "https://static.wikia.nocookie.net/naruto/images/6/67/%C5%8Cnoki.png/revision/latest?cb=20200328000054&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Фука",
            "image": "https://static.wikia.nocookie.net/naruto/images/1/1f/Fuuka.png/revision/latest?cb=20170416131633&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Хината",
            "image": "https://static.wikia.nocookie.net/naruto/images/7/79/Hinata_Part_II.png/revision/latest?cb=20150215152755&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Киллер Би",
            "image": "https://static.wikia.nocookie.net/naruto/images/6/63/Killer_B.png/revision/latest?cb=20190308210400&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Дейдара",
            "image": "https://static.wikia.nocookie.net/naruto/images/d/d3/Deidara_mugshot.png/revision/latest?cb=20170203125226&path-prefix=ru"
        },
        {
            "id": 2,
            "name": "Конохамару",
            "image": "https://static.wikia.nocookie.net/naruto/images/3/37/Konohamaru_Sarutobi.png/revision/latest?cb=20180922161835&path-prefix=ru"
        },
    ];

    // Отображение информации о каждом персонаже
    charactersData.forEach(character => {
        displayCharacter(character);
    });
    // Получаем данные из hero.js (предположим, что он возвращает массив имен персонажей)
    const characters = ['Хаширама Сенджу', 'Тобирама Сенджу', 'Хирузен Сарутоби', 'Минато Намиказе', 'Цунаде', 'Какаши Хатаке', 'Наруто Узумаки', 'Шикамару Нара', 'Шамон', 'Сандаймэ Кадзэкаге', 'Раса', 'Гаара', 'Бьякурен', 'Генгецу Хозуки', 'Хагоромо Ооцуцуки', 'Ягура', 'Мей Теруми', 'Чоуджуро', 'Эй', 'Даруи', 'Ишикава', 'Муу', 'Ооноки', 'Куроцучи'];

    // Выбираем все элементы списка
    const listItems = document.querySelectorAll('ol li');

    // Проходим по каждому элементу списка
    listItems.forEach(item => {
        // Проверяем, есть ли имя персонажа в массиве
        if (characters.includes(item.textContent)) {
            // Если имя персонажа найдено, добавляем класс highlighted
            item.classList.add('highlighted');
        }
    });
});

// Функция для отображения информации о персонаже
function displayCharacter(character) {
    if (character) {
        // Создаем контейнер для персонажа
        const characterContainer = document.createElement('div');
        characterContainer.classList.add('character-container');

        // Создаем элемент для изображения персонажа
        const imageElement = document.createElement('img');
        imageElement.src = character.image;
        imageElement.alt = character.name;
        
        // Устанавливаем стили для ограничения размера изображения
        imageElement.style.maxWidth = '150px';
        imageElement.style.maxHeight = '150px';
        
        // Добавляем изображение персонажа в контейнер
        characterContainer.appendChild(imageElement);

        // Создаем элемент для имени персонажа
        const nameElement = document.createElement('div');
        nameElement.textContent = character.name;
        characterContainer.appendChild(nameElement);

        // Добавляем контейнер с элементами персонажа в контейнер персонажей
        const charactersContainer = document.getElementById('characters-container');
        charactersContainer.appendChild(characterContainer);
        
    }
}