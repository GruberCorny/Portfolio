# Portfolio Website - Cornelius Gruber

Eine moderne, responsive Portfolio-Website zur Präsentation meiner Fähigkeiten und Projekte im IT-Bereich.

## 🚀 Features

- **Responsive Design**: Optimiert für Desktop, Tablet und Mobile
- **Modulare Architektur**: Wiederverwendbare Komponenten (Navbar, Footer)
- **Modernes Styling**: Clean Design mit CSS Custom Properties
- **Dynamisches Laden**: JavaScript-basiertes Component Loading
- **Scroll-Animationen**: Interaktive Benutzererfahrung
- **SEO-optimiert**: Meta-Tags und semantisches HTML

## 📁 Struktur

```
own-Website/
├── index.html              # Startseite
├── style.css              # Haupt-Stylesheet
├── reset.css              # CSS Reset
├── load.js                # Component Loading Script
├── blocks/                # Wiederverwendbare Komponenten
│   ├── navbar.html        # Navigation
│   └── footer.html        # Footer
├── sites/                 # Unterseiten
│   ├── about_me.html      # Über mich
│   ├── projects.html      # Projekte
│   └── contact.html       # Kontakt
├── docs/                  # Dokumente (z.B. Lebenslauf)
└── assets/                # Bilder und andere Assets
```

## 🎨 Personalisierung

### 1. Persönliche Informationen anpassen

**Email-Adresse ändern:**
- Suche in allen HTML-Dateien nach `deine.email@beispiel.com`
- Ersetze durch deine echte Email-Adresse

**Lebenslauf:**
- Platziere deinen Lebenslauf als PDF in `/docs/`
- Aktualisiere die Links in `about_me.html` und `contact.html`

### 2. Projekte hinzufügen

Öffne `sites/projects.html` und füge neue Projekte hinzu:

```html
<article class="project-detailed">
    <div class="project-header">
        <h2>Dein Projektname</h2>
        <div class="project-meta">
            <span class="project-date">2024</span>
        </div>
    </div>
    <div class="project-body">
        <p class="project-description">
            Beschreibung deines Projekts...
        </p>
        <h3>Technologien</h3>
        <div class="project-tags">
            <span class="tag">HTML5</span>
            <span class="tag">CSS3</span>
            <!-- Weitere Tags -->
        </div>
        <h3>Features</h3>
        <ul class="project-features">
            <li>Feature 1</li>
            <li>Feature 2</li>
        </ul>
        <div class="project-links">
            <a href="GITHUB_LINK" class="btn btn-secondary">Code auf GitHub</a>
        </div>
    </div>
</article>
```

### 3. Farben anpassen

Bearbeite die CSS-Variablen in `style.css`:

```css
:root {
    --dark: #181819;
    --light: #fefffd;
    --accent: #6aff79;          /* Hauptakzentfarbe */
    --accent-dark: #00872f;     /* Dunklere Variante */
    /* ... */
}
```

### 4. Profilbild hinzufügen

1. Speichere dein Profilbild in `/assets/` (z.B. `profile.jpg`)
2. Füge es zur Startseite oder "Über mich"-Seite hinzu:

```html
<img src="assets/profile.jpg" alt="Cornelius Gruber" class="profile-image">
```


## 🖥️ Lokale Entwicklung

### Mit Python:
```bash
python3 -m http.server 8000
```

### Mit Node.js:
```bash
npx serve
```

Dann öffne `http://localhost:8000` im Browser.

## 📝 Checkliste vor dem Veröffentlichen

- [ ] Email-Adresse aktualisiert
- [ ] Lebenslauf hochgeladen
- [ ] Persönliche Informationen in "Über mich" angepasst
- [ ] Eigene Projekte hinzugefügt
- [ ] Profilbild hinzugefügt (optional)
- [ ] Alle Links getestet
- [ ] Responsive Design auf verschiedenen Geräten getestet
- [ ] Meta-Beschreibungen angepasst

## 🚀 Deployment

### GitHub Pages:
1. Pushe den Code zu GitHub
2. Gehe zu Repository Settings → Pages
3. Wähle Branch "main" und Ordner "/root"
4. Speichern und Website ist live!

### Netlify:
1. Verbinde dein GitHub Repository mit Netlify
2. Deploy automatisch bei jedem Push

## 📄 Lizenz

Dieses Portfolio ist für persönliche Nutzung gedacht.

## 💡 Technologien

- HTML5
- CSS3 (mit Custom Properties)
- Vanilla JavaScript
- Responsive Design
- Modular Architecture

---

**Erstellt von Cornelius Gruber** | [GitHub](https://github.com/GruberCorny)
