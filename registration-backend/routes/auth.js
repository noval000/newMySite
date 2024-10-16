const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const auth = require('../middleware/auth');
require('dotenv').config();

const router = express.Router();

// Вход пользователя
router.post(
    '/login',
    [
        check('username', 'Имя пользователя обязательно').not().isEmpty(),
        check('password', 'Пароль обязателен').exists(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log('Ошибки валидации:', errors.array());
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, password } = req.body;

        try {
            console.log('Поиск пользователя с именем:', username); // Логирование поиска пользователя
            let user = await User.findOne({ where: { username } });
            if (!user) {
                console.log('Пользователь не найден');
                return res.status(400).json({ errors: [{ msg: 'Неверные учетные данные' }] });
            }
            console.log('Пользователь найден, проверка пароля'); // Логирование перед сравнением пароля
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ errors: [{ msg: 'Неверные учетные данные' }] });
            }

            const payload = {
                user: {
                    id: user.id,
                },
            };

            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
            console.log('Токен отправляется:', token); // Логирование для проверки
            res.json({ token });

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Ошибка сервера');
        }
    }
);

// Регистрация пользователя
router.post(
    '/register',
    [
        check('username', 'Имя пользователя обязательно').not().isEmpty(),
        check('email', 'Введите корректный адрес электронной почты').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, email, password, nameOrganisation, backupEmail, phone } = req.body;

        try {
            let user = await User.findOne({ where: { email } });
            if (user) {
                return res.status(400).json({ errors: [{ msg: 'Пользователь уже существует' }] });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            user = await User.create({
                username,
                email,
                password: hashedPassword,
                nameOrganisation,
                backupEmail,
                phone
            });

            const payload = {
                user: {
                    id: user.id,
                },
            };

            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Ошибка сервера');
        }
    }
);



// Маршрут для получения данных текущего пользователя
router.get('/me', auth, async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, {
            attributes: ['id', 'isAdmin', 'username', 'phone', 'backupEmail', 'nameOrganisation'] // Выберите нужные поля
        });
        if (!user) {
            return res.status(404).json({ msg: 'Пользователь не найден' });
        }

        // Создаем объект с нужными данными
        const userData = {
            id: user.id,
            isAdmin: user.isAdmin,
            username: user.username,
            phone: user.phone,
            backupEmail: user.backupEmail,
            nameOrganisation: user.nameOrganisation
        };

        res.json(userData);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
});


router.post(
    '/update',
    [
        auth, // Middleware для проверки авторизации
        check('phone', 'Некорректный номер телефона').optional().isMobilePhone(),
        check('company', 'Название компании обязательно').optional().not().isEmpty(),
        check('backupEmail', 'Некорректный адрес электронной почты').optional().isEmail(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { phone, nameOrganisation, backupEmail } = req.body;

        try {
            const user = await User.findByPk(req.user.id);
            if (!user) {
                return res.status(404).json({ msg: 'Пользователь не найден' });
            }

            // Обновление данных пользователя
            user.phone = phone || user.phone;
            user.nameOrganisation = nameOrganisation || user.nameOrganisation;
            user.backupEmail = backupEmail || user.backupEmail;

            await user.save();

            res.json({ msg: 'Информация обновлена успешно', user });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Ошибка сервера');
        }
    }
);



module.exports = router;
