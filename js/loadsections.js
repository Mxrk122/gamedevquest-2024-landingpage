// Función para cargar una sección
function loadSection(sectionId, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(sectionId).innerHTML = data;
        });
}

// Cargar todas las secciones
window.addEventListener('DOMContentLoaded', () => {
    loadSection('main-section', 'sections/main.html');
    loadSection('workshops-section', 'sections/workshops.html');
    loadSection('experts-section', 'sections/experts.html');
    loadSection('roles-section', 'sections/roles.html');
    loadSection('agenda-section', 'sections/agenda.html');
});
