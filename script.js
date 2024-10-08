document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { name: 'Tateti', url: 'Próximamente' },
        { name: 'Proyecto 2', url: 'Próximamente' },
        { name: 'Proyecto 3', url: 'Próximamente' }
    ];

    const projectsList = document.getElementById('projects-list');
    projects.forEach(project => {
        const listItem = document.createElement('li');
        listItem.textContent = `${project.name}: ${project.url}`;
        projectsList.appendChild(listItem);
    });
});
