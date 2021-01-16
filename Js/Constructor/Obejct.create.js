// Oncelikle eger iki ayri Yapici metod olusmus olursa ve ikisinin portotype ozelliklerini eslestirelim
// Eslesme sonrasinda atama yapilan prototype ozelligi her ikisnde de ortak oldugu icin
// yani A.prototype = B.prototype B'nin icindeki test = 1; degeri A tarafindan test =2; yapilirsa
// B'nin icindeki test degerinde degiseceginden bunlari referans degilde klonlama yontemi ile yaprasak
//degerler sabit kalir.!

function A() {}
A.prototype.test = 1;

function B() {}

B.prototype = A.prototype;

//A'yi duzenlemiyoruz B'degerini degistirmek isityoruz
B.prototype.test = 2;

console.log(new A().test); // 2 >> ama biz A degerini degistirmedik iste yukaridaki aciklama ornegi

//====================================================

function C() {}
C.prototype.test = 1;

function D() {}

D.prototype = Object.create(C.prototype);

console.log(new D().test); // 1 >> burda sadece C'yi D'ye klonlamis olduk. Referans vermedik

//======================================================

function Obj() {
  this.test1 = function () {
    console.log("Test 1");
  };
  this.test1 = function () {
    console.log("Test 1");
  };
}

// burda bir prototype olusturduk genel {} icerisinde'de test1,test2 degerleri mevcut onlarda ayri ayri protoytpe iceriyor
const newObj = Object.create(Obj);

//========================================================

function Person() {}
Person.prototype.test1 = function () {
  console.log("Test one ");
};
Person.prototype.test2 = function () {
  console.log("Test two ");
};

function Employee(name, age) {
  this.name = name;
  this.age = age;
}

Employee.prototype = Object.create(Person.prototype);

const emp = new Employee("m", 12345);
emp.test1();// Test One
emp.test2();// Test Two

