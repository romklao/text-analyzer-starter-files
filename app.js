function tokenizeText(text) {
    return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function getAverageWordsPerSentence(text) {
    var numSentences = text.match(/[.!?]+/g) ? text.match(/[.!?]+/g).length : 1;
    var wordCount =  tokenizeText(text).length;
    return (wordCount / numSentences).toFixed(3);
}

function getAverageWordLength(tokens) {
    var totalLength = tokens.join("").length;
    return (totalLength / tokens.length).toFixed(3);
}

function CountdistinctWords(tokens){
    var distinctWords = [];
    for(var i=0; i<tokens.length; i++) {
        if (distinctWords.indexOf(tokens[i]) === -1) {
            distinctWords.push(tokens[i]);
        }
    }
    return distinctWords.length;
}

function removeReturns(text) {
    return text.replace(/\r?\n|\r/g, "");
}

function displayOnText(text) {
    var tokens = tokenizeText(text);
    var numDistinctWords = CountdistinctWords(tokens);
    var numTotalWords = tokens.length;
    var averageWordLength = getAverageWordLength(tokens);
    var averageWordsPerSentence = getAverageWordsPerSentence(text);

    var textDisplay = $('.js-text-report');
    textDisplay.find('.js-word-count').text(numTotalWords);
    textDisplay.find('.js-unique-word-count').text(numDistinctWords);
    textDisplay.find('.js-average-word-length').text(averageWordLength + " characters");
    textDisplay.find('.js-average-sentence-length').text(averageWordsPerSentence + " words");
    textDisplay.removeClass('hidden')
}

function formSubmission() {
    $('.js-text-form').click(function(event) {
        event.preventDefault();
        var userText = $(this).find('#user-text').val();
        displayOnText(removeReturns(userText));
    });
}

$(document).ready(function() {
    formSubmission();
});

















