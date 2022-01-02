import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cc-sidebar',
  templateUrl: './cc-sidebar.component.html',
  styleUrls: ['./cc-sidebar.component.scss']
})
export class CcSidebarComponent implements OnInit {
  private _visible: boolean = false;

  @Input() overlay: boolean = false; // used only when fixed is false!
  @Input() fixed: boolean = true;
  @Input() position: string = 'left'; // left or right
  @Input() configureable: boolean = true;
  @Input() showCloseButton: boolean = true;
  @Input() width: number = 250;
  @Input() minWidth: number = 250;
  @Input() opacity: number = 1;
  @Input() zIndex: number = 999;
  @Input() backgroundColor: string = "#000";
  @Input() pageElem?: HTMLElement;
  @Input()
  public set visible(value: boolean) {
    this._visible = value;
    this.handlePage();
  }
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  showConfig: boolean = false;
  componentId: string;
  maxWidth: number = (90 / 100) * window.innerWidth; // get 90% of screen width.

  public get visible(): boolean {
    return this._visible;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.maxWidth = (90 / 100) * window.innerWidth; // get 90% of screen width.
  }

  constructor() {
    this.componentId = this.createComponentId();
    if (this.position !== 'left' && this.position !== 'right') {
      this.position = 'left';
    }
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.pageElem !== undefined) {
      this.pageElem.style.width = '';
    }
  }

  close(): void {
    this.visible = !(this.visible); 
    this.visibleChange.emit(this.visible);
  }

  widthChanged(): void {
    // document.documentElement.style.setProperty('--sidebar-width', (this.width + 'px'));
    this.handlePage();
  }

  getMarginVal(): number {
    if (this.visible === true) {
      return 0;
    } else {
      return -this.width;
    }
  }

  handlePage(positionChanged: boolean = false): void {
    if (this.pageElem !== undefined) {
      this.pageElem.style.width = 'auto';
      if (this.fixed === true) {
        if (this.visible === true) {
          // this.pageElem.style.width = 'calc(100% - ' + this.width + 'px)';
          // this.pageElem.style.width = (this.pageElem.clientWidth - this.width) + 'px';
          if (this.position === 'left') {
            if (positionChanged === true) {
              this.pageElem.style.marginRight = '';
            }
            this.pageElem.style.marginLeft = this.width + 'px';
          } else {
            if (positionChanged === true) {
              this.pageElem.style.marginLeft = '';
            }
            this.pageElem.style.marginRight = this.width + 'px';
          }  
        } else {
          // this.pageElem.style.width = '';
          if (this.position === 'left') {
            this.pageElem.style.marginLeft = '';
          } else {
            this.pageElem.style.marginRight = '';
          }
        }
      } else {
        // this.pageElem.style.width = '';
        if (this.position === 'left') {
          this.pageElem.style.marginLeft = '';
        } else {
          this.pageElem.style.marginRight = '';
        }
      }
    }
  }

  createComponentId() {
    // tslint:disable-next-line:only-arrow-functions
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      // tslint:disable-next-line:no-bitwise
      const r = Math.random() * 16 | 0;
      // tslint:disable-next-line:no-bitwise
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
