
interface Window {
  YT: {
    Player: new (
      iframe: HTMLIFrameElement,
      options: {
        events: {
          onReady: (event: { target: { playVideo: () => void } }) => void;
          onStateChange: (event: { data: number; target: { playVideo: () => void } }) => void;
        }
      }
    ) => void;
  };
  onYouTubeIframeAPIReady: () => void;
}
