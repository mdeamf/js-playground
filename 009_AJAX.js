/**
 * AJAX
 * "There's no point in creating a modern application without a back-end."
 * - Someone, probably, I don't know.
 * 
 * AJAX (Asynchronous JavaScript and XML) is a technique to make your
 * application connect with a WebService, API, or just to download
 * and use dynamic content. Despite the name, it works with things
 * other than XML.
 * To follow with this content, you need to understand how HTTP Requests
 * work. I recommend doing some research before proceeding.
 */

// Classic AJAX call uses XMLHttpRequest.
// Nowadays, there are multiple libraries, specially if you use a Framework.

// Creating our AJAX Object.
var ajaxRequest = new XMLHttpRequest();

// Defining our function for the case of the state of the object changing. It needs to be defined beforehand.
// This is a listener - which means it will stay in "stand-by" waiting to fire, until the "send()" method runs.
ajaxRequest.onreadystatechange = function () {
  // readyState == 4 => DONE
  // status == 200 => SUCCESS
  // Therefore, we're checking if it was done, and if it was successful.
  if (this.readyState == 4 && this.status == 200) {
    // This will print the JSON that was received.
    console.log(this.responseText);
  }
};

// Define what our object will do.
ajaxRequest.open("GET", "https://www.mocky.io/v2/5185415ba171ea3a00704eed", true);

// Run our request.
ajaxRequest.send();

// IMPORTANT: This code will not work on Node, since XMLHttpRequest is a class that exists inside browsers.
// I recommend testing this on a HTML file, with a <script> tag, or on https://js.do.