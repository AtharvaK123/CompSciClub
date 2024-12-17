let button = document.getElementById("button");
            button.addEventListener('click', () => {
                let heading = document.getElementById("headingID");
                let a = prompt("Insert Name");
                heading.innerText = a;
            });