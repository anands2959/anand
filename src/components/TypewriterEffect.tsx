'use client';

import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
}

export function TypewriterEffect({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
  className = '',
}: TypewriterEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Function to handle the typing effect
    const handleTyping = () => {
      const currentFullText = texts[currentTextIndex];
      const shouldType = !isDeleting && currentText.length < currentFullText.length;
      const shouldDelete = isDeleting && currentText.length > 0;

      // Set the next text based on whether we're typing or deleting
      if (shouldType) {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        timeout = setTimeout(handleTyping, typingSpeed);
      } else if (shouldDelete) {
        setCurrentText(currentText.substring(0, currentText.length - 1));
        timeout = setTimeout(handleTyping, deletingSpeed);
      } else if (isDeleting && currentText.length === 0) {
        // Move to the next text after deleting
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        timeout = setTimeout(handleTyping, typingSpeed);
      } else {
        // Pause at the end of typing before starting to delete
        setIsDeleting(true);
        timeout = setTimeout(handleTyping, delayBetweenTexts);
      }
    };

    // Start the typing effect
    timeout = setTimeout(handleTyping, typingSpeed);

    // Cursor blinking effect
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500);

    // Cleanup function
    return () => {
      clearTimeout(timeout);
      clearInterval(blinkInterval);
    };
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  return (
    <span className={className}>
      {currentText}
      <span className={`inline-block w-0.5 h-5 ml-1 bg-purple-600 dark:bg-purple-400 ${isBlinking ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
    </span>
  );
}