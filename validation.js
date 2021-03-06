//Validation
const Joi = require('@hapi/joi');
exports.registerValidate = (data)=>{

    const schema = Joi.object({
        name: Joi.string().min(2).max(100).required(),
        surname: Joi.string().min(2).max(100).required(),
        email: Joi.string().max(100).required(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
}
exports.loginValidate = (data)=>{

    const schema = Joi.object({
        email: Joi.string().max(100).required(),
        password: Joi.string().min(6).required(),
    });

    return schema.validate(data);
}
exports.reservationValidate = (data)=>{

    const schema = Joi.object({
        email: Joi.required(),
        firstName: Joi.required(),
        guestNumber: Joi.required(),
        lastName: Joi.required(),
        phone: Joi.required(),
        time: Joi.required(),
    });

    return schema.validate(data);
}

