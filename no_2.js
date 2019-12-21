function cekUsername(username) {
  if (username === username.toLowerCase() && username.length === 6) {
    console.log("Valid");
  } else console.log("Invalid");
}

function cekEmail(email) {
  if (email === email.toLowerCase() && email.includes("@")) {
    console.log("Valid");
  } else console.log("Invalid");
}

function cekPassword(password) {
  if (
    password.length >= 8 &&
    password !== password.toLowerCase() &&
    /\d/.test(password)
  ) {
    console.log("Valid");
  } else console.log("Invald");
}

cekUsername("rifqieka"); //invalid
cekEmail("kamusiapa@gmail.com"); //valid
cekPassword("Kamusiapa2169"); //valid
