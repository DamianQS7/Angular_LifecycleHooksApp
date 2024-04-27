import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'product-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  
  public isProductVisible: boolean = false;
  public currentPrice: number = 10;

  constructor() {
    console.log('Parent Component: Constructor')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Parent Component: ngOnChanges');
    console.log(`changes: ${{changes}}`);
  }

  ngOnInit(): void {
    console.log('Parent Component: ngOnInit');
  }

  ngDoCheck(): void {
    console.log('Parent Component: ngDoCheck');
  }
  
  ngAfterContentInit(): void {
    console.log('Parent Component: ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('Parent Component: ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('Parent Component: ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('Parent Component: ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('Parent Component: ngOnDestroy');
  }

  public increasePrice() {
    this.currentPrice++;
    console.log('IncreasePrice Button -> Changes on Input')
  }

  public toggle() {
    this.isProductVisible = !this.isProductVisible;
    console.log(`Toggle Button -> Child Component ${this.isProductVisible === true? 'created' : 'destroyed'}`);
  }
}
