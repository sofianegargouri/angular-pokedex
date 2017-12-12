import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonLoaderComponent } from './pokemon-loader.component';

describe('PokemonLoaderComponent', () => {
  let component: PokemonLoaderComponent;
  let fixture: ComponentFixture<PokemonLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
