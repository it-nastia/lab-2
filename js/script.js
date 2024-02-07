// Масив з даними про книги
let books = [
    {
        title: "Кобзар",
        author: "Тарас Шевченко",
        year: 1840
    },
    {
        title: "Хіба ревуть воли, як ясла повні?",
        author: "Панас Мирний",
        year: 1883
    },
    {
        title: "Маруся Чурай",
        author: "Григір Тютюнник",
        year: 1927
    },
    {
        title: "Земля",
        author: "Ольга Кобилянська",
        year: 1902
    },
    {
        title: "Чорна рада",
        author: "Леся Українка",
        year: 1910
    },
    {
        title: "Повість минулих літ",
        author: "Нестор Літописец",
        year: 1113 
    },
    {
        title: "Тигролови",
        author: "Іван Франко",
        year: 1883
    }
];


// Функція для створення книжкової картки
function createBookCard(book) {
    let card = document.createElement('div');
    card.className = 'collection__card card-book';

    let title = document.createElement('h5');
    title.className = 'card-book__title';
    title.textContent = book.title;

    let info = document.createElement('div');
    info.className = 'card-book__info';

    let author = document.createElement('p');
    author.className = 'card-book__author';
    author.innerHTML = `Автор: ${book.author}`;

    let year = document.createElement('p');
    year.className = 'card-book__year';
    year.innerHTML = `Рік: ${book.year}`;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Видалити';
    deleteButton.className = 'card-book__delete-btn';
    deleteButton.addEventListener('click', function() {
        // Видалення книги з масиву
        const index = books.indexOf(book);
        if (index !== -1) {
            books.splice(index, 1);
        }
        card.remove();
        console.log(books);
    });

    card.appendChild(title);
    card.appendChild(info);
    info.appendChild(author);
    info.appendChild(year);
    card.appendChild(deleteButton);

    return card;
}

// Oтримуємо елемент html контейнеру для книг
let collectionContainer = document.getElementById('bookCollection');


// Створюємо книжкові картки та додаємо їх на сторінку
books.forEach(book => {
    let bookCard = createBookCard(book);
    collectionContainer.appendChild(bookCard);
});



// Функция для додавання книги в массив та на строрінку
function addBook(event) {
    event.preventDefault(); 

    // Отримуємо дані з форми
    let titleInput = document.getElementById('title');
    let authorInput = document.getElementById('author');
    let yearInput = document.getElementById('year');
    if (!isValidYear(yearInput.value)) {
        alert('Введіть коректний рік видання книги.');
        return; 
    }
    // Створюємо об’єкт книги
    let newBook = {
        title: titleInput.value,
        author: authorInput.value,
        year: yearInput.value
    };

    // Додаємо книгу до масиву
    books.push(newBook);
    // Перевіряємо 
    console.log(books);

    // Додаємо картку книги на сторінку
    let bookCard = createBookCard(newBook);
    collectionContainer.appendChild(bookCard);

    // Очищаємо поля форми
    titleInput.value = '';
    authorInput.value = '';
    yearInput.value = '';
}

function isValidYear(year) {
    // Перевіряємо, чи є введене значення цілим число
    if (isNaN(year) ||  year % 1 !== 0) {
        return false; 
    }

    return true; 
}

let bookForm = document.getElementById('bookForm');

bookForm.addEventListener('submit', addBook);




/*

let books = [
    {
        title: "Кобзар",
        author: "Тарас Шевченко",
        year: 1840
    },
    {
        title: "Хіба ревуть воли, як ясла повні?",
        author: "Панас Мирний",
        year: 1883
    },
    {
        title: "Маруся Чурай",
        author: "Григір Тютюнник",
        year: 1927
    },
    {
        title: "Земля",
        author: "Ольга Кобилянська",
        year: 1902
    },
    {
        title: "Чорна рада",
        author: "Леся Українка",
        year: 1910
    },
    {
        title: "Повість временных лет",
        author: "Нестор Летописец",
        year: 1113 // Примерный год, точная дата неизвестна
    },
    {
        title: "Тигролови",
        author: "Іван Франко",
        year: 1883
    }
];


// Функция для создания карточки книги
function createBookCard(book) {
    let card = document.createElement('div');
    card.className = 'collection__card card-book';

    let title = document.createElement('h5');
    title.className = 'card-book__title';
    title.textContent = book.title;

    let info = document.createElement('div');
    info.className = 'card-book__info';

    let author = document.createElement('p');
    author.className = 'card-book__author';
    author.innerHTML = `Автор: ${book.author}`;

    let year = document.createElement('p');
    year.className = 'card-book__year';
    year.innerHTML = `Рік: ${book.year}`;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Видалити';
    deleteButton.className = 'card-book__delete-btn';
    deleteButton.addEventListener('click', function() {
        card.remove();
    });

    card.appendChild(title);
    card.appendChild(info);
    info.appendChild(author);
    info.appendChild(year);
    card.appendChild(deleteButton);

    return card;
}

// Получаем контейнер для карточек книг
let collectionContainer = document.getElementById('bookCollection');


// Создаем карточки книг и добавляем их в контейнер
books.forEach(book => {
    let bookCard = createBookCard(book);
    collectionContainer.appendChild(bookCard);
});



// Функция для добавления книги в массив и на страницу
function addBook(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем данные из формы
    let titleInput = document.getElementById('title');
    let authorInput = document.getElementById('author');
    let yearInput = document.getElementById('year');

    // Создаем объект книги
    let newBook = {
        title: titleInput.value,
        author: authorInput.value,
        year: yearInput.value
    };

    // Добавляем книгу в массив
    books.push(newBook);
    
    console.log(books);

    // Создаем и добавляем карточку книги на страницу
    let bookCard = createBookCard(newBook);
    collectionContainer.appendChild(bookCard);

    // Очищаем поля формы
    titleInput.value = '';
    authorInput.value = '';
    yearInput.value = '';
}

// Получаем форму
let bookForm = document.getElementById('bookForm');

// Добавляем обработчик события на отправку формы
bookForm.addEventListener('submit', addBook);






*/