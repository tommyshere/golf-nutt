const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = express.Router()
const userSchema = require('../models/User')
const authorize = require('../middlewares/auth')
const { check, validationResult } = require('express-validator')

//region Register User
router.post(
    '/register',
    [
        check('name')
            .not()
            .isEmpty()
            .isLength({ min: 2 })
            .withMessage('Name must be at least 2 Characters Long'),
        check('email', 'Email is required').not().isEmpty(),
        check('password', 'Password should be longer than 5 characters long')
            .not()
            .isEmpty()
            .isLength({ min: 5 }),
    ],
    (req, res, next) => {
        const errors = validationResult(req)
        console.log(req.body)
        if (!errors.isEmpty()) {
            return res.status(422).jsonp(errors.array())
        } else {
            bcrypt.hash(req.body.password, 10).then((hash) => {
                const user = new userSchema({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                    groups: [],
                })
                user.save()
                    .then((response) => {
                        res.status(201).json({
                            message: 'User successfully created!',
                            result: response,
                        })
                    })
                    .catch((error) => {
                        res.status(500).json({
                            error: error,
                        })
                    })
            })
        }
    }
)
//endregion

//region Sign-in
router.post('/signin', (req, res, next) => {
    let getUser
    userSchema
        .findOne({
            email: req.body.email,
        })
        .then((user) => {
            if (!user) {
                return res.status(401).json({
                    message: 'Authentication failed',
                })
            }
            getUser = user
            return bcrypt.compare(req.body.password, user.password)
        })
        .then((response) => {
            if (!response) {
                return res.status(401).json({
                    message: 'Authentication failed',
                })
            }
            let jwtToken = jwt.sign(
                {
                    email: getUser.email,
                    userId: getUser._id,
                },
                'longer-secret-is-better',
                {
                    expiresIn: '1h',
                }
            )
            res.status(200).json({
                token: jwtToken,
                expiresIn: 3600,
                _id: getUser._id,
                name: getUser.name,
            })
        })
        .catch((err) => {
            return res.status(401).json({
                message: 'Authentication failed',
            })
        })
})
//endregion

//region Get User
router.route('/user-profile/:id').get(authorize, (req, res, next) => {
    userSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data,
            })
        }
    })
})
//endregion
module.exports = router
