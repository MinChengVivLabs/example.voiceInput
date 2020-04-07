module.exports.function = function tryOneQuestion (mode, userVoiceAnswer, question) {
  return userVoiceAnswer === question.correctAnswer ? "correct" : "incorrect";
}
