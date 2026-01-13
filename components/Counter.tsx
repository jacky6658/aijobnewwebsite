'use client';

import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

const Counter: React.FC<CounterProps> = ({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  decimals = 0 
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // 使用 easeOutCubic 緩動函數讓動畫更自然
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = easeOutCubic * end;
      
      if (decimals > 0) {
        setCount(parseFloat(currentCount.toFixed(decimals)));
      } else {
        setCount(Math.floor(currentCount));
      }
      
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // 確保最終顯示正確的數字
        if (decimals > 0) {
          setCount(parseFloat(end.toFixed(decimals)));
        } else {
          setCount(end);
        }
      }
    };
    
    requestAnimationFrame(step);
  }, [isVisible, end, duration, decimals]);

  return (
    <div ref={elementRef} className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};

export default Counter;
