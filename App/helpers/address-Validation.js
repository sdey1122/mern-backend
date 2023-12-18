const addressValidationSchema = {
    userId: {
        notEmpty: {
            errorMessage: 'UserID is required'
        }
    },
    street: {
        notEmpty: {
            errorMessage: 'Street is required'
        }
    },
    city: {
        notEmpty: {
            errorMessage: 'City is required'
        }
    },
    state: {
        notEmpty: {
            errorMessage: 'State is required'
        }
    },
    postalCode: {
        notEmpty: {
            errorMessage: 'Postal Code is required'
        }
    },
};

const addressRegisterValidationSchema = {
    userId: addressValidationSchema.userId,
    street: addressValidationSchema.street,
    city: addressValidationSchema.city,
    state: addressValidationSchema.state,
    postalCode: addressValidationSchema.postalCode,
};

const addressCreateValidationSchema = {
    street: addressValidationSchema.street,
    city: addressValidationSchema.city,
    state: addressValidationSchema.state,
    postalCode: addressValidationSchema.postalCode,
};

const addressUpdateValidationSchema = {
    street: addressValidationSchema.street,
    city: addressValidationSchema.city,
    state: addressValidationSchema.state,
    postalCode: addressValidationSchema.postalCode,
};

module.exports = {
    addressRegisterValidationSchema,
    addressCreateValidationSchema,
    addressUpdateValidationSchema
};