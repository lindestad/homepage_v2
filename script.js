function loadIcons() {
    const grid = document.getElementById('icon-grid');
    
    iconData.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('icon-card');
        card.onclick = () => window.location.href = item.url;
        
        const icon = document.createElement('img');
        icon.src = item.icon;
        icon.alt = item.label;
        card.appendChild(icon);
        
        const label = document.createElement('p');
        label.textContent = item.label;
        card.appendChild(label);
        
        grid.appendChild(card);
    });
}

loadIcons();
