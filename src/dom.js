

function createPlayerGrid (array) {
    console.log(array.board[0][0])

    for (let i=0; i<array.board.length; i++) {

        for(let y=0; y<array.board[i].length; y++) {
            
         const container = document.querySelector('#playerContainer');
         const grid = document.createElement('div');
        
         grid.classList.add('grid');

         if (
            typeof array.board[i][y] === 'object' 
        ) {
            grid.style.backgroundColor = 'grey'; 
        }

        if (
            array.board[i][y] === '*' 
        ) {
            grid.style.backgroundColor = 'red'; 
        }

        if (
            array.board[i][y] == 'x' 
        ) {
            grid.style.backgroundColor = 'green'; 
        }

        
         
         container.appendChild(grid);
        }
    
    }
    
    }

    function createComputerGrid (array) {
    

        for (let i=0; i<array.board.length; i++) {
    
            for(let y=0; y<array.board[i].length; y++) {
                
             const container = document.querySelector('#computerContainer');
             const grid = document.createElement('div');
            
             grid.classList.add('grid');

             if (
                typeof array.board[i][y] === 'object' 
            ) {
                grid.style.backgroundColor = 'grey'; 
            }
    
            if (
                array.board[i][y] === '*' 
            ) {
                grid.style.backgroundColor = 'red'; 
            }
    
            if (
                array.board[i][y] == 'x' 
            ) {
                grid.style.backgroundColor = 'green'; 
            }
             
             container.appendChild(grid);
            }
        
        }
        
        }

    export {
        createPlayerGrid,
        createComputerGrid,
    };

