# Deployment details
Il sito va incorporato al web server, per fare ciò sarà necessario:
- installare jquery `npm i jquery`
- tenere file .html in cartella views
- tenere file .css in ./public/style e .js in ./public/script
- aggiungere al server nodejs la riga `server.use(express.static(path.join(__dirname, 'public')));`
- sistemare gli endpoint del webserver
- aggiornare i riferimenti all'interno dei file .html ai file .css e .js, lasciando il percorso relativo partendo da /public
- aggiungere icona del sito

# TODO
se vuoi puoi mettere qui i todo