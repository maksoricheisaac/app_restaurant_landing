
export default function VideoComponent() {
  
  const videoSrc = "https://www.youtube.com/embed/jRg7c9FKthU?si=RgpFB79E0J5tASRm";

  return (
    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        src={videoSrc}
        title="Logiciel Gestion Restaurant & Commande en Ligne - Démonstration App_Restaurant"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
