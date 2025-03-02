const GREETINGS = [
    "BIENVENIDO!",
    "All hands on deck! - METI MODIFICACION",
    "Charting the course ahead! Vamo pa adelante",
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length )],
    });
};
