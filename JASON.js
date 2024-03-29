let str = process.argv[2];
if (!checkArray(str)) {
  console.log("Invalid JSON string");
  return;
}
checkObj;
if (!checkObj(str)) {
  console.log("Invalid JSON string");
  return;
}

if (!validP()) {
  console.log("Invalid JSON string ");
  return;
}
str = str.replace(/\\["\\\/bfnrtu]/g, "");
//console.log(str);
str = str.replace(
  /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  ""
);
//console.log(str);

str = str.replace(/(?:^|:|,)(?:\s*\[)+/g, "");
//console.log(str);

if (/^[\],:{}\s]*$/.test(str)) {
  console.log("Valid JSON string ");
} else {
  console.log("Invalid JSON string");
}

function validP() {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "{" || str[i] == "[") {
      arr.push(str[i]);
    } else if (str[i] == "}" || str[i] == "]") {
      if (arr.length == 0) {
        return false;
      } else if (str[i] == "}") {
        if (arr[arr.length - 1] == "{") {
          arr.pop();
        } else {
          return false;
        }
      } else if (str[i] == "]") {
        if (arr[arr.length - 1] == "[") {
          arr.pop();
        } else {
          return false;
        }
      }
    }
  }
  if (arr.length != 0) {
    return false;
  }
  return true;
}

function checkArray(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] == ",") {
      let j = i + 1;
      while (j < str.length - 1 && str[j] == " ") {
        j++;
      }
      if (str[j] == "]" || str[j] == "}") {
        return false;
      }
    } else if (str[i] == "[" || str[i] == "{") {
      j = i + 1;
      while (j < str.length - 1 && str[j] == " ") {
        j++;
      }
      if (str[j] == ",") {
        return false;
      }
    }
  }
  return true;
}

function checkObj(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] == ":") {
      let j = i + 1;
      while (j < str.length - 1 && str[j] == " ") {
        j++;
      }
      if (str[j] == "}") {
        return false;
      }
    } else if (str[i] == "{") {
      j = i + 1;
      while (j < str.length - 1 && str[j] == " ") {
        j++;
      }
      if (str[j] == ":") {
        return false;
      }
    }
  }
  return true;
}
