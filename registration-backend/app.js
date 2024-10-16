require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Использование CORS
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Подключение маршрутов
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
    res.send('Сервер работает! Добро пожаловать!');
});

// Инициализация базы данных и создание таблиц
sequelize.sync({ alter: true })
    .then(() => console.log('База данных синхронизирована'))
    .catch((err) => console.error('Ошибка синхронизации базы данных:', err));

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
