

function createPlayerGrid (array) {
    

    for (let i=0; i<array.board.length; i++) {

        for(let y=0; y<array.board[i].length; y++) {
            
         const container = document.querySelector('#container');
         const grid = document.createElement('div');
        
         grid.classList.add('grid');
         
         container.appendChild(grid);
        }
    
    }
    
    }

    function createComputerGrid (array) {
    

        for (let i=0; i<array.board.length; i++) {
    
            for(let y=0; y<array.board[i].length; y++) {
                
             const container = document.querySelector('#container');
             const grid = document.createElement('div');
            
             grid.classList.add('grid');
             
             container.appendChild(grid);
            }
        
        }
        
        }

    export {
        createPlayerGrid,
        createComputerGrid,
    };

