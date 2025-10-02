import bgImage from "@/assets/hadzabe-bg.jpg";
import silhouetteImage from "@/assets/savanna-silhouette.png";

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background image with higher visibility */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: 'blur(1px) grayscale(10%)',
        }}
      />
      
      {/* Gradient overlay - lighter to show image more */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/50 to-background/40" />
      
      {/* Savanna silhouette at bottom - dual layers for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-auto">
        <img 
          src={silhouetteImage}
          alt=""
          className="w-full h-auto object-cover opacity-50 animate-sway"
          style={{ filter: 'brightness(0)' }}
        />
        <img 
          src={silhouetteImage}
          alt=""
          className="absolute bottom-0 left-0 w-full h-auto object-cover opacity-30 animate-sway-delayed"
          style={{ filter: 'brightness(0)' }}
        />
      </div>
      
      {/* Bottom gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
    </div>
  );
};
