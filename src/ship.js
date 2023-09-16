class Ship {
    
  
    constructor(length, type) {
      this.length = length
      this.type = type
      this.hits = []
    }
  
   hit(position) {
    this.hits.push(position)
        return
      
    }
  
    sunk() {
        if (this.hits.length == this.length)
      return 'sunk'
    else {
       return 'not sunk'
    }
    }
  }

 

  export {
   Ship,
    
};