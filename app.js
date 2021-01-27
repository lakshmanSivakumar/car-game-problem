const startBtn = document.querySelector('.startBtn');
const gameStatus = document.querySelector('.gameStatus');
let click = 0, move = 0, cumulativePosition = 0, position = 0, petrolRemaining = 30;
let petrolPumps = [], html = '';

//generating 5 random petrol pumps on the road
function generateRandomPetrolPumps() {
    while(petrolPumps.length < 5) {
        let r = Math.floor(Math.random() * 100) + 1;
        if(petrolPumps.indexOf(r) === -1)
            petrolPumps.push(r);
    }
}
generateRandomPetrolPumps();

//sorting the 5 random petrol pumps on the road
petrolPumps.sort((a, b) =>  a - b);

startBtn.addEventListener('click', startGame);

function startGame () {
    click += 1;
    if(click === 2) {
    
        click = 0, move = 0, cumulativePosition = 0, position = 0, petrolRemaining = 30;
        petrolPumps = [], html = '';

        gameStatus.innerHTML = html;

        generateRandomPetrolPumps();

        petrolPumps.sort((a, b) =>  a - b);
    }

    while(petrolRemaining >= 0) {

        move++;
        position = Math.floor(Math.random() * 6) + 1;
        cumulativePosition += position;
        petrolRemaining -= position;
        
        if(petrolRemaining < 0) {
            gameStatus.lastElementChild.innerHTML = `<h3>Move ${move-1} - Car at ${cumulativePosition-position}, remaining ${petrolRemaining+position}, game over</h3>`;
            break;
        }

        if(petrolPumps.indexOf(cumulativePosition) != -1)
            petrolRemaining += 20;
            
        html = `<h3>Move ${move} - Car at ${cumulativePosition}, petrol remaining ${petrolRemaining}</h3>`;

        if(cumulativePosition >= 100) {
            html = `<h3>Move ${move} - Car at ${cumulativePosition}, petrol remaining ${petrolRemaining} , reached the destination</h3>`;
        }

        gameStatus.innerHTML += html;
    }
}
