const btn = document.querySelector("#btn");


//registrations
register = () => {
  let doRegister = true;
  const nameInputValue = document.querySelector("#userName").value;


// set local storage
  proceedRegister = () => {
    if (doRegister) {
      const UserName = localStorage.setItem("Name", nameInputValue);
    }
  };

  if (nameInputValue.length < 3) {
    alert(`it will be better if u kepp at least 4 letter name insted of
     ${nameInputValue.length} letters`);
    doRegister = false;
  } else {
    doRegister = true;
    proceedRegister();
    alert(` register name =  ${localStorage.getItem("Name")}`)
  }
  
};



