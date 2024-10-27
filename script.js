const countdownElement = document.getElementById('countdown');

const displayNumber = (number, callback) => {
    countdownElement.innerText = number;
    // Using setTimeout to create a delay for the next countdown number
    setTimeout(() => {
        callback();
    }, 1000);
};

// Initiating the countdown with callback hell
displayNumber(10, () => {
    displayNumber(9, () => {
        displayNumber(8, () => {
            displayNumber(7, () => {
                displayNumber(6, () => {
                    displayNumber(5, () => {
                        displayNumber(4, () => {
                            displayNumber(3, () => {
                                displayNumber(2, () => {
                                    displayNumber(1, () => {
                                        countdownElement.innerText = "Happy Independence Day!";
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
