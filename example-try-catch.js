function doWork() {
          throw new Error('unable to do work');
}
try{
doWork();
} 
catch(e){
  console.log(e.message);
  
}
finally{

          console.log('finally executed');
          
}