# Corrections apportées au projet Ajnetpro

## Fichiers modifiés

### package.json
- Supprimé `@next/swc-wasm-nodejs@13.5.1` (incompatible avec Next 15)
- Mis à jour `eslint-config-next` de 13.5.1 → ^15.5.4 pour aligner sur Next 15

### tailwind.config.js
- **Supprimé** (doublon de `tailwind.config.ts`)

### lib/getDictionary.ts
- Supprimé l'objet `dictionaries` inutilisé (dead code)
- Conservé uniquement la fonction `getDictionary` avec import dynamique

### lib/metadata.ts
- Unifié le nom de marque sur **Ajnetpro** (était mixte "Entretien Canada" / "ajnetpro")
- Retiré la clé `verification.google` avec valeur placeholder `"your-google-verification-code"`
- Ajouté un commentaire TODO pour l'ajouter quand la vraie clé sera disponible

### lib/animations.ts
- Renommé `speed` en `_speed` dans `parallaxVariants` pour signaler l'intention future
- Nettoyage léger du code (virgules de fin manquantes)

### middleware.ts
- Ajouté la détection de la langue du navigateur via `Accept-Language`
- Enrichi le `matcher` pour exclure aussi `og-image.jpg` et `apple-touch-icon.png`

### .env.local
- Remplacé les fausses clés (`service_abc123`, `user_123456789`) par des placeholders explicites avec instructions

### app/page.tsx
- Simplifié : la page racine retourne `null` car le middleware gère la redirection

### app/layout.tsx
- Remplacé la metadata inline par `defaultMetadata` depuis `lib/metadata.ts`

### app/[lang]/page.tsx ← NOUVEAU
- Créé la page avec support i18n réel via `params.lang`
- Métadonnées dynamiques par langue (`generateMetadata`)
- `generateStaticParams()` pour le rendu statique (fr + en)
- Tous les textes passent par le dictionnaire

### components/sections/hero.tsx
- Corrigé l'import d'image avec espace dans le nom de fichier

## Action requise par vous

1. **Renommer** `assets/images/WhatsApp Image 2025-10-02 at 3.10.21 PM.jpeg` → `assets/images/hero.jpeg`
2. **Remplir** `.env.local` avec vos vraies clés EmailJS
3. **Ajouter** votre code Google Search Console dans `lib/metadata.ts`
4. **Créer** les composants `Navbar` et `Footer` puis les décommenter dans `app/layout.tsx`
5. **Lancer** `npm install` pour appliquer les changements de `package.json`
