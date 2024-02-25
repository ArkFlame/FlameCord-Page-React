import { useEffect, useState } from 'react';

interface TypeWriterSettings {
  speed: number;
  delay: number;
}

const defaultSettings: TypeWriterSettings = {
  speed: 100,
  delay: 1000,
};

type TypeWriterState = 'writing' | 'deleting' | 'waiting';

const useTypeWriter = (
  texts: string[],
  settings?: Partial<TypeWriterSettings>,
) => {
  const mergedSettings = { ...defaultSettings, ...settings };
  const [text, setText] = useState('');
  const [state, setState] = useState<TypeWriterState>('writing');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (state === 'writing') {
        setText((prev) => {
          if (prev === texts[currentTextIndex]) {
            setState('waiting');
            setTimeout(() => {
              setState('deleting');
            }, mergedSettings.delay);
            return prev;
          }
          return texts[currentTextIndex].slice(0, prev.length + 1);
        });
      } else if (state === 'deleting') {
        setText((prev) => {
          if (prev === '') {
            setCurrentTextIndex((prev) => {
              if (prev === texts.length - 1) {
                return 0;
              }
              return prev + 1;
            });
            setState('writing');
            return prev;
          }
          return prev.slice(0, prev.length - 1);
        });
      }
    }, mergedSettings.speed);

    return () => clearInterval(interval);
  }, [
    texts,
    mergedSettings.speed,
    mergedSettings.delay,
    state,
    currentTextIndex,
  ]);

  return text;
};

export default useTypeWriter;
