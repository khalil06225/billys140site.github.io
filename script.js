// Données du menu pour l'affichage dynamique : MISES À JOUR AVEC VOS MENUS
const menuData = {
    'billys': {
        title: 'Menus Billys 🍔',
        description: 'Buns briochés, salade, **2 steaks smashés de 70g**, Cheddar et sauce secrète.',
        // CHEMIN D'IMAGE SIMPLIFIÉ
        image: 'menus billys.png', 
        accompagnement: 'Servi avec frites, 2 sauces et 1 boisson au choix.'
    },
    'bigben': {
        title: 'Menus Big Ben 🇬🇧',
        description: 'Buns, **2 steaks smashés de 70g**, Cheddar, oignons confits, œuf, bacon, mayonnaise et BBQ.',
        // CHEMIN D'IMAGE SIMPLIFIÉ
        image: 'menus big ben.png', 
        accompagnement: 'Servi avec frites, 2 sauces et 1 boisson au choix.'
    },
    'tony': {
        title: 'Menus Tony Montagnard 🏔️',
        description: 'Buns briochés, **2 steaks smashés de 70g**, Cheddar, lardon, oignons confits, **raclette**, bacon, mayonnaise et BBQ.',
        // CHEMIN D'IMAGE SIMPLIFIÉ
        image: 'menus tony montagnard.png', 
        accompagnement: 'Servi avec frites, 2 sauces et 1 boisson au choix.'
    },
    'beefm': {
        title: 'Menus Beef M. 🖤',
        description: 'Buns briochés, **2 steaks smashés de 70g de Black Angus**, Cheddar, merguez, biggy, sauce spéciale, ognon confits et cornichons.',
        // CHEMIN D'IMAGE SIMPLIFIÉ
        image: 'menus beef M.png', 
        accompagnement: 'Servi avec frites, 2 sauces et 1 boisson au choix.'
    },
    'fullcheese': {
        title: 'Menus Full Cheese 🧀',
        description: 'Buns briochés, **2 steaks smashés de 70g**, Cheddar, oignons, cornichons, ketchup et moutarde US.',
        // CHEMIN D'IMAGE SIMPLIFIÉ
        image: 'menu full chesse.png', 
        accompagnement: 'Servi avec frites, 2 sauces et 1 boisson au choix.'
    },
    'billyssteak': {
        title: 'Billys Steak (Single) 🥩',
        description: 'Buns brioché, **1 Steak de 70g**, Cheddar, oignons confits, BBQ et mayonnaise.',
        // CHEMIN D'IMAGE SIMPLIFIÉ
        image: 'billys stek.png', 
        accompagnement: 'Servi avec frites, 2 sauces et 1 boisson au choix.'
    },
    'dynamite': {
        title: 'Dynamite Boxe 🥊',
        description: '**Poulet Croustillant**, Frites, **Salade fraîchement coupée**, Sauce Dynamite !',
        // CHEMIN D'IMAGE SIMPLIFIÉ
        image: 'dynamique boxe.png', 
        accompagnement: 'Servi avec une canette au choix.'
    }
};

/**
 * Affiche la section de contenu demandée et masque les autres.
 * @param {string} sectionId - L'ID de la section à afficher (ex: 'menu', 'contact').
 */
function showContent(sectionId) {
    // Masquer toutes les sections de contenu
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Afficher la section sélectionnée
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    }
    
    // Fermer les détails si on change de section (sauf vers menu ou vers detail)
    if (sectionId !== 'menu' && sectionId !== 'detail') {
         document.getElementById('detail').classList.add('hidden');
    }
}

/**
 * Affiche la page de détail d'un plat.
 * @param {string} itemId - L'ID du plat (ex: 'billys', 'bigben').
 */
function showDetail(itemId) {
    const item = menuData[itemId];
    if (!item) return;

    // Remplir les éléments de la section de détail
    document.getElementById('detailTitle').textContent = item.title;
    document.getElementById('detailImage').src = item.image;
    document.getElementById('detailImage').alt = item.title;
    
    // Créer la description détaillée
    const descriptionHTML = `
        <p class="detail-description">${item.description}</p>
        <p class="detail-accomp">${item.accompagnement}</p>
    `;
    document.getElementById('detailDescription').innerHTML = descriptionHTML;


    // Afficher la section de détail et masquer toutes les autres
    showContent('detail');
}

// Gérer les clics sur les éléments du menu pour afficher les détails
document.addEventListener('DOMContentLoaded', function() {
    // Afficher la section d'accueil par défaut
    showContent('home');

    // Écouteurs d'événements pour les éléments de la grille de menu
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const itemId = this.getAttribute('data-id');
            showDetail(itemId);
        });
    });

    // Gestion de la soumission du formulaire de contact (simulation)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simuler l'envoi des données
            formMessage.style.color = 'green';
            formMessage.textContent = '✅ Message envoyé avec succès ! Nous vous recontacterons bientôt.';
            contactForm.reset();
            
            // Masquer le message après 5 secondes
            setTimeout(() => {
                formMessage.textContent = '';
            }, 5000);
        });
    }
});
