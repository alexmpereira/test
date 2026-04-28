import { FeatureController } from './feature.controller';

describe('FeatureController', () => {
  it('should return hello message', () => {
    const ctrl = new FeatureController();
    expect(ctrl.hello()).toEqual({ message: 'Hello World' });
  });
});
