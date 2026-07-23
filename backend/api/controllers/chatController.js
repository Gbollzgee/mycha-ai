const { generateReply } = require("../../ai/engine");

function chatController(req, res) {

    const message = "school fees";

    const reply = generateReply(message);

    return reply;
}

module.exports = {
    chatController
};
