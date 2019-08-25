
// there is no concept of static variables.


function Person(){
  if(Person.count == undefined){
    Person.count = 1;
  }
  else{
    Person.count ++;
  }
  console.log(Person.count);
}

var p1 = new Person();
var p2 = new Person();
var p3 = new Person();



function Podcast() {

    // private variables
    var _somePrivateVariable = 123;

    // object properties (read/write)
    this.title = 'Astronomy Cast';
    this.description = 'A fact-based journey through the galaxy.';
    this.link = 'http://www.astronomycast.com';

    // for read access to _somePrivateVariable via immutableProp 
    this.immutableProp = function() {
        return _somePrivateVariable;
    }

    // object function
    this.toString = function() {
       return 'Title: ' + this.title;
    }
};

// static property
Podcast.FILE_EXTENSION = 'mp3';
// static function
Podcast.download = function(podcast) {
    console.log('Downloading ' + podcast + ' ...');
};

//Given that example, you can access the static properties/function as follows:


// access static properties/functions
console.log(Podcast.FILE_EXTENSION);                // 'mp3'
Podcast.download('Astronomy cast');    // 'Downloading Astronomy cast ...'


//And the object properties/functions simply as:
// access object properties/functions
var podcast = new Podcast();
podcast.title = 'The Simpsons';
console.log(podcast.toString());       // Title: The Simpsons
console.log(podcast.immutableProp());  // 123




