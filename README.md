# Crèche App – Interface Front‑end

Une application web développée en React (avec Create React App) qui offre une interface intuitive aux parents et administrateurs pour :

- Visualiser les activités des enfants et leurs profils

- Consulter, ajouter, modifier et supprimer des activités et des événements

- Gérer l’upload et le téléchargement de documents et de photos

- Accéder à leur espace personnel, gérer leur profil et s’authentifier via JWT

## Prérequis

- Node.js installé sur votre machine

## Installation & Démarrage

1. **Cloner le dépôt**  :  
   Cloner le dépôt et se placer dans le dossier `client` :  
   
```git clone https://github.com/fadia89/app-creche-front```
  
## Installer les dépendances :
Dans un terminal, se déplacer dans le dossier client  ```cd creche-app/client``` puis:

```npm install```
# ou

```yarn install```

## Configurer les variables d’environnement :
Crée un fichier .env à la racine du client et ajoute :

REACT_APP_API_URL=http://localhost:8000/api


## Démarer le serveur
Depuis le dossier du client:
```npm run dev```
Ouvre ton navigateur à l’adresse 'http://localhost:5173/'(ou le port affiché).

## Structure du projet

client/
├── public/
│   ├── images/            #  # Images statiques accessibles publiquement.
│  
├── src/
|   |── admin              # Composants et ressources dédiés à l'espac administrateur.
│   ├── assets/images      # Images utilisées dans l'interface utilisateur.
│   ├── components/        # Composants réutilisables.
│   ├── context/           # AuthContext.
│   ├── pages/             # Pages ( accueil,a-propos,espace_parent,inscription...)
│   ├── Router             # Configuration du React Router pour la navigation
│   ├── styles/            # SCSS global.
│   ├── utils              # Protection des routes
│   └── main.jsx           # Bootstrap de l’application
├── .env                   # Variables d’environnement (non versionné via .gitignore)
├── package.json           # Dépendances, scripts, métadonnées du projet
└── README.md              # # Documentation du projet front-end

🔑 Authentification
AuthContext gère le token JWT, le stocke dans localStorage et vérifie l’expiration.

Page Login (/login) pour se connecter.

Page Register (/register) pour s’inscrire.

Routes protégées via un composant <ProtectedRoute>.

## Documentation

#### Micro-creche: Les petits Oursons
    https://www.croix-rouge.fr/micro-creche-les-p-tits-oursons
 
#### creche: Oursons & Cie 
    https://www.croix-rouge.fr/eaje-collectif-oursons-et-compagnie

#### React : 
https://reactjs.org/

#### React Router : 
https://reactrouter.com/

#### Axios : 
https://axios-http.com/

#### React‑Admin  :
https://marmelab.com/react-admin






