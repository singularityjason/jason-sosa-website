import type Player from "@vimeo/player";

export type VimeoErrorType =
  | 'play'
  | 'load'
  | 'player_init'
  | 'network'
  | 'timeout'
  | 'resource'
  | 'unknown';

export interface VimeoError {
  type: VimeoErrorType;
  message: string;
  originalError?: unknown;
  isRetryable: boolean;
}

export interface VimeoPlayerOptions {
  id: string;
  autopause: boolean;
  autoplay: boolean;
  background: boolean;
  controls: boolean;
  loop: boolean;
  muted: boolean;
  transparent: boolean;
  responsive: boolean;
  playsinline: boolean;
  title: boolean;
  byline: boolean;
  portrait: boolean;
  dnt: boolean;
  speed: boolean;
  quality: 'auto' | '240p' | '360p' | '540p' | '720p' | '1080p' | '2k' | '4k';
}

export interface VimeoPlayerInstanceConfig {
  videoId: string;
  elementRef: React.RefObject<HTMLElement>;
  autoplay: boolean;
  muted: boolean;
  loop: boolean;
  playbackRate?: number;
  onLoaded: () => void;
  onPlay: () => void;
  onError: (error: VimeoError) => void;
}

// Add the UseVimeoPlayerProps and UseVimeoPlayerReturn types that were previously inline
export interface UseVimeoPlayerProps {
  videoId: string;
  elementRef: React.RefObject<HTMLElement>;
  isInView?: boolean;
  isMobile?: boolean;
  playbackRate?: number;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  enabled?: boolean;
  maxRetries?: number;
  onVideoLoaded?: () => void;
  onVideoPlaying?: () => void;
}

export interface UseVimeoPlayerReturn {
  isLoaded: boolean;
  isPlaying: boolean;
  isError: boolean;
  player: Player | null;
  cleanupPlayer: () => void;
}
