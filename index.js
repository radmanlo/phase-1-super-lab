
class Tree {
    
    // Constructor
    constructor (species){
        this.species = species
    }

    // Static methods
    static definition (){
        return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
    }
}

class Deciduous extends Tree {

    // Constructor 
    constructor (species, name){
        super (species)
        this.name = name
    }

    // Static Method
    static definition(){
        return super.definition() + " Deciduous trees shed their leaves annually."
    }
}

class Evergreen extends Tree {
    
    // Constructor 
    constructor (species, name){
        super (species)
        this.name = name
    }

    // Static Method
    static definition(){
        return super.definition() + " Evergreens keep their leaves all year round."
    }
}