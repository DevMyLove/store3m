function Validation(formName) {
  formElement = document.querySelector(formName);
  //console.log(formElement.childNodes);
  var children = formElement.childNodes;
  for (let i = 0; i < children.length; i++) {
    // if (children[i].getAttribute("class")) {
    //   console.log(children[i]);
    // }
    //console.log(children[i].attributes)
    if (children[i].attributes != undefined) {
      //console.log(children[i].attributes["class"])
      if (children[i].attributes["class"].nodeValue.includes("text-input")) {
        //console.log(children[i])
        let childrenInput = children[i].childNodes;
        for (let j = 0; j < childrenInput.length; j++) {
          // console.log(childrenInput[j])
          if (
            childrenInput[j].tagName == "INPUT" &&
            childrenInput[j].attributes["name"] != undefined
          ) {
            console.log(childrenInput[j]);
            //console.log(childrenInput[j].attributes["name"].nodeValue);
            for (const key in Validator) {
              if (childrenInput[j].attributes["name"].nodeValue == key) {
                Validator[key](childrenInput[j]);
              }
            }
          }
        }
      }
    }
  }
}

const Validator = {
  username: function (selector) {
    let errorElement = selector.parentElement.querySelector(".form-message");
    selector.onblur = function () {
      if (!Checker.isRequired(selector) || !Checker.isEmail(selector)) {
        errorElement.classList.add("invalid");
      } else {
        errorElement.classList.remove("invalid");
      }
    };
  },
  password: function (selector) {
    let errorElement = selector.parentElement.querySelector(".form-message");
    selector.onblur = function () {
      if (!Checker.isRequired(selector) || !Checker.isPassword(selector)) {
        errorElement.classList.add("invalid");
      } else {
        errorElement.classList.remove("invalid");
      }
    };
  },
};

const Checker = {
  isRequired: function (selector) {
    return (selector.value.trim() == "") ? false : true;
  },
  isEmail: function (selector) {
    return selector.value.trim().match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  },
  isPassword: function(selector){
    return selector.value.trim().match(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    );
  }
};

Validation("#form-1");
