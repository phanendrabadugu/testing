
// class employee{
  
  
//   constructor(id,age,salary,name,dep)
//   {
//     this.id=id
//     this.salary=salary
//     this.name=name
//     this.dep=dep
//     this.age=age
    
    
//   }
  
//   aftertax()
//   {
//     let tax=""
//     if(this.dep=="cse" && this.salary> 20000)
//     {
//       tax=0.5
//     }
    
//     else if(this.dep=="mec" && this.salary >20000 )
//     {
      
//       tax=0.4
//     }
    
//     else if(this.dep=="mec" && this.salary < 20000 )
//     {
      
//       tax=0.3
//     }
//     else if(this.dep=="cse" && this.salary< 20000)
//     {
//       tax=0.2
//     }
//     else{
//      tax=0.1 
//     }
//     let final_salary=(1-tax)*this.salary
//     return final_salary+this.seniorbonus()+this.diwalibonus()
    
    
//   }
  
  
//   seniorbonus(){
//     let bonus=""
//     if(this.age>60&&this.dep=="cse"){
//       bonus=1000
//     }
//     else if(this.age>60&&this.dep=="mec"){
//       bonus=500
//     }
//     else{
//       bonus=100
//     }
//     return bonus
//   }
  
//   diwalibonus(){
    
//     let bonus=""
    
//     if(this.dep="cse"){
//       bonus=0
//     }
//     else if(this.dep="mec"){
//       bonus=1000
//     }
//     else{
//       bonus=100
//       }
//       return bonus
//   }
  
// }

// let emp1= new employee(1,61, 20000,"phani","mec")
// console.log(emp1.aftertax())




class fashion{

constructor(shirt, trouser, shoes, rating, review){
  this.shirt=shirt
  this.trouser=trouser
  this.shoes=shoes
  this.rating=rating
  this.review=review
}

combination(){
  let ratings = ""
  if(this.shirt=="whiteshirt" && this.trouser=="blacktrouser" && this.shoes=="whiteshoes" ){
     ratings=10
  }else{
    ratings=0
  }
 this.rat=ratings
 return ratings +" "+ this.views()
}


views(){
  let rev=""

  if(this.rat==10){
    rev="great combination"
  }else{
    rev="worst combination"
  }
return rev
}

}


let style = new fashion("whiteshirt", "blacktrouser", "whiteshoes", 9)
console.log(style.combination())





//use case to caluclate interest
//CLASS TO Caluclate interest in a bank  

class Caluclateinterest{
  constructor(initialamount,rate,time){
    this.initialamount = initialamount;
    this.rate=rate;
    this.time= time*12;
    this.stime=36;
    this.ctime=this.time-this.stime;
  }


interest(){
  let int =""; 
   int = (this.initialamount*this.time*this.rate)/100;
   
  return int + this.initialamount;


  class basketball_score{
    constructor(freethrows,twopointers,threepointers){
      this.freethrows= freethrows;
      this.twopointers= twopointers;
      this.threepointers=threepointers;
    }
    
    total_Score(){
      let score = "";
      if(this.freethrows >= 0 && this.twopointers >=0 && this.threepointers >=0){
       score = 1 * this.freethrows +  2 * this.twopointers + 3 * this.threepointers;
        return score + " "+ this.players(score);
      }
    }
    
   players(score){
     let best="";
     if(score > 15)
     
     {best = "best player"}
    else 
      {best = "worse player"}
     
     return best;
   }
   
     
  }
  let points = new basketball_score(1,1,6)
    
    console.log(points.total_Score());
  