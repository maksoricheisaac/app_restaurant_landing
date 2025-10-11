import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'App_Restaurant - Logiciel de Gestion Restaurant Congo',
    short_name: 'App_Restaurant',
    description: 'Logiciel de gestion restaurant complet pour digitaliser votre établissement. Commande en ligne, caisse enregistreuse, gestion des stocks, menu digital QR code.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#10b981',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
    categories: ['business', 'productivity', 'food'],
    lang: 'fr',
  }
}
