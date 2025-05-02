import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponetOutputExampleComponent } from './componet-output-example.component';

describe('ComponetOutputExampleComponent', () => {
  let component: ComponetOutputExampleComponent;
  let fixture: ComponentFixture<ComponetOutputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponetOutputExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponetOutputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
