export interface ImageCardProps {
  src: string;
  colSpan: string;
  height: string;
  centerVertically?: boolean;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  src,
  colSpan,
  height,
  centerVertically,
}) => (
  <div className={`relative ${colSpan} ${centerVertically ? 'flex items-center' : ''}`}>
    <div className={`relative w-full ${height} overflow-hidden shadow-xl bg-white`}>
      <img src={src} alt="" className="w-full h-full object-cover" />
    </div>
  </div>
);
