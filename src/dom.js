

function createPlayerGrid (array) {
    
console.log(array.board[0].length)

    for (let i=0; i<array.board.length; i++) {

        for(let y=0; y<array.board[i].length; y++) {
            console.log(y)
         const container = document.querySelector('#container');
         const grid = document.createElement('div');
        
         grid.classList.add('grid');
         
         container.appendChild(grid);
        }
    
    }
    
    }

    export {
        createPlayerGrid,
    
    };

