//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            const val = e.target.value;
            
            if (val.length === 1 && index < 5) {
                inputs[index + 1].focused();
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace') {
				if(index > 0){
                inputs[index -1].focused();
            }
			}
        });
    });
