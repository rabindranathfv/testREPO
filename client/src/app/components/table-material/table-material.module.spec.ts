import { TableMaterialModule } from './table-material.module';

describe('TableMaterialModule', () => {
  let tableMaterialModule: TableMaterialModule;

  beforeEach(() => {
    tableMaterialModule = new TableMaterialModule();
  });

  it('should create an instance', () => {
    expect(tableMaterialModule).toBeTruthy();
  });
});
