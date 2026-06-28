# Guide de déploiement — Ajnetpro sur cPanel (Export statique)

## Étape 1 — Préparer votre projet en local

### 1.1 Renommer l'image hero
Avant tout, renommez votre image :
```
assets/images/WhatsApp Image 2025-10-02 at 3.10.21 PM.jpeg
→ assets/images/hero.jpeg
```
Et copiez-la dans `public/assets/hero.jpg`.

### 1.2 Remplir les variables d'environnement
Ouvrez `.env.local` et remplacez les placeholders par vos vraies clés EmailJS :
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_XXXXXXXX
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_XXXXXXXX
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=XXXXXXXXXXXXXXXX
```

### 1.3 Installer les dépendances
```bash
npm install
```

---

## Étape 2 — Générer l'export statique

```bash
npm run build
```

Si le build réussit, un dossier **`out/`** est créé à la racine du projet.
Il contient tous les fichiers HTML/CSS/JS statiques.

> ⚠️ Si vous avez une erreur sur `next-sitemap` (postbuild), ignorez-la
> ou supprimez temporairement la ligne `"postbuild": "next-sitemap"` dans package.json.

---

## Étape 3 — Copier le .htaccess dans /out

Le fichier `.htaccess` (déjà dans `public/`) sera automatiquement copié
dans `out/` par Next.js lors du build.

Vérifiez qu'il est bien présent : `out/.htaccess`

---

## Étape 4 — Uploader sur cPanel

### Via le File Manager cPanel :
1. Connectez-vous à cPanel → **File Manager**
2. Naviguez dans `public_html/`
3. Supprimez le contenu existant (ou faites une sauvegarde)
4. Cliquez **Upload** → uploadez le contenu du dossier `out/` (pas le dossier lui-même)
5. Assurez-vous que `.htaccess` est bien uploadé (les fichiers cachés sont parfois masqués)

### Via FTP (FileZilla, etc.) :
1. Connectez-vous avec vos identifiants FTP cPanel
2. Dossier distant : `/public_html/`
3. Uploadez tout le contenu de `out/`

---

## Étape 5 — Vérification

Visitez votre site :
- `https://votredomaine.com` → doit rediriger vers `/fr/`
- `https://votredomaine.com/en/` → version anglaise
- `https://votredomaine.com/fr/` → version française

---

## ⚠️ Limitations connues de l'export statique

| Fonctionnalité | Statique | Solution |
|---|---|---|
| Middleware i18n (détection langue navigateur) | ❌ | `.htaccess` s'en charge |
| `next/image` optimisation automatique | ❌ | Images déjà en WebP/AVIF dans `public/` |
| API Routes (formulaire contact) | ❌ | Utiliser EmailJS (déjà configuré) |
| SSR / `getServerSideProps` | ❌ | Non utilisé dans ce projet |
| `next-sitemap` (postbuild) | ⚠️ | Générez le sitemap manuellement ou utilisez le `public/sitemap.xml` existant |

---

## Mise à jour du site

Pour chaque mise à jour :
1. Modifiez vos fichiers source
2. Relancez `npm run build`
3. Ré-uploadez le contenu de `out/` sur cPanel (en écrasant)

