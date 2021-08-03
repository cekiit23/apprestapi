'use strict';

exports.ok = (values, response) => {
    let data = {
        'status' : 200,
        'values' : values
    }

    response.json(data);
    response.end()
};