

//A property of an object can also refer to a function or a getter or setter method.


//{get prop() { ... } }
//{get [expression]() { ... } }

//{set prop(val) { . . . }}
//{set [expression](val) { . . . }}
//

let o = {
  property_a: function (prop_a) { console.log('---- line 14 6 ---- '+ prop_a)  ;  return prop_a  },
  get property() {  return 'mehar'},
  set property(prop_x) { console.log('---- lin e16 ---- '+ prop_x) ;  }
};


console.log(o.property)

o.property_a("krish");
console.log( o.property )
o.property = 'jane';
console.log( o.property )

// no connection between methods in get and set, those are just properties (name : value) pairs of object 'o'

