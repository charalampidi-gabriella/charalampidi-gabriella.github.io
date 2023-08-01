

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

const arrowSection1 = document.getElementById('arrow-section-1');
const arrowSection2 = document.getElementById('arrow-section-2');

const options = {
    root: null,
    threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const targetId = entry.target.getAttribute('id');
            if (targetId === 'project-section-1') {
                arrowSection1.style.display = 'block';
                arrowSection2.style.display = 'none';
            } else if (targetId === 'project-section-2') {
                arrowSection1.style.display = 'none';
                arrowSection2.style.display = 'block';
            }
        }
    });
}, options);

const sections = document.querySelectorAll('.section-project');
sections.forEach((section) => {
    observer.observe(section);
});

function scrollToNextSection(nextSectionId) {
    const nextSection = document.getElementById(nextSectionId);
    nextSection.scrollIntoView({ behavior: 'smooth' });
}
