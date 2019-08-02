import { LoaderModule } from './loader.module';

describe('LoaderModule', () => {
  let loader: LoaderModule;

  beforeEach(() => {
   loader = new LoaderModule();
  });

  it('should create an instance', () => {
    expect(loader).toBeTruthy();
  });
});
