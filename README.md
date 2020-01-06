#JSCallbacks
JavaScript Callback Pill

## Task
1. Create a new Javascript project
To understand what a callback is, you first need to understand why you need to use them. To do this, create a script with the following content and run it:

```
function a(){
  console.log("Se ha ejecutado la función a");
}

function b(){
  console.log("Se ha ejecutado la función b");
}

a();
b();
```

As you can see, the following messages will be displayed by console:

**The function has been executed**

**Function b has been executed**

Then modify the a function so that it has a waiting time in its execution by using the javascript setTimeout function:

```
function a(){
  // Simulamos un tiempo de espera en la ejecución de la función a
  setTimeout( function(){
    console.log("Se ha ejecutado la función a");
  }, 1000 );
}

function b(){
  console.log("Se ha ejecutado la función b");
}

a();
b();
```

What happens if you run the code now? If you really want to execute function a first, and when it finishes executing function b, you will have to modify the script and make use of callbacks.

Update the implemented script using the callbacks so that function b is only executed if function a has previously been executed and completed.
Next, look for 5 real cases where the use of callbacks is necessary and clearly exemplify their need for use.

## Requirements
- You must use GIT
- Create a clear and orderly directory structure
- Both the code and the comments must be written in English
- Use the camelCase code style to define variables and functions
- In the case of using HTML, never use online styles
- In the case of using different programming languages ??always define the implementation in separate terms
- Remember that it is important to divide the tasks into several sub-tasks so that in this way you can associate each particular step of the construction with a specific commit
- You should try as much as possible that the commits and the planned tasks are the same
- Delete files that are not used or are not necessary to evaluate the project

## Delivery
- This repo
- You must create a correctly documented README file in the root directory of the project (see guidelines in Resources)
- Documentation of the pill in PDF format
- Presentation of the pill in PDF format


## Resources
* [Javascript Callbacks Mozilla](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
* [Sample guide for README](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)

## Author
Alfonso De La Guardia




