//Global variables are in fact properties of the global object.
// In web pages, the global object is window, so you can set and access global variables using the 'window.variable' syntax.

//Consequently, you can access global variables declared in one window or frame from another window or frame by specifying the window or frame name. 
//For example, if a variable called phoneNumber is declared in a document, you can refer to this variable from an iframe as parent.phoneNumber.