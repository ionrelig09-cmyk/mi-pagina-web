function acceptCookies() {
    // 1. Ocultar el modal
    const modal = document.getElementById('cookieModal');
    modal.classList.add('hidden');

    // 2. Activar el "dano" visual
    document.body.classList.add('damaged-device');

    // 3. Cambiar el cursor y los colores
    setTimeout(() => {
        document.body.style.cursor = 'crosshair';
        document.body.style.backgroundColor = '#ff0000';
        document.body.style.color = '#ffff00';
        
        // Cambiar los estilos del contenedor principal
        const container = document.querySelector('.container');
        container.style.borderColor = '#ff0000';
        container.style.boxShadow = '0 0 30px #ff0000';
        container.style.animation = 'glitch 0.1s infinite';
        
        // Cambiar el título a estado de emergencia
        document.querySelector('h1').innerText = "¡SISTEMA COMPROMETIDO!";
        document.querySelector('h1').style.color = '#ff0000';
        document.querySelector('h1').style.textShadow = '0 0 10px #ff0000';
    }, 500); // Pequeño delay para que se vea el cierre del modal

    // 4. El final: Alarma y cambio de imagen
    setTimeout(() => {
        // Alerta que simula hackeo
        alert("¡Alto ahí! Tu dispositivo ha sido 'hackeado' por la base antártida. Ahora eres parte de la simulación.");
        
        // Cambio drástico de la imagen de fondo
        document.body.style.backgroundImage = "repeating-linear-gradient(45deg, #000 0px, #000 10px, #ff0000 10px, #ff0000 20px)";
    }, 1000);
}