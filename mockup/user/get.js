exports.timeout = 2000;
exports.response = function () {
    return {
        success: 1,
        body: {
            username: "admin"
        }
    };
};
