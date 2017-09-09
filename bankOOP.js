function bank(){
    var customers = [];

    this.add_customer = function(name){
        customers.append(new customer(name));
    }
}        
        
function customer(name){
    var name = name;
    var balance = 0;

    this.deposit = function(amount){
        balance = balance + amount;    
    }
    this.withdraw = function(amount){
        balance = balance - amount;
    }
}