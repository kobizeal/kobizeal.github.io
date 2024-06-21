const pressedButtons = []; // Array to store pressed buttons

        // Add event listeners to fret buttons
        const fretButtons = document.querySelectorAll('.fret');
        fretButtons.forEach(button => {
            button.addEventListener('click', () => {
                const stringNumber = button.getAttribute('data-string');
                if (!pressedButtons.includes(stringNumber)) {
                    pressedButtons.push(stringNumber);
                } else {
                    pressedButtons.splice(pressedButtons.indexOf(stringNumber), 1);
                }
                updatePressedButtonsDisplay();
            });
        });

        // Update the display of pressed buttons
        function updatePressedButtonsDisplay() {
            const pressedButtonsContainer = document.querySelector('.pressed-buttons');
            if (pressedButtonsContainer) {
                pressedButtonsContainer.textContent = `Pressed strings: ${pressedButtons.join(', ')}`;
            } else {
                console.error("The '.pressed-buttons' container was not found.");
            }
        }