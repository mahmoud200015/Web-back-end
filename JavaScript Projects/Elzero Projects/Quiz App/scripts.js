
// ----------
// understand the idea from (1 minute from video) then youe solve it the revsion on video lastly
// ----------
function getQuestions() {
  let myRequest = new XMLHttpRequest();
  myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(typeof this.responseText);
      let questions = JSON.parse(this.responseText);
      console.log(questions)
    }
  }
  myRequest.open("Get", "questions.json", true);
  myRequest.send();
  // console.log(myRequest);
}

getQuestions();