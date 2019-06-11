import { SerbianTransliteratorPipe } from './serbian-transliterator.pipe';

describe('TranslitPipe', () => {
  it('create an instance', () => {
    const pipe = new SerbianTransliteratorPipe();
    expect(pipe).toBeTruthy();
  });
});
