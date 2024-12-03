// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.
function countWordOccurrences(sentence, word) {
    var words = sentence.toLowerCase().split(" ");
    var targetWord = word.toLowerCase();
    var count = 0;
    words.forEach(function (word) {
        if (word === targetWord) {
            count++;
        }
    });
    return count;
}
