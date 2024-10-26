document.addEventListener('DOMContentLoaded', () => {
    const subjects = [
        {name: "New tools"},
        {name: "New types of paracord"},
        {name: "Popular projects"},
        {name: "Knot tying methods"}
    ];

    const selectEmailSubject = document.getElementById('selectSubject');

    if (selectEmailSubject) {
        subjects.forEach(subject => {
            const subjectType = document.createElement('option');
            subjectType.textContent = subject.name;
            selectEmailSubject.appendChild(subjectType);
        });
    }
});