import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'shimmer' | 'none';
}

const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rectangular',
  width,
  height,
  animation = 'shimmer',
}) => {
  const baseStyles = 'bg-slate-200';
  
  const variants = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };
  
  const animations = {
    pulse: 'animate-pulse',
    shimmer: 'skeleton',
    none: '',
  };
  
  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height) style.height = typeof height === 'number' ? `${height}px` : height;
  
  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${animations[animation]} ${className}`}
      style={style}
      aria-label="載入中..."
      role="status"
    >
      <span className="sr-only">載入中...</span>
    </div>
  );
};

// 預設的骨架屏組件
export const SkeletonCard: React.FC = () => (
  <div className="bg-white border-2 border-slate-100 rounded-[3rem] overflow-hidden flex flex-col h-full min-h-[600px]">
    <Skeleton variant="rectangular" height="240px" className="w-full" />
    <div className="p-10 space-y-4">
      <Skeleton variant="text" height="28px" width="80%" />
      <Skeleton variant="text" height="20px" width="100%" />
      <Skeleton variant="text" height="20px" width="75%" />
      <div className="pt-6">
        <Skeleton variant="rectangular" height="44px" width="100%" />
      </div>
    </div>
  </div>
);

export const SkeletonText: React.FC<{ lines?: number }> = ({ lines = 3 }) => (
  <div className="space-y-2">
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton
        key={i}
        variant="text"
        height="20px"
        width={i === lines - 1 ? '75%' : '100%'}
      />
    ))}
  </div>
);

export default Skeleton;
