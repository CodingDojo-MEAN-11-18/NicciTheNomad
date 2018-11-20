module.exports = function () {
    return {
        add: function (num1, num2) {
            console.log(num1 + num2) ;
        },
        multiply: function (num1, num2) {
            console.log(num1 * num2) ;
        },
        square: function (num) {
            console.log(Math.pow(num,2));
        },
        random: function (num1, num2) {
            console.log(Math.floor((Math.random() * num2) + 1));
        }
    }
};
