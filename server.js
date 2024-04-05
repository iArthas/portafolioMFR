const express = require('express');
const app = express();
const path = require('path');

// Configurar middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Configurar middleware para servir archivos estáticos desde la carpeta 'views'
app.use(express.static(path.join(__dirname, 'views')));



// Definir las rutas para tus páginas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Manejar el formulario de contacto (ejemplo básico)
app.post('/contact', (req, res) => {
    // Aquí puedes manejar la lógica para guardar los datos del formulario en tu base de datos, enviar correos electrónicos, etc.
    // Después, redirige al usuario a la página de confirmación
    res.redirect('/confirmation.html');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});

const bodyParser = require('body-parser');

// Configura body-parser para analizar los datos del formulario
app.use(bodyParser.urlencoded({ extended: false }));

