import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return formatted time 80 => 1h 20min', () => {
    const pipe = new DurationPipe();
    expect(pipe.transform(80)).toEqual('1h 20min');
  });
});
