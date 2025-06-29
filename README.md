# React + Vite



### npm install @heroicons/react
Heroicons est une bibliothèque d'icônes SVG open source spécialement conçue pour s'intégrer facilement avec React, Vue, ou directement dans le HTML. Elle a été créée par l'équipe de Tailwind CSS, et elle propose :

Des icônes gratuites au style simple, moderne et clair

Deux styles : outline (contour fin) et solid (plein)


### Documentation
## Micro-creche: Les petits Oursons
    https://www.croix-rouge.fr/micro-creche-les-p-tits-oursons
    https://www.grandlyon.com/creche/creche-les-petits-oursons
## creche: Oursons & Cie 
    https://www.croix-rouge.fr/eaje-collectif-oursons-et-compagnie


Responsive : Utilise sm: et lg:
Impression (print:)

| Pratique                                | Pourquoi                                 |
| --------------------------------------- | ---------------------------------------- |
| `<span role="img" aria-label="...">`    | Pour décrire l’emoji aux lecteurs        |
| `{" "}`                                 | Pour gérer proprement les espaces en JSX |
| Éviter uniquement des emojis décoratifs | Ils peuvent être ignorés sinon           |

# React admin npm install react-admin ra-data-simple-rest


## props: react admin
Dans React-Admin, les composants comme List, Edit, Create reçoivent automatiquement des props (propriétés) de la part du framework. Ces props contiennent des infos importantes comme :

les données (records),

les fonctions de pagination,

les filtres,

les permissions d’accès,

-> Si tu oublies de passer ...props, ça casse la communication entre React-Admin et ton composant, donc rien ne s’affiche, ou ça peut causer des bugs.

### format={v => v?.toLowerCase?.()}  parse={v => v.toLowerCase()}
format = transforme la valeur affichée dans le formulaire.

parse = transforme la valeur envoyée au backend.

###  const record = useRecordContext() : 
est un hook fourni par React Admin qui récupère l’objet de données actuel (appelé record) pour le formulaire ou la page d’édition en cours.
record contient les données de table que tu es en train de modifier

### slug {/* Ce que on utilise dans L'URL /accueil /a-propos  /pourqoui une crêche? */}

# Responsive
 partir de md (écran ≥768px) :

flex : disposition horizontale des liens

items-center : verticalement centrés

space-x-6 : espace horizontal entre les éléments


    absolute md:static top-full left-0 w-full md:w-auto
Sur mobile :

absolute positionne le menu par rapport au parent

top-full : place le menu juste sous la navbar

left-0 w-full : prend toute la largeur

Sur desktop (md) :

static : position normale

w-auto : prend juste la largeur du contenu

| Mobile (par défaut) | Desktop (`md:`)  |
| ------------------- | ---------------- |
| `hidden` ou `block` | `flex`           |
| `absolute`          | `static`         |
| `w-full`            | `w-auto`         |
| `bg-white`          | `bg-transparent` |

| Écran      | `menuOpen`  | Résultat d’affichage                  |
| ---------- | ----------- | ------------------------------------- |
| 📱 Mobile  | `false`     | Menu **caché** (`hidden`)             |
| 📱 Mobile  | `true`      | Menu **affiché** (`block`)            |
| 💻 Desktop | Peu importe | Menu **toujours affiché** (`md:flex`) |
