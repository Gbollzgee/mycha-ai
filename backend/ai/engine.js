function generateReply(message) {

    if (message.toLowerCase() === "hello") {
        return "Hello! I'm MYCHA AI. How can I help you today?";
    }

    if (message.toLowerCase() === "who are you") {
        return "I'm MYCHA AI, your intelligent website assistant.";
    }

    if (message.toLowerCase() === "what can you do") {
        return "I can answer questions, guide users around websites, and in the future perform approved website actions.";
    }

    return "Sorry, I'm still learning. I'll be smarter soon!";
}

module.exports = {
    generateReply
};
