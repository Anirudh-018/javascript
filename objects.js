//object direct definition
/*var car={
    name :'alto',
    brand :'maruti',
    price:'350000',
    specs:function(){
        document.write("<h1>specifications of the care are "+this.name+this.brand+this.price+"</h1>");
    }

}
car.specs();*/
//using constructor class
function cars(name,brand,price){
    this.name=name;
    this.brand=brand;
    this.price=price;
    this.specs=function(){
        alert(this.name);
        alert(this.price);
        alert(this.brand);
        document.write("<h1>specifications of the care are "+this.name+this.brand+this.price+"</h1>");
    }
}
var c1=new cars('alto','maruti',35000);
var c2=new cars('tigor','tata',45000);
c1.specs();
c2.specs();