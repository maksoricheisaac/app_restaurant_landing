
export default function VideoSkeleton() {
  return (
    <div className="relative w-full bg-muted rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">

          <div className="w-16 h-16 bg-muted-foreground/20 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-muted-foreground/40"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          {/* Loading text */}
          <div className="text-sm text-muted-foreground animate-pulse">
            Chargement de la vidéo...
          </div>
          {/* Progress bar */}
          <div className="w-32 h-1 bg-muted-foreground/20 rounded-full overflow-hidden">
            <div className="w-full h-full bg-primary/60 animate-pulse" style={{
              animation: 'loading 2s ease-in-out infinite'
            }} />
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
