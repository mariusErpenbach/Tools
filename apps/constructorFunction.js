  //constructor function
  function Person(name,age,act){ 
    this.name = name;   
    this.age = age;     
    this.act = act; 
    this.printOut= function (){
        console.log(`${this.name}, you are never too old ${this.age} for ${this.act}`)
    }
}
let zain = new Person("Zain",26,["sleep"]);
zain.printOut
let olga = new Person("Olga",22,"No thing");
olga.printOut