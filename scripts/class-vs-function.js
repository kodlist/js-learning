

// function in javascript. it can also be initiated with 'new'  eg: new Podcast();

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




/*--------------------------------*/

//class

var Foo = class NamedFoo {
  constructor() {}
  whoIsThere() {
    return NamedFoo.name;
  }
}
var bar = new Foo();
console.log(' ---- line 49 ---- ' + bar.whoIsThere()); // "NamedFoo"


///console.log(NamedFoo.name); // ReferenceError: NamedFoo is not defined
Foo.name; // "NamedFoo"

var Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
}

console.log(new Rectangle(5,8).area());
// expected output: 40
console.log(Rectangle.name);