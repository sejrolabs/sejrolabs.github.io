# Portfolio Data Scientist & Machine Learning Engineer — Toussaint BOCO

Ce portfolio web moderne et responsive a été conçu sur-mesure pour mettre en valeur le profil de **Toussaint BOCO**, Élève Ingénieur Data Scientist à l'**ENSAI** et Ingénieur Statisticien Économiste diplômé de l'**ENEAM**, dans le cadre de sa recherche de **stage de fin d'études de 6 mois (à partir de janvier 2027)**.

---

## 🌟 Les 4 Projets Phares Intégrés

1. **Prévision de la Demande & Revenue Management (Odalys Vacances)**
   * Données massives (+1M de réservations, 104 résidences en France).
   * Architecture duale statique / dynamique sous **XGBoost**.
   * Validation temporelle stricte en *walk-forward* et explicabilité métier via **SHAP**.
2. **Détection de Fraude Bancaire sur Classes Extrêmement Déséquilibrées**
   * 285 807 transactions avec seulement 0,17% de fraudes réelles.
   * Modélisation *cost-sensitive* sous XGBoost et Random Forest.
   * **87,2% de précision** et **83,7% de rappel** après calibration du seuil probabiliste sur la courbe PR-AUC.
3. **Assistant RAG Hybride & Analytics (Excel Bancaire)**
   * Architecture hybride sans hallucination combinant **Text-to-SQL déterministe (DuckDB)** et **recherche hybride (Qdrant + BM25 avec fusion RRF)**.
   * Routage d'intentions LLM avec fallback heuristique de secours (**100% de précision au benchmark 9/9**), validation restrictive AST (`sqlglot`), visualisations automatiques et export CSV sous Streamlit.
4. **Système de Recommandation Hybride & Ranking**
   * Combinaison de **filtrage collaboratif par factorisation matricielle (SVD/ALS)** et de filtrage basé sur le contenu (*content-based embeddings*).
   * Résolution du problème de *cold-start* et évaluation sur métriques de ranking (**NDCG@10 +24%**).

---

## 🚀 Fonctionnalités du Portfolio

* **Bilingue Français / Anglais (FR / EN)** : Sélecteur de langue interactif dans la barre de navigation et sur mobile, permettant de basculer instantanément l'intégralité du site (textes, métriques, modales STAR, CV) avec mémorisation du choix utilisateur.
* **Thème Sombre Premium ("Data & AI Dark Mode")** : Palette de couleurs moderne (bleu néon, cyan, émeraude, violet) avec micro-animations et design épuré inspiré des standards Vercel / Linear.
* **Études de Cas Interactives (STAR)** : Chaque projet dispose d'une modale *Deep Dive* détaillée reprenant la Situation, la Tâche, l'Action et le Résultat chiffré.
* **Bouton Copie d'Email** : Copie instantanée dans le presse-papier avec confirmation visuelle animée.
* **100% Responsive** : Affichage optimal sur mobile, tablette et écran large 4K.
* **Zéro Dépendance Lourde** : Chargement instantané, fichiers légers (HTML5, Tailwind CSS, Vanilla JS).

---

## 📁 Structure des Fichiers

```text
Portfolio/
├── index.html            # Page principale bilingue avec sélecteur FR/EN et modales STAR
├── translations.js       # Dictionnaire complet des traductions Français / Anglais
├── styles.css            # Styles personnalisés, scrollbars et effets de glow
├── app.js                # Logique i18n, gestion des modales, photo et copie d'email
├── banniere_linkedin.html # Générateur interactif de bannière LinkedIn officielle (1584x396)
├── photo.jpeg            # Votre photo de profil (format portrait / carré)
├── cv.pdf                # Votre fichier de CV au format PDF
└── README.md             # Documentation du projet
```

---

## ⚡ Visualisation en Local

Pour prévisualiser le site sur votre machine :
1. Double-cliquez directement sur `index.html` pour l'ouvrir dans n'importe quel navigateur (Google Chrome, Firefox, Safari, Edge).
2. Ou lancez un petit serveur local si vous avez Python installé :
   ```bash
   python -m http.server 8000
   ```
   Puis ouvrez `http://localhost:8000` dans votre navigateur.

---

## 🌐 Déploiement Gratuit sur GitHub Pages (Recommandé)

Pour avoir votre portfolio en ligne gratuitement avec une URL personnalisée (ex: `https://sejrolabs.github.io`) :

1. Créez un dépôt public sur GitHub nommé :
   ```text
   sejrolabs.github.io
   ```
   *(ou tout autre nom comme `portfolio`)*.
2. Déposez-y les fichiers (`index.html`, `styles.css`, `app.js`, `cv.pdf` et `README.md`).
3. Sur GitHub, rendez-vous dans : **Settings** > **Pages** > **Branch: main** > **Save**.
4. Votre site est instantanément en ligne et consultable par tous les recruteurs !
