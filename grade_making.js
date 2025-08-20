function grade(mark) {
  if (mark < 0) {
    console.log("Invalid Marks");
  } else if (mark < 40) {
    console.log("Failed");
  } else if (mark < 50) {
    console.log("D");
  } else if (mark < 60) {
    console.log("C");
  } else if (mark < 70) {
    console.log("B");
  } else if (mark < 75) {
    console.log("A-");
  } else if (mark < 80) {
    console.log("A");
  } else if (mark <= 100) {
    console.log("A++");
  } else {
    console.log("Invalid Marks");
  }
}

const mark = 30;

grade(mark);
