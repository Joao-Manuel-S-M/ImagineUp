const express = require("express");
const bodyParser = require("body-parser");
const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: "*", // Allow all origins
		methods: ["GET", "POST"], // Allow specific HTTP methods (optional)
	},
});
const port = 3000;

io.on("connection", (socket) => {
	if (!socket.recovered) console.log("Alguem se conectou");
});

const apiId = 29559675;
const apiHash = "408eef6090d95489cdb4308dc6324caa";
const botToken = "6470658225:AAE5INIUR3JqQoBcfL_RzxNlZsSfHhL4vJI";
const stringSession = "";

// const username = "joaomanuelsm"; // Substitua pelo username correto

const client = new TelegramClient(
	new StringSession(stringSession),
	apiId,
	apiHash,
	{ connectionRetries: 5 }
);

// Middleware para processar dados JSON
app.use(bodyParser.json());

app.use(cors());

// Rota para receber mensagens do frontend
app.post("/enviar-mensagem", async (req, res) => {
	const { username } = req.body;
	const { mensagem } = req.body;

	try {
		// Envie a mensagem para o Telegram
		await client.invoke(
			new Api.messages.SendMessage({
				peer: username,
				message: mensagem,
			})
		);

		res.json({ success: true, message: "Mensagem enviada com sucesso." });
	} catch (error) {
		console.error("Erro ao enviar mensagem:", error);
		res
			.status(500)
			.json({ success: false, message: "Erro ao enviar mensagem." });
	}
});

client.addEventHandler(async (update) => {
    if (update instanceof Api.UpdateNewMessage) {
        const message = update.message;

        const senderId = message.peerId.userId;
        const messageId = message.id;
        const messageText = message.message;

        if (senderId) {
            const user = await client.getEntity(senderId);

            io.emit("newMessage", { username: user.username, text: messageText });
        }
    }
});

// Inicie o servidor
server.listen(port, () => {
	console.log(`Servidor iniciado em http://localhost:${port}`);
});

// Inicie o cliente do Telegram
(async () => {
	await client.start({
		botAuthToken: botToken,
	});
})();
