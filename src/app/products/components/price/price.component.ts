import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'product-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  
  @Input()
  public price: number = 0;

  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('Child Component: ngOnInit');

    this.interval$ = interval(2000).subscribe( value => console.log(`Tick: ${value}`));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child Component: ngOnChanges');
    console.log({changes});
  }

  ngAfterContentInit(): void {
    console.log('Child Component: ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    console.log('Child Component: ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('Child Component: ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('Child Component: ngAfterViewChecked')
  }

  ngDoCheck(): void {
    console.log('Child Component: ngDoCheck')
  }

  ngOnDestroy(): void {
    console.log('Child Component: ngOnDestroy');
    this.interval$?.unsubscribe();
    console.log('---> Unsubscribed from the interval observable.')
  }
}
