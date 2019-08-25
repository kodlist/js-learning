

// Date in js

class myDate extends Date {
  constructor() {
    super();
    console.log('this : '+ this);
  }

  getFormattedDate() {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    console.log('this : '+ this);
    console.log(this.getMonth());
    return this.getDate() + '-' + months[this.getMonth()] + '-' + this.getFullYear();
  }
}

console.log(new myDate().getFormattedDate());