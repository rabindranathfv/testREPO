import { AsideFormModule } from './aside-form.module';

describe('AsideFormModule', () => {
  let asideFormModule: AsideFormModule;

  beforeEach(() => {
    asideFormModule = new AsideFormModule();
  });

  it('should create an instance', () => {
    expect(asideFormModule).toBeTruthy();
  });
});
