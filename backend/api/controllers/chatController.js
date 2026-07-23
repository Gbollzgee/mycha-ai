// Import the AI Engine
const { generateReply } = require("../../ai/engine");

// Chat Controller
function chatController(req, res) {

    // Example user message
    const message = "Hello";

    // Ask the AI Engine for a reply
    const reply = generateReply(message);

    // Send the reply
    return reply;
}

// Export the controller
module.exports = {
    chatController
};
