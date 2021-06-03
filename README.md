# nginx_reverse_proxy_studio
Studio su come usare nginx come reverse proxy 

## Articoli di riferimento:

- 1. qui ci sono informazioni base che ho usato per configurare nginx:
https://flaviocopes.com/nginx-reverse-proxy/

- 2. anche qui ci sono informazioni, ma è datato, l'esempio node funziona, ma la configurazione nginx non funziona:
https://www.tecmint.com/nginx-as-reverse-proxy-for-nodejs-app/

- 3. qui altri dettagli:
https://www.linode.com/docs/guides/use-nginx-reverse-proxy/

## Descrizione

- Ho creato due app nginx che rispondono su due porte diverse: 
-- max: '/var/www/html/max/server.js' che risponde su: 'http://192.168.1.147:1964/max'
-- sysmon: '/var/www/html/sysmon/server.js' che risponde su: 'http://192.168.1.147:5000/sysmon'

(ho preso il codice dal secondo articolo)

- Ho configurato nginx ispirandomi all'articolo 1.
-- ho modificato: '/etc/nginx/sites-available/default' aggiungendo due semplici location:

    
    location / {
        # First attempt to serve request as file, then
        # as directory, then fall back to displaying a 404.
        try_files $uri $uri/ =404;
    }

    location /max {
        proxy_pass http://192.168.1.147:1964/;
    }

    location /sysmon {
        proxy_pass http://192.168.1.147:5000/;
    }
    

- Ho creato un HTML di test '/var/www/html/testproxy.html' aggiungendo uno script che chiama le due app via fetch e scrive le risposte sulla console

Dato che il mio server ha indirizzo '192.168.1.147' per vedere l'HTML basta chiamare:
    'http://192.168.1.147/testproxy.html'
e le app, grazie al reverse proxy, rispondono su:
    'http://192.168.1.147/max' 
e 
    'http://192.168.1.147/sysmon' 
senza specificare alcuna porta.






