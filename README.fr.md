[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Modèle Excel de Calcul du Coût de Revient Importé (Landed Cost), d'Écart d'Expédition et de Récupération des Déductions Distributeurs (FMCG et Pont de Marge Import)

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-2251FF)
![Tool type: Cost Accounting & Margin Recovery](https://img.shields.io/badge/Tool-Landed%20Cost%20%26%20Deduction%20Audit-051C2C)

<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/2b016445-ce04-4943-8a86-f1371b49f1a3" />

**Une calculatrice de coût de revient importé (landed cost), un modèle de rapprochement des écarts de coûts d'expédition et un modèle Excel de récupération des réclamations et déductions distributeurs. Conçu pour les importateurs de biens de grande consommation (FMCG), les analystes supply chain et les contrôleurs de gestion commerciale afin de rapprocher les estimations des bons de commande du fret maritime réel, des droits de douane, du change (FX) et du transport portuaire local—tout en auditant les déductions sur décomptes des distributeurs (y compris Woolworths, Coles, ALDI, Kmart et Big W) pour révéler la marge nette réelle au niveau SKU.**

> **Accédez aux outils Landed Cost & Pont de Marge Retail (sans inscription ni installation)**
>
> - 🌐 **[Lancez le simulateur web gratuit de Landed Cost et de pont de marge](https://hyvoid.github.io/landed-cost-calculator-retail-deduction-excel/)** — Testez instantanément dans votre navigateur l'écart de coût de revient du bon de commande à l'expédition, la décomposition de l'impact du change et la classification des déductions distributeurs (Édition HTML gratuite).
> - 📥 **[Téléchargez le classeur Excel complet Landed Cost & déductions distributeurs (.xlsx)](https://theseusworkshop.com/l/nakbxr?utm_source=github&utm_medium=GitHub%20README)** — Obtenez le modèle Microsoft Excel à 5 feuilles à tableaux dynamiques pour le rapprochement hors ligne des expéditions, le suivi des litiges de décomptes et les audits récurrents de rentabilité par SKU *(Édition Commerciale Payante — garantie de remboursement de 30 jours)*.


Conçu spécifiquement pour les **flux d'approvisionnement offshore et de distribution à l'import**—des bons de commande aux usines d'outre-mer, au fret maritime international, au dédouanement australien (DAFF/ABF), au transport portuaire local et à la distribution de gros vers les grandes enseignes (**Woolworths, Coles, ALDI, Kmart et Big W**). Plutôt que de remplacer votre ERP, votre comptabilité générale ou votre commissionnaire en douane, ce PCRA (Product Costing & Reconciliation Analyzer) sert de couche d'aide à la décision auditable qui répond à une question commerciale cruciale :

**Une fois entièrement rapprochés le prix d'achat FOB, le fret maritime, les droits de douane, la manutention portuaire locale, les fluctuations de change (FX) et les déductions sur décomptes des distributeurs, quelle marge nette produit reste-t-il réellement—et quelles exceptions exigent une action immédiate de contestation ou de repricing ?**

---

## Indicateurs Clés de Costing à l'Import et Problèmes de Fuite de Marge Retail Résolus

Plutôt que de gérer des factures de transitaires dispersées, des feuilles de dédouanement et des PDF de décomptes distributeurs, ce cadre unifie la comptabilité analytique et l'audit des déductions commerciales. Voici comment le modèle relie les **points de douleur de l'import et de la distribution retail** à des **indicateurs automatisés de pont de marge** :

| Point de douleur marge import & retail | Mécanisme automatisé de rapprochement et d'audit | KPI clés de costing et de marge suivis |
| :--- | :--- | :--- |
| **Coûts de revient standard / estimés sous-évalués** | Recalcule la référence réelle du coût de revient par BC et SKU à partir des règles de composants bruts, révélant les éléments de coût omis avant qu'ils ne faussent les prix de gros. | Coût de revient standard attendu vs recalculé ($/unité), indicateur de sous-évaluation de référence |
| **Fret maritime, droits et frais portuaires non affectés** | Affecte le fret maritime conteneur réel, les droits de douane, la manutention terminale portuaire (THC) et le transport local aux quantités reçues vérifiées. | Coût de revient réalisé par unité, répartition fret/droits/port/transport par SKU |
| **Dépassements confondus FX vs logistique** | Décompose l'écart total de coût d'expédition en isolant le change (budgété vs spot/couvert réel) des hausses opérationnelles de fret et de droits. | Écart total de coût de revient ($ / %), facteur d'écart de change, attribution des dépassements fret & droits |
| **Rapports de « Marge Brute Comptable » illusoires** | Construit un pont de marge SKU multi-étapes reliant la marge comptable aux coûts d'expédition réalisés et aux déductions retail après vente. | Marge Brute Comptable (%) $\rightarrow$ Marge de Revient Réalisée (%) $\rightarrow$ Marge Nette Effective (%) |
| **Codes de décomptes et réclamations distributeurs opaques** | Normalise les codes de déduction fragmentés des grandes enseignes alimentaires et grands magasins en catégories standardisées (rebates contractuels vs amendes contestables). | Catégorie de déduction normalisée (Conditions Commerciales, Co-op, Amendes DIFOT/OTIF, Ullage/Dommage), alertes de codes non mappés |
| **Récupérations manquées de réclamations et refacturations distributeurs** | Signale les déductions contestables de forte valeur selon des seuils configurables en dollars, en attribuant des responsables de litige et des checklists de preuves POD/livraison requises. | Réserve de déductions récupérables ($), statut de récupération des litiges, file d'exceptions SKU prioritaires |

---

## Tutoriel Pas à Pas : Comment Rapprocher les Coûts de Revient Importés et Auditer les Déductions Distributeurs

Le classeur suit un **flux de travail structuré en 4 étapes de clôture d'expédition et de rapprochement financier mensuel** : configurez une fois vos taux de change, droits et mappages de codes distributeurs, collez les exports bruts ERP/décomptes, examinez le pont d'écarts, puis déclenchez les récupérations de réclamations.

### Étape 1 : Configurer les Taux de Change, Seuils d'Écart et Mappages de Déductions Distributeurs
Ouvrez la feuille `01_Rules_Mapping` pour définir vos paramètres de gouvernance commerciale et vos tables de recherche :

- **Contrôles financiers et FX :** Définissez la période de reporting, la devise comptable de base (p. ex. `AUD` / `USD`), le taux de change budgété, le taux de change réel constaté et le plancher de marge brute cible.
- **Seuils d'alerte d'exception :** Définissez les tolérances acceptables d'écart de coût de revient (%) et le seuil en dollars pour les alertes de déductions distributeurs de forte valeur.
- **Normalisation des droits et codes distributeurs :** Passez en revue les taux de droits de douane et mappez les codes propriétaires de déductions distributeurs (Woolworths, Coles, ALDI, Kmart, Big W) vers des catégories comptables standardisées et des règles d'éligibilité à la récupération.

### Étape 2 : Importer les Estimations BC, Factures Douanières et Relevés de Décomptes Distributeurs
Exportez les enregistrements de transactions bruts depuis votre ERP, votre système d'inventaire, votre commissionnaire en douane ou les portails fournisseurs des enseignes (p. ex. SAP, NetSuite, MYOB, Cin7, Dear/Unleashed, CSV de décomptes fournisseurs) et collez-les dans les blocs de saisie structurés de `02_Source_Data` :

- **Achats et réception :** Estimations de coûts des Bons de Commande (BC) et quantités réellement reçues en entrepôt par SKU.
- **Logistique et dédouanement :** Factures de fret international réel, liquidations de droits de douane, frais portuaires et factures de transport local.
- **Ventes commerciales et déductions :** Factures de ventes brutes distributeurs et relevés de déductions de décomptes ligne par ligne (en conservant les identifiants de référence des documents originaux pour la traçabilité d'audit).

### Étape 3 : Auditer le Moteur de Coût de Revient et la Décomposition des Écarts
Parcourez les feuilles de calcul automatisées pour vérifier l'économie de l'expédition avant de finaliser les rapports de direction :

1. **Vérification de la référence de coût (`03_Cost_Engine`) :** Examinez le coût de revient standard recalculé par SKU pour détecter les hypothèses de droits ou de fret manquantes dans votre feuille de prix initiale.
2. **Rapprochement des écarts et déductions (`04_Reconciliation`) :** Revoyez les coûts de revient réels par unité, l'attribution des écarts facteur par facteur (FX vs Fret vs Droits vs Port), les catégories normalisées de déductions distributeurs et les indicateurs automatiques de récupération.
3. **Contrôle d'intégrité à résidu zéro :** Vérifiez que tous les avertissements de validation sont levés et que le résidu de rapprochement est égal à zéro avant de vous fier aux résultats exécutifs.

### Étape 4 : Prioriser les Litiges de Réclamations et Opérationnaliser dans le Classeur Excel
Ouvrez `05_Management_Summary` pour transformer les écarts financiers en actions commerciales :
- Examinez le **Pont de Marge** pour les produits subissant une érosion sévère (p. ex. un SKU passant d'un `35% Book Gross Margin` à un `24% Net Effective Margin`).
- Revoyez la **File de Récupération des Litiges**, attribuez un responsable de comptes ou logistique, rassemblez les preuves de livraison (POD) ou e-mails d'acheteurs, et suivez le statut de la réclamation jusqu'à sa résolution.

> 🚢 **Prêt à arrêter la fuite de marge sur vos expéditions import et vos comptes retail ?** 
> Après avoir exploré le pont d'écarts dans le **[Simulateur Gratuit de Landed Cost et de Marge dans le Navigateur](https://hyvoid.github.io/landed-cost-calculator-retail-deduction-excel/)**, procurez-vous le **[Classeur Excel Complet PCRA de Récupération des Coûts de Revient et Déductions (.xlsx)](https://theseusworkshop.com/l/nakbxr?utm_source=github&utm_medium=GitHub%20README)** pour traiter vos propres lots d'expéditions hors ligne, personnaliser les mappages de déductions distributeurs et maintenir un audit mensuel de marge répétable *(nécessite Microsoft 365 ou Excel 2021+ pour les formules de tableau dynamique ; garantie de remboursement de 30 jours)*.

---

## Pourquoi J'ai Construit ce Cadre Landed Cost Import et Pont de Marge Retail

Dans une activité d'import offshore et de distribution retail de gros, le prix d'achat FOB usine n'est que la ligne de départ du costing produit.

Un devis commercial est généralement établi des mois à l'avance avec un taux de change budgété et un fret conteneur estimé. Lorsque l'expédition physique passe la douane, l'importateur fait face aux surcharges réelles de fret maritime, aux droits de douane, aux frais de manutention terminale portuaire et aux factures de transport local. Des semaines après la livraison aux centres de distribution retail, arrivent les avis de décompte des distributeurs—déduisant les rebates promotionnels co-op, les pénalités de livraison tardive DIFOT/OTIF, les amendes de conformité code-barres/cartons ou les réclamations de manquants. Comme ces enregistrements arrivent à des semaines d'intervalle via transitaires, commissionnaires en douane, équipes d'entrepôt et comptes clients, ils cohabitent rarement dans le même système.

### L'Illusion du « 35% de Marge Comptable vs 24% de Marge Nette Effective »
L'échec analytique fondamental de la distribution de gros est de considérer chaque feuille départementale comme complète :
- Une **feuille de coûts achats** peut être mathématiquement exacte tout en omettant totalement le transport portuaire local ou les frais de dédouanement.
- Un **rapport de marge brute des ventes** paraît sain à **35% de Marge Comptable** car il repose sur des coûts de revient standard obsolètes.
- Un **grand livre de comptes clients** passe en charges les déductions de conformité des distributeurs comme un coût routier des affaires sans vérifier si les POD d'entrepôt soutiennent une contestation formelle—ou inversement, gaspille des heures de personnel à courir après des rebates contractuels non récupérables.

Lorsque les dépassements réels d'expédition et les déductions distributeurs non récupérées sont reliés, ce SKU au « sain » **35% de marge brute comptable s'effondre fréquemment à 24% de marge nette effective**. À 24%, l'action commerciale change complètement : l'équipe doit immédiatement repricer le SKU, renégocier les conditions fret/fournisseur, corriger la conformité DIFOT de l'entrepôt ou déposer une réclamation de récupération de déduction.

J'ai construit PCRA pour empaqueter ce flux de diagnostic de bout en bout dans un classeur inspectable et répétable—rendant visibles les hypothèses de coûts cachées et les déductions retail contestables avant que l'érosion de marge ne devienne permanente.

---

## Feuilles Import Dispersées vs Moteur Intégré Landed Cost et Déductions

| Dimension de costing et d'audit de marge | Exports ERP dispersés et feuilles de coûts ad hoc | Classeur PCRA Landed Cost et Pont de Marge (cet outil) |
| :--- | :--- | :--- |
| **Références de coût de revient standard** | Les frais portuaires omis ou droits mal calculés s'infiltrent silencieusement dans les grilles de prix de gros et rapports de marge. | Recalcule indépendamment le coût de revient attendu par BC et SKU, signalant les références sous-évaluées avant la revue de pricing. |
| **Affectation fret et douane après BC** | Les factures de fret conteneur, droits et transport local arrivent tard et sont comptabilisées en comptes de frais généraux forfaitaires. | Affecte les frais logistiques et douaniers réels au niveau expédition aux quantités reçues jusqu'au niveau SKU. |
| **Attribution des écarts FX vs fret** | Les équipes financières voient un dépassement global mais ne peuvent isoler la dépréciation monétaire des hausses de tarifs des transitaires. | Décompose l'écart de coût de revient par facteur spécifique (**mouvement de change, fret maritime, droits de douane, manutention portuaire, transport local**). |
| **Normalisation des déductions multi-enseignes** | Les codes de décomptes opaques de Woolworths, Coles, ALDI, Kmart et Big W empêchent l'analyse des pertes entre comptes. | Normalise les codes de déduction spécifiques aux enseignes en catégories structurées et met en évidence les codes non mappés pour classification immédiate. |
| **Récupération des réclamations et amendes retail** | Les amendes DIFOT contestables et réclamations de manquants restent enfouies dans les déductions de rebates promotionnels, laissant de l'argent sur la table. | Applique des seuils en dollars, des indicateurs d'éligibilité à la récupération, des attributions de responsables et des checklists de preuves pour bâtir une file de litiges actionnable. |
| **Visibilité réelle de la rentabilité par SKU** | La direction s'appuie sur un unique Marge Brute % vedette qui masque les dépassements supply chain et les fuites de conformité retail. | Génère un **Pont de Marge par SKU** de bout en bout (`Book Gross Margin` $\rightarrow$ `Realized Landed Margin` $\rightarrow$ `Net Effective Margin`). |

---

## À Qui S'Adresse cet Outil de Costing et de Rapprochement : Rôles et Flux

Cette boîte à outils double format (Simulateur Navigateur Gratuit + Classeur Excel Commercial) est conçue pour les équipes finance, supply chain et retail commercial opérant dans les biens de consommation à forte intensité d'import :

- **Importateurs, grossistes et opérateurs de marques FMCG :** Obtenez une visibilité complète sur l'économie unitaire offshore. Utilisez la **calculatrice de coût de revient importé** pour vérifier les coûts réels d'arrivée conteneur depuis les usines d'Asie/d'outre-mer jusqu'au dédouanement portuaire australien et à la livraison nationale.
- **Contrôleurs de coûts, directeurs financiers et équipes FP&A commerciales :** Remplacez les rapprochements d'écarts de fin de mois fragiles par un **modèle standardisé de rapprochement coût de revient BC vs réel**. Séparez gains/pertes de change des écarts de fret et rapprochez le coût des marchandises vendues (COGS) avec une traçabilité documentaire complète.
- **Responsables Grands Comptes Nationaux (NAMs) et responsables commerciaux retail :** Cessez de voler à l'aveugle dans les revues d'assortiment des enseignes. Utilisez le **pont de marge SKU et l'analyseur de déductions** pour voir précisément comment les conditions commerciales, rebates promotionnels et pénalités de conformité impactent la rentabilité nette chez **Woolworths, Coles, ALDI, Kmart et Big W**.
- **Spécialistes Comptes Clients (AR) et Récupération de Déductions :** Transformez les relevés de décomptes distributeurs chaotiques en un **suivi de litiges de réclamations** priorisé. Isolez les amendes de conformité et réclamations de manquants de forte valeur des rebates contractuels pour que votre équipe ne poursuive que l'argent récupérable adossé à des preuves de livraison.
- **Analystes Supply Chain, Logistique et Achats :** Auditez les factures de transitaires, classifications tarifaires des commissionnaires en douane et frais de transport portuaire par unité reçue pour identifier les inefficacités d'utilisation des conteneurs et surfacturations fournisseurs.

---

## Cas d'Usage Sectoriels et Scénarios Import/Retail de Longue Traîne

Que vous importiez des articles maison de marque de distributeur, des produits de grande consommation (FMCG), du textile ou de la quincaillerie vers les grandes enseignes, ce modèle s'adapte aux scénarios de marge à forte friction :

### 1. Audit des Déductions Supermarchés et Grands Magasins Australiens (Woolworths, Coles, ALDI, Kmart, Big W)
Fournir les grands distributeurs nationaux australiens implique de naviguer des conditions commerciales fournisseurs complexes, du financement promotionnel, des tolérances d'ullage et des régimes stricts de conformité supply chain (tels que les créneaux de livraison DIFOT / OTIF et les règles d'étiquetage palettes/cartons). En mappant les combinaisons **Enseigne + Code de Déduction** dans `01_Rules_Mapping`, les équipes commerciales séparent automatiquement les rebates contractuels convenus des pénalités de conformité contestables.

### 2. Décomposition des Écarts Fret Maritime Conteneur, Droits de Douane et FX
Quand un Bon de Commande offshore est chiffré à `0.68 AUD/USD` avec un taux de fret conteneur estimé à `$3,500`, mais passe la douane trois mois plus tard à `0.64 AUD/USD` avec surcharges de congestion de haute saison et frais de détention portuaire, les marges apparentes produit s'évaporent. Le moteur `04_Reconciliation` isole la part de la hausse de coût unitaire due au **mouvement de change par rapport à l'inflation logistique**, indiquant si la finance doit ajuster la couverture de change ou si les achats doivent renégocier les tarifs du transitaire.

### 3. Justification des Hausses de Prix de Gros et Préparation des Revues d'Assortiment
Les acheteurs retail acceptent rarement des hausses de prix de gros fondées sur des affirmations vagues de « coûts supply chain en hausse ». Utilisez la **référence recalculée du coût de revient et la décomposition des facteurs d'écart** pour présenter des preuves de coûts vérifiables au niveau des composants (droits, fret maritime, FX) lors des négociations avec les acheteurs retail, ou identifiez les SKU structurellement non rentables nécessitant déréférencement ou ré-ingénierie.

---

### Périmètre Opérationnel et Avertissement de Gouvernance
*PCRA est un cadre analytique d'aide à la décision et un classeur de rapprochement des coûts—ni un ERP transactionnel, ni une comptabilité générale légale, ni un système de télédéclaration en douane agréé, ni un service de conseil fiscal, ni un portail automatisé de litiges distributeurs. Il ne vérifie pas indépendamment les factures de fret tierces, n'établit pas le droit légal de récupérer une déduction retail, ni ne dépose de réclamations auprès des acheteurs des enseignes. L'exactitude des résultats dépend strictement de l'exhaustivité des enregistrements sources, des mappages de codes et des hypothèses de paramètres fournis par l'utilisateur. L'édition commerciale Excel exige **Microsoft 365 ou Excel 2021 et ultérieur** (avec prise en charge des formules de tableau dynamique).*

---

## À Propos du Créateur

Je conçois des outils d'aide à la décision opérationnels, légers et inspectables pour des flux commerciaux récurrents comportant trop de variables mouvantes pour être suivies mentalement, sans exiger le déploiement d'une suite logicielle d'entreprise coûteuse. La question d'ingénierie directrice est : **quels points de données exacts de coûts, logistique et commercial doivent être réunis en un seul endroit pour prendre en toute confiance la prochaine décision de pricing ou de litige ?**

## Détails Techniques

<details>
<summary>Pour les relecteurs techniques, praticiens Excel et collaborateurs</summary>

### Architecture du Classeur

La conception Excel utilise cinq feuilles et un flux unidirectionnel allant de la configuration et des données sources aux calculs et sorties de direction.

| Feuille | Rôle | Entrées ou sorties principales |
|---|---|---|
| `01_Rules_Mapping` | Contrôle des paramètres et mappages | Devise de base, période de reporting, taux de change budgété/réel, tolérances, mappages de droits, mappages de déductions distributeurs, listes de validation |
| `02_Source_Data` | Ingestion des données sources | BC et coûts estimés ; fret d'expédition, droits, frais portuaires et quantité reçue ; factures distributeurs, quantités facturées et déductions |
| `03_Cost_Engine` | Recalcul du coût de revient | Valeur FOB recalculée, droits standard, coût de revient, écart de référence, statut d'audit |
| `04_Reconciliation` | Revue des écarts de coûts et déductions | Coût de revient réel par unité, écart total, composantes d'écart, catégorie de déduction normalisée, indicateur de récupération, statut, guide de preuves |
| `05_Management_Summary` | Vue décisionnelle | Ventes nettes, étapes de marge, érosion de marge, exceptions SKU à fort impact, synthèses de déductions et récupérations distributeurs |

```text
01_Rules_Mapping ───────┐
   │ parameters/rules   │ validation and lookups
   ▼                    ▼
02_Source_Data ──────► 03_Cost_Engine
   │                         │ recalculated baseline
   └─────────────────────┬───┘
                         ▼
                 04_Reconciliation
                  │ variance + claims
                  ▼
                05_Management_Summary
```

**Groupes de données principaux**

- `Table_FX` : code devise, taux de change budgété, taux réel et mouvement de change calculé.
- `Table_Duty` : catégorie, préfixe de code SH, taux de droits par défaut et taux de droits FTA.
- `Table_Deductions` : enseigne, code de déduction brut, catégorie normalisée, classification commerciale, indicateur de récupérabilité, responsable d'action et preuves requises.
- `Table_PO_Est` : identité BC/SKU, quantité commandée, devise, prix unitaire FOB, fret estimé, taux de droits estimé, autres coûts de revient estimés et coût de revient comptable.
- `Table_Actual_Logistics` : référence BC/expédition, fret réel, droits, coûts portuaire/transport local et quantité reçue.
- `Table_Retail_Deductions` : enregistrements de factures et déductions distributeurs, codes bruts et montants inclus.

Le document de conception source spécifie 29 champs d'entrée (`In-01` à `In-29`) et 21 sorties clés (`Out-01` à `Out-21`). La couche de sortie dépend des mappages de paramètres et des données sources ; la synthèse dépend du moteur de coûts et des résultats de rapprochement.

### Trois Pièges qui Prennent Même les Analystes de Coûts Import Expérimentés

#### Piège 1 — Considérer le chiffre existant de coût de revient comme vérifié

1. **Décision :** Conserver le prix de vente actuel d'un SKU car le classeur affiche une marge acceptable.
2. **Hypothèse cachée :** Le coût de revient comptable inclut chaque composant pertinent et utilise la bonne base de conversion.
3. **Comment la recommandation change :** Une référence recalculée peut révéler du fret, des droits ou des frais locaux omis. Une marge qui semblait acceptable peut nécessiter un repricing ou une correction du modèle de coûts.
4. **Pourquoi le raisonnement initial échoue :** Une valeur de cellule historique ne prouve pas que son calcul sous-jacent est complet.
5. **Approche corrigée :** Recalculer le coût standard à partir du taux de change mappé, du prix FOB, du fret estimé, des droits estimés et des autres frais de revient ; le comparer au coût comptable enregistré.
6. **Résultat décisionnel :** Escalader les différences significatives avant d'utiliser la référence pour le pricing ou l'évaluation de performance.

<details>
<summary>Référence de formules — référence de coût de revient</summary>

Logique métier illustrative :

```text
Recalculated FOB (base currency) = FOB unit price × selected FX rate
Recalculated duty = recalculated FOB × applicable duty rate
Recalculated landed cost per unit
  = recalculated FOB + estimated freight per unit
    + recalculated duty + estimated other landed cost
Baseline variance = recalculated landed cost − book landed cost
```

La conception source utilise `XLOOKUP`, `LET`, `FILTER` et des sorties de tableau dynamique pour appliquer les mappages et étendre les calculs sur les enregistrements renseignés. La base imposable exacte et le traitement douanier doivent être confirmés pour les marchandises et le dédouanement applicables.

</details>

#### Piège 2 — Considérer le dépassement de coût total comme cause racine

1. **Décision :** Demander à l'équipe logistique de réduire le fret car le coût de revient total a dépassé l'estimation.
2. **Hypothèse cachée :** Le fret est le principal facteur de l'écart.
3. **Comment la recommandation change :** La différence peut plutôt provenir des taux de change, des droits, des frais portuaires/transport local, de décalages de quantités ou de plusieurs facteurs à la fois.
4. **Pourquoi le raisonnement initial échoue :** Un écart total quantifie le résultat, pas sa cause.
5. **Approche corrigée :** Comparer les coûts unitaires réels à la base attendue, calculer les composantes d'écart disponibles et vérifier que leur somme rapproche du total.
6. **Résultat décisionnel :** Confier l'investigation au responsable de coûts le plus plausible, en gardant visibles les différences non résolues ou non mappées.

<details>
<summary>Référence de formules — rapprochement des écarts</summary>

```text
Total cost variance
  = (actual landed cost per unit − expected landed cost per unit)
    × actual received quantity

Freight variance = (actual freight per unit − estimated freight per unit)
                   × actual received quantity
Duty variance    = (actual duty per unit − expected duty per unit)
                   × actual received quantity
FX variance      = FOB amount × (actual FX rate − budget FX rate)
                   × actual received quantity
Port variance    = (actual port cost per unit − estimated other landed cost)
                   × actual received quantity

Residual = total variance − sum of mapped variance components
```

Un résidu de zéro est un utile contrôle arithmétique interne, pas la preuve que chaque valeur source ou attribution est économiquement correcte. L'exemple actuel d'écart de prix de la spécification source réutilise la même valeur FOB pour le prix réel et le prix attendu, ce qui rend cette composante nulle par construction. Un véritable écart de prix d'achat exige un prix FOB attendu distinct ou un champ documenté d'ajustement de prix. La logique des composantes doit être validée avant d'utiliser le modèle pour un reporting formel.

</details>

#### Piège 3 — Considérer chaque déduction distributeur comme perte ou réclamation récupérable

1. **Décision :** Passer en charges toutes les déductions—ou poursuivre chaque déduction en réclamation.
2. **Hypothèse cachée :** Tous les codes de déduction ont le même statut contractuel et les mêmes exigences de preuves.
3. **Comment la recommandation change :** Un rebate contractuel peut être un coût commercial normal, tandis qu'une amende de conformité de livraison peut justifier une investigation si le dossier de livraison contredit la réclamation.
4. **Pourquoi le raisonnement initial échoue :** Un code ou un montant brut seul n'établit ni la classification commerciale ni le droit à récupération.
5. **Approche corrigée :** Normaliser la paire enseigne/code, appliquer un indicateur de récupérabilité revu, identifier le responsable et les preuves requises, et prioriser les éléments de forte valeur.
6. **Résultat décisionnel :** Concentrer l'effort sur les réclamations à base plausible et documentation suffisante ; laisser les codes inconnus visiblement non résolus.

<details>
<summary>Référence de formules — mappage et priorisation des déductions</summary>

La conception source construit une clé de recherche normalisée à partir du nom de l'enseigne et du code brut, puis utilise `XLOOKUP` pour récupérer la catégorie de déduction, l'indicateur de récupérabilité et le guide de preuves. Les codes inconnus renvoient un statut explicite d'inconnu plutôt que d'être traités silencieusement comme une catégorie confirmée. Un seuil tel que `Param_Tol_Deduct` peut placer les déductions signalées éligibles dans un bassin de revue prioritaire.

</details>

### Scénario d'Exemple

Ce qui suit est un **calcul illustratif**, non une affirmation concernant une transaction client testée.

Supposons qu'un SKU ait ces données par unité :

| Élément | Montant |
|---|---:|
| Prix unitaire FOB | US$10.00 |
| Taux de change budgété | A$1.50 par US$1 |
| Fret estimé par unité | A$1.20 |
| Autres coûts de revient estimés par unité | A$0.60 |
| Taux de droits estimé | 5% |
| Fret réel par unité | A$1.60 |
| Droits réels par unité (registres de dédouanement) | A$0.85 |
| Port/transport local réel par unité | A$0.90 |
| Taux de change réel | A$1.55 par US$1 |
| Quantité reçue | 1,000 unités |

Avec le taux de change budgété, la référence FOB est de A$15.00 par unité. À un taux de droits de 5% sur cette base FOB, les droits estimés sont de A$0.75. Le coût de revient estimé est donc de A$17.55 par unité. Si le FOB réel reste US$10.00, sa conversion à A$1.55 donne A$15.50 ; en ajoutant fret, droits et port/transport locaux réels, on obtient A$18.85 par unité.

L'écart indicatif est de A$1.30 par unité, soit A$1,300 pour 1,000 unités. Cela suffit pour dépasser un seuil d'écart absolu d'exemple de A$500 ; le lot doit donc être investigué. Le mouvement de change contribue à hauteur de A$0.50 par unité selon ces hypothèses ; le fret dépasse l'estimation de A$0.40, les droits de A$0.10 et le port/transport local de A$0.30. Ces composantes totalisent A$1.30 par unité.

La recommandation pratique est de vérifier la valorisation en douane et la base des droits, de rapprocher la facture de fret et les frais locaux, et de confirmer si la quantité reçue est le bon dénominateur d'affectation. Ce n'est qu'une fois le pont de coûts rapproché que l'équipe doit décider de repricer, de mettre à jour les estimations futures ou de contester un frais fournisseur ou logistique.

### Référence des Formules

<details>
<summary>Contrôles FX et signalisation des risques</summary>

**Objectif :** Comparer les taux de conversion budgétés et réels et signaler les mouvements dépassant la tolérance configurée.

```excel
=D15:D20-C15:C20
```

La conception calcule le mouvement en pourcentage par rapport au taux budgété et le compare à `Param_Tol_Pct`. Vérifiez que le taux budgété n'est ni nul ni vide avant tout calcul en pourcentage ; une implémentation de production devrait renvoyer un statut de validation clair plutôt qu'une division par zéro inexpliquée.

</details>

<details>
<summary>Validation des sources et listes dynamiques</summary>

**Objectif :** Identifier les lignes de saisie incomplètes ou invalides et maintenir les listes déroulantes synchronisées avec les mappages.

```excel
=SORT(UNIQUE(FILTER(A15:A20,A15:A20<>"")))
```

La conception utilise aussi `FILTER` pour sélectionner les enregistrements renseignés, `UNIQUE` pour construire des listes distinctes, `TRIM`/`UPPER` pour normaliser les clés de recherche et `XLOOKUP` pour récupérer les valeurs mappées. Les plages de débordement des tableaux dynamiques doivent rester dégagées.

</details>

<details>
<summary>Pont de marge de direction</summary>

**Objectif :** Montrer comment la marge vedette évolue à mesure que l'écart de coût de revient et les déductions distributeurs sont intégrés.

```text
Net sales = gross billed revenue − contractual rebates
Book gross margin = net sales − standard landed cost
Realized margin = book gross margin − landed-cost variance
Net effective profit = realized margin − non-rebate deductions
Net effective margin = net effective profit ÷ net sales
Margin erosion = book gross margin rate − net effective margin rate
```

La spécification du classeur regroupe les catégories de déduction autres que `REB` comme déductions hors rebate dans sa logique de synthèse. Cette classification doit être revue à l'aune du dictionnaire commercial réel avant de considérer le résultat comme une marge comptable finale.

</details>

### Règles de Validation

| Champ ou zone | Règle | Comportement attendu en cas d'invalidité |
|---|---|---|
| Numéro de BC et SKU | Identifiants obligatoires ; format de texte cohérent | Signaler les enregistrements incomplets ; ne pas présumer qu'une ligne sans correspondance est rapprochée |
| Quantité commandée et quantité reçue | Doivent être positives pour les affectations unitaires | Investiguer les quantités nulles ou négatives avant d'interpréter les coûts unitaires |
| Code devise | Doit correspondre à une devise configurée dans `Table_FX` | Examiner la devise non mappée ; ne pas se fier à un taux de repli |
| Taux de change budgété et réel | Doivent être numériques et valides pour la période | Corriger le taux et revérifier les calculs dépendants |
| Taux de droits et mappage SH/catégorie | Doivent correspondre aux marchandises et au traitement douanier applicables | Vérifier la classification et l'éligibilité tarifaire/FTA applicable |
| Lien BC-logistique | La référence BC doit correspondre à la clé BC source | Résoudre les enregistrements sans correspondance ou dupliqués avant comparaison des coûts |
| Enseigne + code de déduction brut | Doit mapper à une catégorie interne revue | Garder `CLAIM-UNKNOWN` / revue en attente visible et mettre à jour le dictionnaire |
| Indicateur de récupérabilité | Doit être revu ; les valeurs `Y`, `N` ou en attente ont des significations différentes | Ne pas assimiler un indicateur à un droit légal de récupération |
| Plages de sortie de tableau dynamique | Les cellules de débordement doivent être vides et non écrasées manuellement | Dégager les cellules obstructives si `#SPILL!` apparaît |
| Rapprochement des écarts | Le résidu doit rapprocher de zéro selon la politique d'arrondi définie | Investiguer coûts manquants, bases incohérentes ou affectations incorrectes |
| Calculs de marge | Les ventes nettes doivent être non nulles pour des taux de marge significatifs | Renvoyer un blanc/zéro contrôlé ou un avertissement plutôt qu'interpréter un résultat à dénominateur nul |

### Exigences d'Exploitation et Limites Connues

- **Version d'Excel :** Microsoft 365 ou Excel 2021+ est requis pour les fonctions telles que `FILTER`, `XLOOKUP`, `SORT`, `UNIQUE`, `LET`, `HSTACK`, `BYROW`, `LAMBDA` et `CHOOSEROWS`. Les versions antérieures peuvent afficher des erreurs `_xlfn.` ou ne pas calculer le modèle.
- **Aucune dépendance VBA :** La conception du classeur est pilotée par formules et n'exige aucune macro VBA.
- **Échelle des données :** Le manuel source recommande de limiter les lignes BC à environ 10,000 par période de reporting et les enregistrements logistique/déductions à environ 50,000. Il décrit 100,000 lignes comme limite supérieure de compatibilité, avec des fichiers de période séparés recommandés au-delà. Les performances réelles dépendent de l'implémentation du classeur et du matériel.
- **Gestion des entrées :** Collez les valeurs dans les zones de données sources désignées. N'écrasez pas les sorties de formules et n'obstruez pas les plages de débordement des tableaux dynamiques.
- **Collaboration :** Pour les gros imports, utilisez un seul éditeur à la fois et enregistrez après validation pour réduire les conflits d'édition simultanée.
- **Orientation australienne :** Le modèle est conçu autour de l'approvisionnement offshore, du fret maritime, du dédouanement d'import australien et de la distribution retail australienne. La valorisation en douane, la classification tarifaire, l'éligibilité FTA, le traitement de la GST et les autres exigences fiscales/douanières doivent être confirmés pour la transaction réelle. Adaptez le modèle avant de l'utiliser pour des juridictions avec des bases de valorisation ou fiscales différentes.
- **Limite d'aide à la décision :** PCRA ne remplace ni les registres comptables, ni un ERP, ni un conseil en douane, ni un conseil fiscal, ni des procédures formelles de litige avec les enseignes. Il ne vérifie pas indépendamment les preuves et ne garantit pas la récupération.

### Dépannage

| Symptôme | Cause probable | Première réponse |
|---|---|---|
| `#SPILL!` | Une valeur ou note bloque la plage de sortie du tableau dynamique | Dégager la cellule obstructive sans supprimer l'ancre de formule |
| Les modifications ne se recalculent pas | Le mode de calcul d'Excel est réglé sur Manuel | Passer le calcul en Automatique ou appuyer sur `F9` |
| `CLAIM-UNKNOWN` ou `#N/A` | La paire enseigne/code est absente de la table de mappage | Ajouter et examiner le nouveau mappage dans `01_Rules_Mapping` |
| `####` dans les cellules de montants | La largeur de colonne est trop étroite | Ajuster automatiquement la largeur de colonne |
| Résidu d'écart non nul | Frais manquant, décalage de quantité ou base d'affectation incohérente | Vérifier les factures sources, la quantité reçue et chaque composante d'écart |

</details>

## Logique Métier et Méthodologie

PCRA combine **reconstruction du coût de revient, analyse des écarts, affectation des coûts unitaires, classification des déductions et analyse en pont de marge**. Chaque méthode traite un mode de défaillance différent.

La reconstruction du coût de revient établit une référence comparable à partir des composantes de coûts d'achat et d'import plutôt que de traiter un chiffre historique de feuille de calcul comme faisant autorité. L'affectation des coûts unitaires rend les frais au niveau expédition comparables à l'économie au niveau produit, à condition que la quantité d'affectation et la base de coûts soient appropriées. L'analyse des écarts transforme ensuite un dépassement unique en investigation structurée à travers les facteurs représentés dans les données sources. Un résidu de rapprochement sert de contrôle arithmétique : si le total ne peut être expliqué par les composantes mappées, le résultat n'est pas prêt à être approuvé.

La classification des déductions ajoute une couche distincte de contrôle commercial. Un rebate contractuel et une amende de livraison contestée réduisent tous deux l'argent encaissé, mais ils n'appellent pas la même action. Mappager les codes, attribuer un responsable et identifier les preuves requises aident l'équipe à prioriser les réclamations sans présumer que chaque déduction est récupérable.

Enfin, le pont de marge relie ces constats opérationnels à la décision que la direction doit réellement prendre : un produit reste-t-il commercialement viable après les coûts de revient réels et les déductions distributeurs. Ces calculs appuient l'investigation et la priorisation ; ils ne remplacent pas la vérification des documents sources, les politiques comptables, le conseil en douane ni une évaluation juridique d'une réclamation retail.

## Autres Outils de Cette Série

Explorez le [profil GitHub Theseus Workshop](https://github.com/HyVoid) pour découvrir des outils d'analyse opérationnelle légers basés sur Excel. Les outils connexes portent sur l'estimation construction, le contrôle des coûts de projet et d'autres décisions commerciales récurrentes.

## Licence

Ce projet est sous licence **Apache License 2.0**. Consultez le [texte de la Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) pour les termes de la licence.
