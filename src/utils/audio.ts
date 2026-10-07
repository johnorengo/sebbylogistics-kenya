// Ambient nature and cold-chain soundscape synthesizer using Web Audio API

class SoundscapeEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private noiseNode: AudioNode | null = null;
  private droneOsc1: OscillatorNode | null = null;
  private droneOsc2: OscillatorNode | null = null;
  private filterNode: BiquadFilterNode | null = null;

  private init() {
    if (this.ctx) return;
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AudioContextClass();
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public start() {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.12, this.ctx.currentTime + 2.5);
      this.masterGain.connect(this.ctx.destination);

      // Low soothing wind noise filter
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        output[i] = (b0 + b1 + b2) * 0.08;
      }

      const whiteNoiseSource = this.ctx.createBufferSource();
      whiteNoiseSource.buffer = noiseBuffer;
      whiteNoiseSource.loop = true;

      this.filterNode = this.ctx.createBiquadFilter();
      this.filterNode.type = 'lowpass';
      this.filterNode.frequency.setValueAtTime(420, this.ctx.currentTime);
      this.filterNode.Q.setValueAtTime(2.0, this.ctx.currentTime);

      whiteNoiseSource.connect(this.filterNode);
      this.filterNode.connect(this.masterGain);
      whiteNoiseSource.start();
      this.noiseNode = whiteNoiseSource;

      // Soft warm low-frequency drone (equatorial morning stillness / engine purr)
      this.droneOsc1 = this.ctx.createOscillator();
      this.droneOsc1.type = 'sine';
      this.droneOsc1.frequency.setValueAtTime(110, this.ctx.currentTime); // A2 note

      const oscGain = this.ctx.createGain();
      oscGain.gain.setValueAtTime(0.02, this.ctx.currentTime);
      this.droneOsc1.connect(oscGain);
      oscGain.connect(this.masterGain);
      this.droneOsc1.start();

      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  public stop() {
    if (!this.ctx || !this.masterGain) {
      this.isPlaying = false;
      return;
    }
    try {
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.0);
      setTimeout(() => {
        try {
          if (this.droneOsc1) {
            this.droneOsc1.stop();
            this.droneOsc1.disconnect();
          }
          if (this.droneOsc2) {
            this.droneOsc2.stop();
            this.droneOsc2.disconnect();
          }
          if (this.noiseNode) {
            this.noiseNode.disconnect();
          }
        } catch {
          // ignore cleanup errors
        }
        this.isPlaying = false;
      }, 1050);
    } catch {
      this.isPlaying = false;
    }
  }
}

export const soundscape = new SoundscapeEngine();
