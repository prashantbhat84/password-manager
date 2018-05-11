
// for  command line  install yargs using npm install.
var argv =require('yargs')
.command('hello', 'greets the user',function (yargs) {
          yargs.options({
                    name: {
                         demand: true ,
                         alias:  'n' ,
                         description: 'your first name goes here' 
                    },
                    lastname:{
                      demand: true,
                      alias: 'l',
                      description: ' your last name'
                    }
          }).help('help');
})
.help('help')
.argv;
console.log(argv);
var command = argv._[0];
if (command =="hello" && typeof argv.name != 'undefined' && typeof argv.lastname != 'undefined') {
          console.log('hello'+ ' '+ argv.name + ' '+ argv.lastname);
          
          
}else if(command =='hello' && typeof argv.name != 'undefined'){
          console.log('hello'+ ' '+ argv.name);
          
}else if(command === 'hello')
{
          console.log('hello world');
          
}
