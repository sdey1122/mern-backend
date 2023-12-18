const orderValidationSchema = {
    userId: {
        notEmpty: {
            errorMessage: 'User ID is required'
        }
    },
    address: {
        notEmpty: {
            errorMessage: 'Address is required'
        }
    },
    paymentMode: {
        notEmpty: {
            errorMessage: 'Payment mode is required'
        }
    },
};

const orderCreateValidationSchema = {
    userId: orderValidationSchema.userId,
    address: orderValidationSchema.address,
    paymentMode: orderValidationSchema.paymentMode,
};

const orderUpdateValidationSchema = {
    userId: orderValidationSchema.userId,
    address: orderValidationSchema.address,
    paymentMode: orderValidationSchema.paymentMode,
};

module.exports = {
    orderCreateValidationSchema,
    orderUpdateValidationSchema
};