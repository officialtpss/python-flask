function onAnalyzeSentiment() {
    const text = $('#userText').val().trim();

    if (!text) {
        $('#sentimentResult h2').text('Please enter some text!');
        return;
    }

    // Simulate API response (Replace with real API call if needed)
    const positiveWords = ['good', 'happy', 'awesome', 'love', 'great'];
    const negativeWords = ['bad', 'sad', 'hate', 'terrible', 'angry'];

    let score = 0;
    const words = text.toLowerCase().split(/\s+/);

    words.forEach(word => {
        if (positiveWords.includes(word)) score++;
        if (negativeWords.includes(word)) score--;
    });

    let result;
    if (score > 0) {
        result = '😊 Positive Sentiment';
    } else if (score < 0) {
        result = '☹️ Negative Sentiment';
    } else {
        result = '😐 Neutral Sentiment';
    }

    $('#sentimentResult h2').text(result);
}
