const schoolKnowledge = require("../knowledge/schoolData");

function generateReply(message) {

    const question = message.toLowerCase();

    if (question === "hello") {
        return "Hello! I'm MYCHA AI. How can I help you today?";
    }

    if (question === "who are you") {
        return "I'm MYCHA AI, your intelligent website assistant.";
    }

    if (question === "what can you do") {
        return "I can answer questions, guide users around websites, and in the future perform approved website actions.";
    }

    if (question === "school name") {
        return schoolKnowledge.schoolName;
    }

    if (question === "school fees") {
        return schoolKnowledge.fees.computerScience300;
    }

    if (question === "how do i check my result") {
        return schoolKnowledge.result;
    }

    if (question === "how do i apply") {
        return schoolKnowledge.admission;
    }

    if (question === "contact") {
        return schoolKnowledge.contact;
    }

    return "Sorry, I'm still learning. I'll be smarter soon!";
}

module.exports = {
    generateReply
};
