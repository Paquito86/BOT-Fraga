const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');

var prefix = "+";

client.once('ready', () => {
	console.log('Soy el BOT que asiste a Manuel Fraga Iribarne');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

if (command === 'fraga') {
	if (!args.length) {
		return message.channel.send(`¡${message.author}, no has añadido ningún argumento!`);
	}
	else if (args[0] === 'grande') {
		return message.channel.send('¡El Generalísimo <@354348926557618176> mucho más!');
    }
    else if (args[0] === `test`) {
        message.channel.send('Soy el BOT de don Manuel Fraga Iribarne. ¡Arriba España!');
    }
    else if (args[0] ==='aqui' || args[0] === 'aquí', args[1] === 'quien', args[2] === 'manda') {
        message.channel.send('Aquí manda don Francisco Franco AKA <@354348926557618176> ¡Arriba España! y ¡Viva Franco!');
    }
    else if (args[0] === 'info-usuario') {
        message.channel.send(`Tu nombre de usuario es: ${message.author.username}\nTu ID es: ${message.author.id}`);
    }
    else if (args[0] === 'muy',args[1] === 'bien') {
        message.channel.send('¡Gracias!');
    }
    else if (args[0] === 'cabron') {
        message.channel.send('Como osas insultar a la mano derecha del Generalísimo. A la próxima te mando a los gulags españoles');
    }
    else if (args[0] === 'gay') {
        message.channel.send('¡ALERTA! ¡ALERTA! Palabra prohibida. ¡Aquí va a haber que tomar medidas!');
    }
    else if (args[0] === 'Francisco', args[1] === 'Franco') {
        message.channel.send('Francisco Franco fue un gran hombre que ayudo a este país en la guerra del Rift y que ahora gobierna este país con la ayuda de dios');
    }
    else if (args[0] === 'marxista' || args[0] === 'comunista') {
        message.channel.send('La Virgen del Pilar dice\nQue no quiere ser marxista\nSino siempre Capitana\nDe la tropa falangista');
    }
    else if (args[0] === 'ayuda') {
        message.channel.send('Estos son los argumentos válidos:\n1. grande\n2. aquí quien manda/aqui quien manda\n3. info-usuario\n4. muy bien\n5. cabron\n6. gay\n7. Francisco Franco\n8. marxista/comunista.')
    }
    else {
        message.channel.send(`El argumento "${args[0]}", no es válido.\nPonga +fraga ayuda para ver los argumentos válidos.`);

    }
}
});
client.login('NzQ4NTMzMDI4MzIxNDkzMDIz.X0eztQ.7t9KxtSA09cwUMgudbkMX5-5d9s');