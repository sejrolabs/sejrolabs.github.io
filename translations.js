/**
 * Translations Dictionary for Toussaint BOCO Portfolio
 * Bilingual Support: French (FR) & English (EN)
 */

window.translations = {
  fr: {
    // Meta & Head
    meta_title: "Toussaint BOCO | Data Scientist & Machine Learning Engineer",
    meta_desc: "Portfolio de Toussaint BOCO, Élève Ingénieur Data Scientist à l'ENSAI. Projets phares en Machine Learning, Détection de fraude, Séries temporelles, NLP et Systèmes de recommandation.",

    // Header & Navigation
    nav_role: "Élève Ingénieur Data Scientist - ENSAI",
    nav_projects: "Projets",
    nav_skills: "Compétences",
    nav_timeline: "Parcours",
    nav_about: "À propos",
    nav_contact: "Contact",
    nav_availability: "Stage 6 mois - Janvier 2027",
    nav_cv: "Mon CV (PDF)",
    nav_hire: "Contacts",
    nav_mobile_searching: "À la recherche d'un stage de fin d'études (Janvier 2027)",
    nav_mobile_cv: "Télécharger mon CV (PDF)",
    nav_mobile_contact: "Prendre contact",
    lang_label: "Langue :",

    // Hero Section
    hero_pill_school: "Élève Ingénieur en dernière année à l'",
    hero_pill_stage: "Stage 6 mois - Janvier 2027",
    hero_title_html: "Transformer des données complexes en <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-accent-cyan to-accent-teal\">décisions d'impact</span>.",
    hero_subtitle_html: "Je suis <strong class=\"text-white font-semibold\">Toussaint BOCO</strong>, Data Scientist avec une double expertise en <strong class=\"text-brand-400 font-semibold\">Machine Learning</strong>, <strong class=\"text-accent-cyan font-semibold\">Statistique Appliquée</strong> et <strong class=\"text-accent-violet font-semibold\">Économétrie</strong>.",
    hero_desc_html: "De la détection d'anomalies sur classes déséquilibrées à la prévision dynamique sur +1 million de réservations, en passant par le NLP et les systèmes de recommandation : j'allie rigueur mathématique, optimisation d'algorithmes et explicabilité métier (<span class=\"font-mono text-slate-300 text-xs bg-slate-800 px-2 py-0.5 rounded\">SHAP</span>, analyse des résidus).",
    hero_cta_projects: "Explorer mes projets phares",

    // Portrait Card
    portrait_badge_school: "Élève Ingénieur Data Scientist - ENSAI",
    portrait_placeholder_hint: "Pour afficher votre photo :",
    portrait_placeholder_action: "Déposez votre fichier <span class=\"underline\">photo.jpeg</span> dans le dossier",
    portrait_status: "Disponibilité : Janvier 2027",
    portrait_title: "Data Scientist & ML Engineer",
    portrait_tag_formation: "Formation",
    portrait_val_formation: "ENSAI + ENEAM",
    portrait_tag_metric: "Détection Fraude",
    portrait_val_metric: "87.2% Précision",

    // Key Metrics Strip
    metric_fraud_title: "Précision Détection Fraude",
    metric_fraud_sub: "Rappel : 83.7% sur 285k transactions",
    metric_data_title: "Lignes Données Traitées",
    metric_data_sub: "104 résidences Odalys Vacances",
    metric_degree_val: "Double",
    metric_degree_title: "Diplôme Ingénieur",
    metric_degree_sub: "ENSAI + ENEAM (Statistique & Data Science)",
    metric_xai_title: "Explicabilité des Modèles",
    metric_xai_sub: "Zéro \"Boîte Noire\" pour le métier",

    // Projects Section Header
    projects_badge: "Showcase Technique",
    projects_title: "Mes 4 Projets Phares",
    projects_desc: "Chaque projet répond à un défi data spécifique : modélisation de masse, déséquilibre extrême, traitement du texte et recommandation personnalisée.",

    // Project 1 : Odalys
    p1_tag: "Séries Temporelles & Revenue Management",
    p1_metric_pill: "+1 000 000 lignes",
    p1_title: "Prévision de la Demande & Revenue Management (Odalys)",
    p1_desc_html: "Modélisation prédictive des réservations et du <em>remaining pickup</em> pour <strong>104 résidences de vacances</strong>. Conception d'une double approche statique et dynamique par <strong>XGBoost</strong> avec validation temporelle <em>walk-forward</em> et analyse des facteurs clés via <strong>SHAP</strong>.",
    p1_stat1_k: "Périmètre",
    p1_stat1_v: "104 Résidences",
    p1_stat2_k: "Algorithme",
    p1_stat2_v: "XGBoost D/S",
    p1_stat3_k: "Explicabilité",
    p1_stat3_v: "SHAP Values",
    btn_case_study: "Étude de cas détaillée",
    btn_source_code: "Code Source",

    // Project 2 : Fraud
    p2_tag: "Détection d'Anomalies & Classes Déséquilibrées",
    p2_metric_pill: "0,17% de fraudes",
    p2_title: "Détection de Fraude Bancaire par Machine Learning",
    p2_desc_html: "Détection temps-réel de fraudes sur <strong>285 807 transactions</strong>. Traitement du déséquilibre sévère via <em>cost-sensitive learning</em>, comparaison Random Forest vs XGBoost, calibration du seuil de décision sur la courbe <strong>Precision-Recall (PR-AUC)</strong>.",
    p2_stat1_k: "Précision",
    p2_stat1_v: "87,2%",
    p2_stat2_k: "Rappel (Recall)",
    p2_stat2_v: "83,7%",
    p2_stat3_k: "Transactions",
    p2_stat3_v: "285k",

    // Project 3 : NLP
    p3_tag: "Natural Language Processing (NLP)",
    p3_metric_pill: "Transformers & BERT",
    p3_title: "Analyse de Sentiments & Text Mining (NLP)",
    p3_desc_html: "Pipeline complet de classification de texte et d'analyse d'opinions. Comparaison de baselines sémantiques (TF-IDF + classifieurs linéaires) avec le fine-tuning de modèles de langage <strong>BERT / RoBERTa</strong> pour la détection fine des tonalités et de la satisfaction client.",
    p3_stat1_k: "F1-Score",
    p3_stat1_v: "91,4%",
    p3_stat2_k: "Architecture",
    p3_stat2_v: "Fine-tuned BERT",
    p3_stat3_k: "Latence",
    p3_stat3_v: "< 35ms / req",

    // Project 4 : RecSys
    p4_tag: "Systèmes de Recommandation & Filtrage Hybride",
    p4_metric_pill: "NDCG@10 +24%",
    p4_title: "Système de Recommandation Hybride & Ranking",
    p4_desc_html: "Moteur de recommandation personnalisé combinant <strong>filtrage collaboratif par factorisation matricielle (SVD/ALS)</strong> et filtrage basé sur le contenu. Résolution du problème du <em>cold-start</em> et évaluation offline sur métriques de ranking (NDCG@K, Precision@K).",
    p4_stat1_k: "NDCG@10",
    p4_stat1_v: "0.842",
    p4_stat2_k: "Approche",
    p4_stat2_v: "Hybride SVD + Content",
    p4_stat3_k: "Cold-Start",
    p4_stat3_v: "Résolu (Content-based)",

    // Skills Section
    skills_badge: "Expertise & Boîte à Outils",
    skills_title: "Compétences & Stack Technique",
    skills_desc: "Une maîtrise complète de la chaîne de valeur de la donnée : de l'exploration statistique rigoureuse à l'inférence de modèles optimisés.",
    sk1_title: "Machine & Deep Learning",
    sk1_item1: "XGBoost, Random Forest, LightGBM",
    sk1_item2: "Régression Linéaire, Logistique, Ridge/Lasso",
    sk1_item3: "Computer Vision : CNN, YOLO",
    sk1_item4: "NLP : Transformers, BERT, Hugging Face",
    sk1_item5: "Systèmes de Recommandation (SVD, ALS)",

    sk2_title: "Statistique & Économétrie",
    sk2_item1: "Modèles Séries Temporelles : ARDL, VAR",
    sk2_item2: "Tests de stationnarité, cointégration, causalité",
    sk2_item3: "Théorie des sondages & Inférence statistique",
    sk2_item4: "Analyse multivariée des données (ACP, AFC, MCA)",
    sk2_item5: "Analyse économétrique des politiques publiques",

    sk3_title: "Évaluation & Explicabilité",
    sk3_item1: "Interprétabilité SHAP & Feature Importance",
    sk3_item2: "Analyse des résidus & Hétéroscédasticité",
    sk3_item3: "Classes déséquilibrées : PR-AUC, F1-macro",
    sk3_item4: "Calibration du seuil de décision métier",
    sk3_item5: "Walk-Forward Temporal Validation",

    sk4_title: "Langages & Écosystème",
    sk4_item1: "Python (pandas, numpy, scikit-learn, PyTorch, Streamlit)",
    sk4_item2: "SQL & Requêtage de bases de données",
    sk4_item3: "R (dplyr, ggplot2, économétrie avancée, Shiny)",
    sk4_item4: "Git, GitHub, CI/CD, Notion, VBA",
    sk4_item5: "GCP, Power BI",

    // Timeline Section
    timeline_badge: "Double Formation d'Excellence",
    timeline_title: "Formations & Expériences Professionnelles",
    timeline_desc: "Un cursus d'ingénieur rigoureux allié à des expériences de recherche appliquée et de modélisation industrielle.",
    
    t1_date: "2024 - 2027",
    t1_title: "Ingénieur Data Scientist",
    t1_school: "ENSAI — École Nationale de la Statistique et de l'Analyse de l'Information (Rennes / Bruz)",
    t1_desc: "Formation d'élite en statistique mathématique, Machine Learning, Deep Learning, MLOps, bases de données volumineuses et gestion de projets data complexes.",

    t2_date: "Juin 2025 - Août 2025",
    t2_title: "Data Scientist (Stage R&D)",
    t2_school: "ECAM Louis de Broglie (Bruz, France)",
    t2_li1: "Développement d'un modèle d'automatisation de détection et comptage de cellules immunitaires sur images microscopiques (CNN & YOLO).",
    t2_li2: "Collecte, labellisation et data augmentation sur Roboflow pour maximiser la robustesse face au bruit optique.",
    t2_li3: "Optimisation itérative des hyperparamètres sous Python et restitution à l'équipe encadrante.",

    t3_date: "2022 - 2025",
    t3_title: "Ingénieur Statisticien Économiste",
    t3_school: "ENEAM — École Nationale d'Économie Appliquée et de Management",
    t3_desc: "Fondations mathématiques et méthodologiques approfondies : économétrie des séries temporelles, théorie des probabilités et des sondages, analyse statistique descriptive et inférentielle.",

    t4_date: "Juin 2022 - Septembre 2022",
    t4_title: "Statisticien (Stage)",
    t4_school: "INStaD — Institut National de la Statistique et de la Démographie (Cotonou, Bénin)",
    t4_li1: "Modélisation économétrique du capital humain et de la croissance à l'aide de modèles ARDL et VAR (données 1980–2020).",
    t4_li2: "Tests rigoureux de stationnarité, cointégration et causalité au sens de Granger.",
    t4_li3: "Rédaction d'un rapport de synthèse à visée d'aide à la décision publique sous R et Excel.",

    // About Section
    about_badge: "À propos de ma vision",
    about_title: "Pourquoi mon profil fait la différence ?",
    about_p1_html: "Dans un secteur où beaucoup se contentent de brancher des librairies sans comprendre la mécanique sous-jacente, ma double formation à l'<strong>ENSAI</strong> et à l'<strong>ENEAM</strong> m'a appris à exiger la rigueur mathématique et l'explicabilité à chaque étape du pipeline.",
    about_p2_html: "Qu'il s'agisse de combattre un <strong>déséquilibre de classes sévère (0,17%)</strong> sans générer de faux positifs ruineux pour l'entreprise, ou d'optimiser le <strong>revenue management</strong> sur plus d'un million de lignes, mon objectif est constant : <strong class=\"text-white\">maximiser l'impact métier réel, mesurer honnêtement la performance et fournir des explications transparentes</strong> grâce aux outils d'interprétabilité comme SHAP.",
    about_p3_html: "Je suis certifié <strong>Linguaskill (Anglais B2)</strong>, dynamique, autonome et passionné par les problématiques de passage à l'échelle et de mise en production.",
    about_languages: "Français (natif) - Anglais (B2)",
    about_hobbies: "Lecture, Musculation, Voyage",
    about_pillars_title: "Les 3 piliers de ma démarche",
    about_pil1_k: "01. COMPRÉHENSION MÉTIER AVANT TOUT",
    about_pil1_v: "Traduire un objectif business flou en un problème de modélisation data rigoureux avec une métrique d'optimisation alignée sur le ROI.",
    about_pil2_k: "02. PROTOCOLE D'ÉVALUATION ÉTANCHE",
    about_pil2_v: "Bannir le data leakage via des séparations temporelles strictes (walk-forward) et des métriques sans complaisance (PR-AUC, F1-macro).",
    about_pil3_k: "03. EXPLICABILITÉ & ACCULTURATION DATA",
    about_pil3_v: "Expliquer les prédictions aux décideurs métiers à l'aide de SHAP values pour bâtir la confiance et faciliter l'adoption opérationnelle.",

    // Contact Section
    contact_badge: "Opportunité de Recrutement",
    contact_title: "Prêt à renforcer votre équipe Data ?",
    contact_desc_html: "Je suis activement à la recherche d'un <strong>stage de fin d'études de 6 mois à partir de janvier 2027</strong> en Data Science / Machine Learning / MLOps en Île-de-France ou en télétravail.",
    contact_email_title: "Email Direct",
    contact_btn_copy: "Copier l'adresse",
    contact_copied: "✓ Copié !",
    contact_linkedin_title: "LinkedIn",
    contact_btn_linkedin: "Voir le profil",
    contact_phone_title: "Téléphone",
    contact_btn_phone: "Appeler directement",
    contact_btn_cv: "Télécharger mon CV au format PDF",

    // Footer
    footer_text: "© 2026 Toussaint BOCO — ENSAI Data Scientist. Conçu pour maximiser l'impact technique.",

    // Modals
    modal_close: "Fermer",
    modal_code: "Explorer le Code GitHub",
    modal_sec_s: "1. Contexte & Problématique Métier (Situation)",
    modal_sec_t: "2. Objectifs & Enjeux Techniques (Tâche)",
    modal_sec_a: "3. Méthodologie & Solution Implémentée (Action)",
    modal_sec_r: "4. Résultats & Valeur Ajoutée (Résultat)",

    // Modal Odalys
    modal1_badge: "Étude de Cas • ENSAI 2026",
    modal1_client: "Projet Entreprise : Odalys Vacances",
    modal1_title: "Prévision de la Demande & Revenue Management",
    modal1_sub: "Modélisation avancée du remaining pickup sur un portefeuille de 104 résidences de vacances.",
    modal1_s: "Odalys Vacances gère un parc hôtelier important nécessitant une anticipation précise du taux d'occupation pour ajuster dynamiquement la grille tarifaire (Yield / Revenue Management). Le jeu de données dépasse le million de réservations historiques réparties sur 104 résidences à travers la France, soumises à une forte saisonnalité et à des comportements de réservation hétérogènes.",
    modal1_t: "Prédire avec précision les réservations futures d'ici la date de séjour (remaining pickup) à différents horizons temporels (D-90, D-60, D-30, D-7). L'enjeu clé était d'éviter tout phénomène de surajustement (overfitting) et de fuite d'information temporelle (data leakage), tout en fournissant aux gestionnaires de résidences une explication claire des facteurs influençant la demande.",
    modal1_a_li1: "Feature Engineering temporel & métier : Dérivation des lead times, indicateurs de vacances scolaires, effets jours fériés, dynamiques de montée en charge passées et tendances tarifaires.",
    modal1_a_li2: "Modèle Statique : Capture les tendances de fond, la localisation, l'attractivité de la résidence et la saisonnalité annuelle.",
    modal1_a_li3: "Modèle Dynamique : Ajuste les prévisions au fur et à mesure que les réservations se concrétisent à l'approche de la date d'arrivée.",
    modal1_a_li4: "Validation Walk-Forward : Découpage rigoureux respectant l'ordre chronologique (TimeSeriesSplit) pour répliquer exactement les conditions réelles d'inférence en production.",
    modal1_a_li5: "Interprétabilité XAI avec SHAP : Calcul des valeurs de Shapley pour identifier la contribution nette de chaque variable (prix, anticipation, zone géographique).",
    modal1_r: "Réduction sensible de l'erreur moyenne de prévision (MAE / RMSE) comparativement aux règles empiriques précédentes. Les explications SHAP ont permis aux directeurs d'exploitation de justifier sereinement des décisions de repositionnement tarifaire et d'optimiser le taux de remplissage final sans dégrader le RevPAR.",

    // Modal Fraud
    modal2_badge: "Étude de Cas • Machine Learning FinTech",
    modal2_client: "Projet Spécialisé",
    modal2_title: "Détection de Fraude sur Classes Extrêmement Déséquilibrées",
    modal2_sub: "Analyse de 285 807 transactions par carte bancaire avec seulement 0,17% de fraudes réelles.",
    modal2_s: "En milieu bancaire réel, la fraude est un phénomène rarissime mais dévastateur : sur 285 807 transactions analysées, seulement 492 sont frauduleuses (0,17 %). Un modèle naïf prédisant toujours 'non-fraude' obtiendrait 99,83 % d'accuracy tout en laissant passer la totalité des vols financiers.",
    modal2_t: "Concevoir un classifieur capable d'atteindre un rappel très élevé (capturer les fraudes) tout en maintenant une précision forte afin de ne pas paralyser les clients légitimes par des refus de paiement intempestifs. L'objectif était de maximiser l'aire sous la courbe Precision-Recall (PR-AUC) plutôt que la ROC-AUC trompeuse dans ce scénario.",
    modal2_a_li1: "Stratégies de rééquilibrage : Expérimentation rigoureuse de SMOTE (synthèse de minorité), NearMiss (sous-échantillonnage) et pondération de la fonction de perte (Cost-Sensitive Learning via scale_pos_weight sous XGBoost).",
    modal2_a_li2: "Benchmark des modèles : Comparaison de Random Forest (avec balanced bootstrap) et d'un XGBoost calibré.",
    modal2_a_li3: "Tuning du seuil de décision probabiliste : Déplacement du seuil standard (0.50) vers un seuil optimisé par analyse de la courbe Precision-Recall afin de minimiser le coût financier global (coût d'investigation vs montant moyen dérobé).",
    modal2_r_p: "Modèle final hautement sélectif réduisant à un niveau marginal les faux positifs tout en interceptant plus de 8 fraudes sur 10 dès le premier essai.",

    // Modal NLP
    modal3_badge: "Étude de Cas • Deep Learning & NLP",
    modal3_client: "Architecture Transformers",
    modal3_title: "Analyse de Sentiments & Text Mining par Deep Learning",
    modal3_sub: "Fine-tuning de modèles BERT/Transformers pour la classification contextuelle des retours textuels.",
    modal3_s: "Traiter de volumineux flux de commentaires et d'avis clients non structurés afin de qualifier automatiquement la satisfaction, détecter les insatisfactions critiques et orienter les équipes support en temps réel sans intervention humaine préliminaire.",
    modal3_t: "Dépasser les limites des approches « Sac de mots » (Bag-of-Words / TF-IDF) qui échouent face aux négations doubles, au vocabulaire familier et aux dépendances sémantiques lointaines. Déployer un pipeline d'inférence performant avec un F1-score élevé et une faible latence.",
    modal3_a_li1: "Preprocessing & Tokenization : Nettoyage adapté (préservation des émoticônes porteuses de sens, gestion de la casse), découpage en sous-mots via WordPiece/Byte-Pair Encoding.",
    modal3_a_li2: "Stratégie d'apprentissage par transfert : Fine-tuning des dernières couches d'un modèle pré-entraîné (BERT-base / RoBERTa) avec learning rate decay linéaire et optimisation AdamW.",
    modal3_a_li3: "Benchmark systématique : Comparaison face à une baseline robuste (TF-IDF n-grams + Linear SVM) pour mesurer le gain effectif apporté par le mécanisme d'auto-attention.",
    modal3_r: "Gain de +12 points de F1-Score (91,4%) par rapport à la baseline TF-IDF. L'architecture capture avec succès les subtilités de tonalité et permet une catégorisation automatisée en temps réel avec un temps d'inférence inférieur à 35ms par texte.",

    // Modal RecSys
    modal4_badge: "Étude de Cas • Systèmes de Recommandation",
    modal4_client: "Filtrage Hybride & Ranking",
    modal4_title: "Système de Recommandation Hybride & Ranking Personnalisé",
    modal4_sub: "Combinaison de factorisation matricielle (SVD/ALS) et de filtrage basé sur le contenu.",
    modal4_s: "Augmenter l'engagement utilisateur et le taux de conversion sur une plateforme e-commerce / contenu en proposant des recommandations ultra-pertinentes. Deux pièges majeurs : le cold-start (manque d'historique pour les nouveaux utilisateurs ou nouveaux items) et l'enfermement dans une bulle de filtres répétitive.",
    modal4_t: "Concevoir un moteur hybride alliant la puissance du filtrage collaboratif et la résilience du filtrage par le contenu. Évaluer la pertinence selon des métriques de classement (ranking) rigoureuses : NDCG@K (Normalized Discounted Cumulative Gain), Precision@K et MAP.",
    modal4_a_li1: "Filtrage Collaboratif par SVD : Décomposition en valeurs singulières de la matrice d'interactions utilisateur-item pour capturer les facteurs latents de préférence.",
    modal4_a_li2: "Filtrage basé sur le contenu (Content-Based) : Représentation vectorielle des attributs produits (similarité cosinus) pour fournir immédiatement des recommandations de qualité aux profils sans historique (Cold-Start résolu).",
    modal4_a_li3: "Agrégation et Re-ranking : Scoring pondéré dynamique arbitrant entre nouveauté, popularité et affinité individuelle.",
    modal4_r: "Amélioration de +24% du NDCG@10 comparé à une heuristique de recommandation populaire. Excellente résilience sur les nouveaux items tout en garantissant un catalogue diversifié aux utilisateurs fidèles."
  },

  en: {
    // Meta & Head
    meta_title: "Toussaint BOCO | Data Scientist & Machine Learning Engineer",
    meta_desc: "Portfolio of Toussaint BOCO, Senior Graduate Data Science Engineer at ENSAI. Key projects in Machine Learning, Fraud Detection, Time Series, NLP, and Recommender Systems.",

    // Header & Navigation
    nav_role: "Data Scientist & ML Engineer - ENSAI",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_timeline: "Experience",
    nav_about: "About Me",
    nav_contact: "Contact",
    nav_availability: "6-Month Internship - January 2027",
    nav_cv: "Resume (PDF)",
    nav_hire: "Contact",
    nav_mobile_searching: "Seeking a 6-month graduation internship (January 2027)",
    nav_mobile_cv: "Download Resume (PDF)",
    nav_mobile_contact: "Get in touch",
    lang_label: "Language:",

    // Hero Section
    hero_pill_school: "Senior Graduate Engineering Student at ",
    hero_pill_stage: "6-Month Internship - January 2027",
    hero_title_html: "Transforming complex data into <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-accent-cyan to-accent-teal\">high-impact decisions</span>.",
    hero_subtitle_html: "I am <strong class=\"text-white font-semibold\">Toussaint BOCO</strong>, Data Scientist with dual expertise in <strong class=\"text-brand-400 font-semibold\">Machine Learning</strong>, <strong class=\"text-accent-cyan font-semibold\">Applied Statistics</strong>, and <strong class=\"text-accent-violet font-semibold\">Econometrics</strong>.",
    hero_desc_html: "From real-time anomaly detection on extreme class imbalance to dynamic forecasting across 1M+ booking records, through NLP and recommender systems: I combine mathematical rigor, algorithm optimization, and business explainability (<span class=\"font-mono text-slate-300 text-xs bg-slate-800 px-2 py-0.5 rounded\">SHAP</span>, residual analysis).",
    hero_cta_projects: "Explore Flagship Projects",

    // Portrait Card
    portrait_badge_school: "Data Scientist & ML Engineer - ENSAI",
    portrait_placeholder_hint: "To display your photo:",
    portrait_placeholder_action: "Place your <span class=\"underline\">photo.jpeg</span> file in the project folder",
    portrait_status: "Available: January 2027",
    portrait_title: "Data Scientist & ML Engineer",
    portrait_tag_formation: "Education",
    portrait_val_formation: "ENSAI + ENEAM",
    portrait_tag_metric: "Fraud Detection",
    portrait_val_metric: "87.2% Precision",

    // Key Metrics Strip
    metric_fraud_title: "Fraud Detection Precision",
    metric_fraud_sub: "Recall: 83.7% over 285k transactions",
    metric_data_title: "Data Records Processed",
    metric_data_sub: "104 Odalys Holiday Resorts",
    metric_degree_val: "Dual",
    metric_degree_title: "Engineering Degree",
    metric_degree_sub: "ENSAI + ENEAM (Statistics & Data Science)",
    metric_xai_title: "Model Explainability (XAI)",
    metric_xai_sub: "Zero \"Black Box\" for stakeholders",

    // Projects Section Header
    projects_badge: "Technical Showcase",
    projects_title: "4 Featured Data Science Projects",
    projects_desc: "Each project tackles a distinct data challenge: large-scale modeling, extreme imbalance, NLP text mining, and personalized recommendation.",

    // Project 1 : Odalys
    p1_tag: "Time Series & Revenue Management",
    p1_metric_pill: "+1,000,000 records",
    p1_title: "Demand Forecasting & Revenue Management (Odalys)",
    p1_desc_html: "Predictive modeling of bookings and <em>remaining pickup</em> for <strong>104 holiday resorts</strong>. Designed a dual static and dynamic architecture with <strong>XGBoost</strong>, strict <em>walk-forward</em> time-series validation, and key driver interpretability via <strong>SHAP</strong>.",
    p1_stat1_k: "Scope",
    p1_stat1_v: "104 Resorts",
    p1_stat2_k: "Model",
    p1_stat2_v: "XGBoost D/S",
    p1_stat3_k: "Explainability",
    p1_stat3_v: "SHAP Values",
    btn_case_study: "Detailed Case Study",
    btn_source_code: "Source Code",

    // Project 2 : Fraud
    p2_tag: "Anomaly Detection & Imbalanced Learning",
    p2_metric_pill: "0.17% fraud rate",
    p2_title: "Machine Learning Credit Card Fraud Detection",
    p2_desc_html: "Real-time fraud detection on <strong>285,807 transactions</strong>. Addressed severe class imbalance via <em>cost-sensitive learning</em>, compared Random Forest vs XGBoost, and calibrated decision threshold on the <strong>Precision-Recall curve (PR-AUC)</strong>.",
    p2_stat1_k: "Precision",
    p2_stat1_v: "87.2%",
    p2_stat2_k: "Recall",
    p2_stat2_v: "83.7%",
    p2_stat3_k: "Transactions",
    p2_stat3_v: "285k",

    // Project 3 : NLP
    p3_tag: "Natural Language Processing (NLP)",
    p3_metric_pill: "Transformers & BERT",
    p3_title: "Sentiment Analysis & Text Mining (NLP)",
    p3_desc_html: "End-to-end text classification and sentiment mining pipeline. Benchmarked classical baselines (TF-IDF + linear classifiers) against fine-tuned <strong>BERT / RoBERTa</strong> language models to capture subtle semantics and customer satisfaction.",
    p3_stat1_k: "F1-Score",
    p3_stat1_v: "91.4%",
    p3_stat2_k: "Architecture",
    p3_stat2_v: "Fine-tuned BERT",
    p3_stat3_k: "Latency",
    p3_stat3_v: "< 35ms / req",

    // Project 4 : RecSys
    p4_tag: "Recommender Systems & Hybrid Filtering",
    p4_metric_pill: "NDCG@10 +24%",
    p4_title: "Hybrid Recommender System & Ranking",
    p4_desc_html: "Personalized recommendation engine combining <strong>Matrix Factorization Collaborative Filtering (SVD/ALS)</strong> and content-based filtering. Solved the <em>cold-start</em> issue and evaluated offline with ranking metrics (NDCG@K, Precision@K).",
    p4_stat1_k: "NDCG@10",
    p4_stat1_v: "0.842",
    p4_stat2_k: "Approach",
    p4_stat2_v: "Hybrid SVD + Content",
    p4_stat3_k: "Cold-Start",
    p4_stat3_v: "Resolved (Content-based)",

    // Skills Section
    skills_badge: "Expertise & Tech Stack",
    skills_title: "Skills & Technical Stack",
    skills_desc: "Comprehensive mastery of the data value chain: from rigorous statistical discovery to production-ready model inference.",
    sk1_title: "Machine & Deep Learning",
    sk1_item1: "XGBoost, Random Forest, LightGBM",
    sk1_item2: "Linear Regression, Logistic, Ridge/Lasso",
    sk1_item3: "Computer Vision: CNN, YOLO",
    sk1_item4: "NLP: Transformers, BERT, Hugging Face",
    sk1_item5: "Recommender Systems (SVD, ALS)",

    sk2_title: "Statistics & Econometrics",
    sk2_item1: "Time Series Models: ARDL, VAR",
    sk2_item2: "Stationarity, cointegration & Granger causality tests",
    sk2_item3: "Sampling theory & Statistical inference",
    sk2_item4: "Multivariate Data Analysis (PCA, CA, MCA)",
    sk2_item5: "Econometric public policy evaluation",

    sk3_title: "Evaluation & Explainability (XAI)",
    sk3_item1: "SHAP Interpretability & Feature Importance",
    sk3_item2: "Residual analysis & Heteroscedasticity",
    sk3_item3: "Imbalanced classes: PR-AUC, F1-macro",
    sk3_item4: "Business decision threshold calibration",
    sk3_item5: "Walk-Forward Temporal Validation",

    sk4_title: "Languages & Data Tools",
    sk4_item1: "Python (pandas, numpy, scikit-learn, PyTorch, Streamlit)",
    sk4_item2: "SQL & Relational Database Querying",
    sk4_item3: "R (dplyr, ggplot2, advanced econometrics, Shiny)",
    sk4_item4: "Git, GitHub, CI/CD, Notion, VBA",
    sk4_item5: "GCP, Power BI",

    // Timeline Section
    timeline_badge: "Dual Engineering Education",
    timeline_title: "Education & Professional Experience",
    timeline_desc: "A rigorous mathematical engineering curriculum paired with applied R&D and industrial modeling projects.",
    
    t1_date: "2024 - 2027",
    t1_title: "Graduate Data Scientist Engineer",
    t1_school: "ENSAI — National School for Statistics and Information Analysis (Rennes, France)",
    t1_desc: "Elite French Grande École training in mathematical statistics, Machine Learning, Deep Learning, MLOps, large-scale databases, and data project governance.",

    t2_date: "June 2025 - August 2025",
    t2_title: "Data Scientist (R&D Internship)",
    t2_school: "ECAM Louis de Broglie (Bruz, France)",
    t2_li1: "Engineered an automated immune cell detection and counting model from microscopic images using CNN & YOLO architectures.",
    t2_li2: "Managed dataset collection, labeling, and data augmentation in Roboflow to maximize resilience against optical noise.",
    t2_li3: "Iterative hyperparameter tuning in Python and delivered technical findings to leadership.",

    t3_date: "2022 - 2025",
    t3_title: "Economist & Statistician Engineer",
    t3_school: "ENEAM — National School of Applied Economics and Management",
    t3_desc: "Deep mathematical and econometric foundations: time series econometrics, probability theory, sampling methodology, and inferential statistics.",

    t4_date: "June 2022 - September 2022",
    t4_title: "Statistician (Internship)",
    t4_school: "INStaD — National Institute of Statistics and Demography (Cotonou, Benin)",
    t4_li1: "Econometric modeling of human capital and economic growth using ARDL and VAR models (1980–2020 macroeconomic data).",
    t4_li2: "Conducted stationarity, cointegration, and Granger causality tests on long-term time series.",
    t4_li3: "Authored an analytical synthesis report with public policy recommendations using R and Excel.",

    // About Section
    about_badge: "About My Vision",
    about_title: "Why My Profile Stands Out",
    about_p1_html: "In an industry where many simply import libraries without understanding the underlying math, my dual training at <strong>ENSAI</strong> and <strong>ENEAM</strong> instilled uncompromising mathematical rigor and interpretability at every step of the pipeline.",
    about_p2_html: "Whether tackling <strong>severe class imbalance (0.17% fraud)</strong> without generating expensive false positives, or optimizing <strong>revenue management</strong> across over 1M records, my focus remains constant: <strong class=\"text-white\">driving measurable business ROI, evaluating performance without bias, and delivering transparent explainability</strong> using tools like SHAP.",
    about_p3_html: "I am certified <strong>Linguaskill (English B2)</strong>, proactive, autonomous, and passionate about scalable data systems and MLOps deployment.",
    about_languages: "French (Native) - English (B2)",
    about_hobbies: "Reading, Fitness / Weight Training, Traveling",
    about_pillars_title: "My 3 Foundational Pillars",
    about_pil1_k: "01. BUSINESS UNDERSTANDING FIRST",
    about_pil1_v: "Translating ambiguous business challenges into rigorous data formulations with optimization metrics directly tied to ROI.",
    about_pil2_k: "02. UNCOMPROMISING EVALUATION PROTOCOL",
    about_pil2_v: "Preventing data leakage through strict temporal walk-forward splits and honest metrics (PR-AUC, F1-macro) over deceptive accuracy.",
    about_pil3_k: "03. EXPLAINABILITY & TRUST (XAI)",
    about_pil3_v: "Demystifying predictions for executive decision-makers using SHAP values to build institutional trust and seamless adoption.",

    // Contact Section
    contact_badge: "Career Opportunity",
    contact_title: "Ready to Strengthen Your Data Team?",
    contact_desc_html: "I am actively seeking a <strong>6-month final-year internship starting in January 2027</strong> in Data Science / Machine Learning / MLOps in the Paris Region (Île-de-France) or Remote.",
    contact_email_title: "Direct Email",
    contact_btn_copy: "Copy Address",
    contact_copied: "✓ Copied!",
    contact_linkedin_title: "LinkedIn",
    contact_btn_linkedin: "View Profile",
    contact_phone_title: "Phone",
    contact_btn_phone: "Call Directly",
    contact_btn_cv: "Download Resume (PDF)",

    // Footer
    footer_text: "© 2026 Toussaint BOCO — ENSAI Data Scientist. Built for high technical impact.",

    // Modals
    modal_close: "Close",
    modal_code: "Explore GitHub Code",
    modal_sec_s: "1. Business Context & Problem Formulation (Situation)",
    modal_sec_t: "2. Technical Objectives & Challenges (Task)",
    modal_sec_a: "3. Methodology & Architecture (Action)",
    modal_sec_r: "4. Quantitative Results & Business Value (Result)",

    // Modal Odalys
    modal1_badge: "Case Study • ENSAI 2026",
    modal1_client: "Corporate Partner: Odalys Vacances",
    modal1_title: "Demand Forecasting & Dynamic Revenue Management",
    modal1_sub: "Advanced remaining pickup forecasting across a portfolio of 104 vacation resorts.",
    modal1_s: "Odalys Vacances operates a substantial vacation rental network requiring accurate occupancy rate anticipation to dynamically calibrate pricing schedules (Yield / Revenue Management). The historical dataset exceeds 1,000,000 reservations across 104 resorts throughout France, characterized by strong seasonality and volatile booking patterns.",
    modal1_t: "Accurately predict future bookings up to arrival dates (remaining pickup) across multiple time horizons (D-90, D-60, D-30, D-7). Crucial requirements: prevent overfitting, eliminate temporal data leakage, and provide resort managers with transparent drivers of occupancy demand.",
    modal1_a_li1: "Temporal & Domain Feature Engineering: Derived lead times, school holiday indicators, public holiday impacts, past pickup velocity curves, and competitor pricing trends.",
    modal1_a_li2: "Static Model: Captures macro trends, geographic appeal, resort amenities, and annual seasonality.",
    modal1_a_li3: "Dynamic Model: Continuously adjusts forecasts as reservations materialize closer to stay date.",
    modal1_a_li4: "Walk-Forward Validation: Chronological cross-validation (TimeSeriesSplit) to faithfully replicate live production inference conditions.",
    modal1_a_li5: "XAI Interpretability with SHAP: Computed Shapley values to pinpoint net variable contributions (price elasticities, advance booking windows, geography).",
    modal1_r: "Significant error reduction (MAE / RMSE) compared to legacy heuristics. SHAP explanations empowered revenue directors to confidently execute dynamic repricing strategies and optimize final fill rates without eroding RevPAR.",

    // Modal Fraud
    modal2_badge: "Case Study • FinTech Machine Learning",
    modal2_client: "Specialized Project",
    modal2_title: "Fraud Detection on Highly Imbalanced Data",
    modal2_sub: "Analysis of 285,807 credit card transactions with a 0.17% ground-truth fraud rate.",
    modal2_s: "In banking environments, fraudulent transactions are extremely rare yet financially catastrophic: among 285,807 analyzed records, only 492 are fraudulent (0.17%). A naive model always predicting 'legitimate' would yield 99.83% accuracy while failing to intercept any financial theft.",
    modal2_t: "Engineer an ML classifier achieving high recall (capturing frauds) while maintaining strong precision to avoid false declines that alienate legitimate cardholders. Objective: maximize the Area Under the Precision-Recall Curve (PR-AUC) over deceptive ROC-AUC.",
    modal2_a_li1: "Resampling & Cost Strategies: Benchmarked SMOTE (minority oversampling), NearMiss (undersampling), and Cost-Sensitive Loss weighting (scale_pos_weight parameter in XGBoost).",
    modal2_a_li2: "Model Benchmarking: Rigorous head-to-head comparison between balanced Random Forest and tuned XGBoost.",
    modal2_a_li3: "Threshold Calibration: Shifted default 0.50 probability threshold to an optimal point on the Precision-Recall curve to minimize expected financial loss (investigation cost vs stolen amount).",
    modal2_r_p: "Highly selective final model reducing false positives to a marginal rate while intercepting over 8 out of 10 frauds on the first attempt.",

    // Modal NLP
    modal3_badge: "Case Study • Deep Learning & NLP",
    modal3_client: "Transformers Architecture",
    modal3_title: "Sentiment Analysis & Text Mining via Deep Learning",
    modal3_sub: "Fine-tuning BERT/Transformer architectures for contextual customer feedback classification.",
    modal3_s: "Process high-volume unstructured customer reviews and support tickets to automatically gauge satisfaction, detect critical issues, and triage support routing in real time without human pre-sorting.",
    modal3_t: "Surpass the limits of Bag-of-Words and TF-IDF models which fail on double negatives, informal vocabulary, and long-range semantic dependencies. Deploy an inference pipeline delivering high macro F1-score and sub-50ms latency.",
    modal3_a_li1: "Preprocessing & Tokenization: Sentiment-aware text cleaning, preserving meaningful emoticons, sub-word tokenization using WordPiece / Byte-Pair Encoding.",
    modal3_a_li2: "Transfer Learning Strategy: Fine-tuned the final classification layers of a pre-trained BERT/RoBERTa model with linear learning rate warmup and AdamW optimizer.",
    modal3_a_li3: "Systematic Benchmarking: Validated against a strong TF-IDF n-gram + Linear SVM baseline to quantify the true gain from multi-head self-attention.",
    modal3_r: "+12 points improvement in macro F1-score (91.4%) over TF-IDF baseline. Effectively captures subtle context and irony, enabling automated real-time classification with <35ms latency per input.",

    // Modal RecSys
    modal4_badge: "Case Study • Recommender Systems",
    modal4_client: "Hybrid Filtering & Ranking",
    modal4_title: "Hybrid Recommender System & Personalized Ranking",
    modal4_sub: "Combining Matrix Factorization (SVD/ALS) and Content-Based attribute filtering.",
    modal4_s: "Increase user engagement and conversion rate on an e-commerce / content platform by serving relevant recommendations while mitigating the cold-start challenge and repetitive filter bubbles.",
    modal4_t: "Design a hybrid engine marrying collaborative filtering with item content features. Evaluate offline against ranking-aware metrics: NDCG@K (Normalized Discounted Cumulative Gain), Precision@K, and MAP.",
    modal4_a_li1: "SVD Collaborative Filtering: Singular Value Decomposition on user-item interaction matrix to uncover latent preference factors.",
    modal4_a_li2: "Content-Based Embeddings: Cosine similarity over product attribute vectors to generate instant high-quality recommendations for new users with zero history (Cold-Start solved).",
    modal4_a_li3: "Aggregation & Re-ranking: Dynamic weighted scoring balancing novelty, popularity, and individual affinity.",
    modal4_r: "+24% increase in NDCG@10 compared to standard popularity baselines. Demonstrates outstanding robustness on cold-start items while delivering high catalog diversity."
  }
};

// Fallback compatibility
var translations = window.translations;
