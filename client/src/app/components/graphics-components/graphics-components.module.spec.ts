import { GraphicsComponentsModule } from './graphics-components.module';

describe('GraphicsComponentsModule', () => {
  let graphicsComponentsModule: GraphicsComponentsModule;

  beforeEach(() => {
    graphicsComponentsModule = new GraphicsComponentsModule();
  });

  it('should create an instance', () => {
    expect(graphicsComponentsModule).toBeTruthy();
  });
});
