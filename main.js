let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Previene la aparición automática del cuadro de instalación
  e.preventDefault();
  
  // Guarda el evento para usarlo más tarde
  deferredPrompt = e;

  // Opcional: Puedes agregar un mensaje o botón para el usuario aquí si lo deseas

  // Este mensaje de consola te indica que la PWA está lista para instalarse
  console.log("La PWA es instalable");

  // Escuchar por una acción del usuario, por ejemplo, un botón o cualquier otro evento para mostrar el cuadro de instalación
  // Nota: No es necesario mostrar un botón, ya que el icono de instalación aparecerá en la barra de direcciones de Chrome.
});

window.addEventListener('appinstalled', () => {
  // Este evento se dispara cuando la PWA se instala
  console.log('La PWA ha sido instalada');
});

// Aquí podrías añadir más lógica para mostrar un botón personalizado o notificar al usuario si lo deseas.
