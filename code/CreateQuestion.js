module.exports.function = function createQuestion (mode) {
  var rslt;
  // rslt = {
  //   textQuestion: "Here is the default question",
  //   answerChoice: ["A: as apple", "B: as boy", "C: as checkmate and is correct", "D: as delta"], 
  //   correctAnswer: "C",
  // }
  // if (mode==1) {
    rslt = {
      textQuestion: "What is the color of sky?",
      answerChoice: [
        {letter: "A", answer: "Blue"}, 
        {letter: "B", answer: "Red"}, 
        {letter: "C", answer: "Yellow"}, 
        {letter: "D", answer: "Green"}],
      correctAnswer: "A",
      source: "GitLab",
    }
  // }
  return rslt;
}
