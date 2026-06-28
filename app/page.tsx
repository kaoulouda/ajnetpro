// Redirection statique vers /fr (page d'accueil par défaut)
// Le middleware Next.js ne fonctionne pas en export statique,
// la redirection est gérée ici + dans .htaccess sur le serveur.
import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/fr');
}
