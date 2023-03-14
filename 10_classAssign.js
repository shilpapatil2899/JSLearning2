console.log(`1)  Class for Vehicle: `);
class Vehicle {
  constructor(carName, engine, fuel, avarage, price) {
    (this.carName = carName),
      (this.engine = engine),
      (this.fuel = fuel),
      (this.avarage = avarage),
      (this.price = price);
  }
}
let Fortuner = new Vehicle("Fortuner", 1200, "disel", 20, 250000);
let Toyota = new Vehicle("Glanza", 1000, "Ptrol", 22, 190000);
let MahindraThar = new Vehicle("Thar", 1200, "disel", 20, 30000);

console.log(Fortuner);
console.log(Toyota);
console.log(MahindraThar);

console.log(`2) Class for College: `);
class College {
  constructor(clgName, department, location, principal) {
    (this.clgName = clgName),
      (this.department = department),
      (this.location = location),
      (this.principal = principal);
  }
  details() {
    console.log(this.clg_name, this.department, this.location, this.principal);
  }
}
let Indira = new College("Indira", "pune", 7, "Dr. Janardan Pawar");
let Symboisis = new College("Symboisis", "pune", 5, "Dr. Vidya Yeravdekar");
let pccoe = new College("pccoe", "pune", 6, "Dr. Govind N. Kulkarni");

console.log(Indira);
console.log(Symboisis);
console.log(pccoe);


console.log(`3) Traverse Object by using for in loop`);
function traverseObject(Indira) {
  for (const key in Indira) {
    if (Object.hasOwnProperty.call(Indira, key)) {
      const element = Indira[key];
      console.log(`${key} : ${element}`);
    }
  }
}
traverseObject(Indira);
console.log(``);
traverseObject(Symboisis);
console.log(``);
traverseObject(pccoe);