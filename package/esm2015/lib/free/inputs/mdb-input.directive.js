/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Renderer2, Input, HostListener, PLATFORM_ID, Inject, } from '@angular/core';
import { DOWN_ARROW, UP_ARROW } from '../utils/keyboard-navigation';
export class MdbInputDirective {
    /**
     * @param {?} _elRef
     * @param {?} _renderer
     * @param {?} platformId
     */
    constructor(_elRef, _renderer, platformId) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.el = null;
        this.elLabel = null;
        this.elIcon = null;
        this.element = null;
        this.mdbValidate = true;
        this.validateSuccess = true;
        this.validateError = true;
        this.focusCheckbox = true;
        this.focusRadio = true;
        this.isBrowser = false;
        this.isClicked = false;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    onfocus() {
        try {
            this._renderer.addClass(this.elLabel, 'active');
            this.isClicked = true;
        }
        catch (error) { }
    }
    /**
     * @return {?}
     */
    onblur() {
        this.validationFunction();
        try {
            if (this.el.nativeElement.value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
            }
            this.isClicked = false;
        }
        catch (error) { }
    }
    /**
     * @return {?}
     */
    onchange() {
        try {
            this.checkValue();
        }
        catch (error) { }
    }
    /**
     * @return {?}
     */
    oniput() {
        this.validationFunction();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onkeydown(event) {
        try {
            if (event.target.type === 'number') {
                if (event.shiftKey) {
                    switch (event.keyCode) {
                        case UP_ARROW:
                            event.target.value = +event.target.value + 10;
                            break;
                        case DOWN_ARROW:
                            event.target.value = +event.target.value - 10;
                            break;
                    }
                }
                if (event.altKey) {
                    switch (event.keyCode) {
                        case UP_ARROW:
                            event.target.value = +event.target.value + 0.1;
                            break;
                        case DOWN_ARROW:
                            event.target.value = +event.target.value - 0.1;
                            break;
                    }
                }
            }
        }
        catch (error) { }
        this.delayedResize();
    }
    /**
     * @return {?}
     */
    oncut() {
        try {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.delayedResize();
            }), 0);
        }
        catch (error) { }
    }
    /**
     * @return {?}
     */
    onpaste() {
        try {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.delayedResize();
            }), 0);
        }
        catch (error) { }
    }
    /**
     * @return {?}
     */
    ondrop() {
        try {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.delayedResize();
            }), 0);
        }
        catch (error) { }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateErrorMsg(value) {
        if (this.wrongTextContainer) {
            this.wrongTextContainer.innerHTML = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateSuccessMsg(value) {
        if (this.rightTextContainer) {
            this.rightTextContainer.innerHTML = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        try {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.delayedResize();
            }), 0);
        }
        catch (error) {
            console.log(error);
        }
        // Inititalise a new <span> wrong/right elements and render it below the host component.
        if (this.mdbValidate) {
            this.wrongTextContainer = this._renderer.createElement('span');
            this._renderer.addClass(this.wrongTextContainer, 'inputVal');
            this._renderer.addClass(this.wrongTextContainer, 'text-danger');
            this._renderer.appendChild(this._elRef.nativeElement.parentElement, this.wrongTextContainer);
            /** @type {?} */
            const textWrong = this._elRef.nativeElement.getAttribute('data-error');
            this.wrongTextContainer.innerHTML = textWrong ? textWrong : 'wrong';
            if (!textWrong && this.errorMessage !== undefined) {
                this.wrongTextContainer.innerHTML = this.errorMessage;
            }
            this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
            this.rightTextContainer = this._renderer.createElement('span');
            this._renderer.addClass(this.rightTextContainer, 'inputVal');
            this._renderer.addClass(this.rightTextContainer, 'text-success');
            this._renderer.appendChild(this._elRef.nativeElement.parentElement, this.rightTextContainer);
            /** @type {?} */
            const textSuccess = this._elRef.nativeElement.getAttribute('data-success');
            this.rightTextContainer.innerHTML = textSuccess ? textSuccess : 'success';
            if (!textSuccess && this.successMessage !== undefined) {
                this.rightTextContainer.innerHTML = this.successMessage;
            }
            this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('errorMessage')) {
            /** @type {?} */
            const newErrorMsg = changes.errorMessage.currentValue;
            this.updateErrorMsg(newErrorMsg);
        }
        if (changes.hasOwnProperty('successMessage')) {
            /** @type {?} */
            const newSuccessMsg = changes.successMessage.currentValue;
            this.updateSuccessMsg(newSuccessMsg);
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.mdbValidate &&
            this._elRef.nativeElement.classList.contains('ng-valid') &&
            this._elRef.nativeElement.classList.contains('ng-dirty') &&
            !this._elRef.nativeElement.classList.contains('counter-success')) {
            this._renderer.addClass(this._elRef.nativeElement, 'counter-success');
            this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
            this._renderer.setStyle(this.rightTextContainer, 'visibility', 'visible');
            this._renderer.setStyle(this.rightTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
            this._renderer.setStyle(this.wrongTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
        }
        if (this.mdbValidate &&
            this._elRef.nativeElement.classList.contains('ng-invalid') &&
            this._elRef.nativeElement.classList.contains('ng-dirty') &&
            !this._elRef.nativeElement.classList.contains('counter-danger')) {
            this._renderer.addClass(this._elRef.nativeElement, 'counter-danger');
            this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
            this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'visible');
            this._renderer.setStyle(this.rightTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
            this._renderer.setStyle(this.wrongTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
        }
        if ((this._elRef.nativeElement.classList.contains('ng-invalid') &&
            this._elRef.nativeElement.classList.contains('ng-pristine') &&
            this._elRef.nativeElement.classList.contains('ng-untouched')) ||
            this._elRef.nativeElement.disabled) {
            if (this._elRef.nativeElement.classList.contains('counter-success')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
                this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
            }
            else if (this._elRef.nativeElement.classList.contains('counter-danger')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
                this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
            }
        }
        if (!this.validateSuccess) {
            this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
            this._renderer.setStyle(this.rightTextContainer, 'display', 'none');
            if (this._elRef.nativeElement.classList.contains('ng-valid')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
            }
        }
        if (!this.validateError) {
            this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
            this._renderer.setStyle(this.wrongTextContainer, 'display', 'none');
            if (this._elRef.nativeElement.classList.contains('ng-invalid')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
            }
        }
    }
    /**
     * @return {?}
     */
    validationFunction() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this._elRef.nativeElement.classList.contains('ng-invalid')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
            }
            if (this._elRef.nativeElement.classList.contains('ng-touched') &&
                this._elRef.nativeElement.classList.contains('ng-invalid')) {
                if (this.mdbValidate) {
                    this._renderer.addClass(this._elRef.nativeElement, 'counter-danger');
                    this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
                    this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'visible');
                    this._renderer.setStyle(this.rightTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
                    this._renderer.setStyle(this.wrongTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
                }
            }
            else if (this._elRef.nativeElement.classList.contains('ng-touched') &&
                this._elRef.nativeElement.classList.contains('ng-valid')) {
                if (this.mdbValidate) {
                    this._renderer.addClass(this._elRef.nativeElement, 'counter-success');
                    this._renderer.setStyle(this.rightTextContainer, 'visibility', 'visible');
                    this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
                    this._renderer.setStyle(this.rightTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
                    this._renderer.setStyle(this.wrongTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
                }
            }
        }), 0);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.isBrowser) {
            try {
                this.element = document.querySelector('.md-textarea-auto');
            }
            catch (error) { }
        }
        /** @type {?} */
        const type = this.el.nativeElement.type;
        if (this.focusCheckbox && type === 'checkbox') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
        if (this.focusRadio && type === 'radio') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this.initComponent();
        this.checkValue();
    }
    /**
     * @return {?}
     */
    resize() {
        if (this.el.nativeElement.classList.contains('md-textarea-auto')) {
            this._renderer.setStyle(this.el.nativeElement, 'height', 'auto');
            this._renderer.setStyle(this.el.nativeElement, 'height', this.el.nativeElement.scrollHeight + 'px');
        }
    }
    /**
     * @return {?}
     */
    delayedResize() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.resize();
        }), 0);
    }
    /**
     * @return {?}
     */
    initComponent() {
        /** @type {?} */
        let inputId;
        /** @type {?} */
        let inputP;
        if (this.isBrowser) {
            try {
                inputId = this.el.nativeElement.id;
            }
            catch (err) { }
            try {
                inputP = this.el.nativeElement.parentNode;
            }
            catch (err) { }
            this.elLabel =
                inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
            if (this.elLabel && this.el.nativeElement.value !== '') {
                this._renderer.addClass(this.elLabel, 'active');
            }
            this.elIcon = inputP.querySelector('i') || false;
            if (this.elIcon) {
                this._renderer.addClass(this.elIcon, 'active');
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    checkValue() {
        /** @type {?} */
        let value = '';
        if (this.elLabel != null) {
            value = this.el.nativeElement.value || '';
            if (value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
                if (this.elIcon) {
                    this._renderer.removeClass(this.elIcon, 'active');
                }
                // tslint:disable-next-line:max-line-length
            }
            if ((value === '' && this.isClicked) ||
                (value === '' && this.el.nativeElement.placeholder) ||
                (value === '' && this.el.nativeElement.attributes.placeholder)) {
                this._renderer.addClass(this.elLabel, 'active');
            }
        }
    }
}
MdbInputDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbInputDirective]',
            },] }
];
/** @nocollapse */
MdbInputDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
MdbInputDirective.propDecorators = {
    mdbInputDirective: [{ type: Input }],
    customRegex: [{ type: Input }],
    mdbValidate: [{ type: Input }],
    validateSuccess: [{ type: Input }],
    validateError: [{ type: Input }],
    focusCheckbox: [{ type: Input }],
    focusRadio: [{ type: Input }],
    errorMessage: [{ type: Input }],
    successMessage: [{ type: Input }],
    onfocus: [{ type: HostListener, args: ['focus',] }],
    onblur: [{ type: HostListener, args: ['blur',] }],
    onchange: [{ type: HostListener, args: ['change',] }],
    oniput: [{ type: HostListener, args: ['input',] }],
    onkeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    oncut: [{ type: HostListener, args: ['cut',] }],
    onpaste: [{ type: HostListener, args: ['paste',] }],
    ondrop: [{ type: HostListener, args: ['drop',] }]
};
if (false) {
    /** @type {?} */
    MdbInputDirective.prototype.wrongTextContainer;
    /** @type {?} */
    MdbInputDirective.prototype.rightTextContainer;
    /** @type {?} */
    MdbInputDirective.prototype.el;
    /** @type {?} */
    MdbInputDirective.prototype.elLabel;
    /** @type {?} */
    MdbInputDirective.prototype.elIcon;
    /** @type {?} */
    MdbInputDirective.prototype.element;
    /** @type {?} */
    MdbInputDirective.prototype.mdbInputDirective;
    /** @type {?} */
    MdbInputDirective.prototype.customRegex;
    /** @type {?} */
    MdbInputDirective.prototype.mdbValidate;
    /** @type {?} */
    MdbInputDirective.prototype.validateSuccess;
    /** @type {?} */
    MdbInputDirective.prototype.validateError;
    /** @type {?} */
    MdbInputDirective.prototype.focusCheckbox;
    /** @type {?} */
    MdbInputDirective.prototype.focusRadio;
    /** @type {?} */
    MdbInputDirective.prototype.errorMessage;
    /** @type {?} */
    MdbInputDirective.prototype.successMessage;
    /** @type {?} */
    MdbInputDirective.prototype.isBrowser;
    /** @type {?} */
    MdbInputDirective.prototype.isClicked;
    /**
     * @type {?}
     * @private
     */
    MdbInputDirective.prototype._elRef;
    /**
     * @type {?}
     * @private
     */
    MdbInputDirective.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2lucHV0cy9tZGItaW5wdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBQ1QsS0FBSyxFQUVMLFlBQVksRUFDWixXQUFXLEVBQ1gsTUFBTSxHQU1QLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFLcEUsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBdUI1QixZQUNVLE1BQWtCLEVBQ2xCLFNBQW9CLEVBQ1AsVUFBa0I7UUFGL0IsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUNsQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBckJ2QixPQUFFLEdBQXFCLElBQUksQ0FBQztRQUM1QixZQUFPLEdBQXFCLElBQUksQ0FBQztRQUNqQyxXQUFNLEdBQWtCLElBQUksQ0FBQztRQUVwQyxZQUFPLEdBQVEsSUFBSSxDQUFDO1FBSVgsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUkzQixjQUFTLEdBQVEsS0FBSyxDQUFDO1FBQ3ZCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFPaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRXNCLE9BQU87UUFDNUIsSUFBSTtZQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxD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QixzQ0FBa0I7Ozs7O0lBR2hCLG1DQUEwQjs7Ozs7SUFDMUIsc0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0LFxuICBIb3N0TGlzdGVuZXIsXG4gIFBMQVRGT1JNX0lELFxuICBJbmplY3QsXG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIE9uSW5pdCxcbiAgRG9DaGVjayxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPV05fQVJST1csIFVQX0FSUk9XIH0gZnJvbSAnLi4vdXRpbHMva2V5Ym9hcmQtbmF2aWdhdGlvbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJJbnB1dERpcmVjdGl2ZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJJbnB1dERpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgRG9DaGVjaywgT25DaGFuZ2VzIHtcbiAgcHVibGljIHdyb25nVGV4dENvbnRhaW5lcjogYW55O1xuICBwdWJsaWMgcmlnaHRUZXh0Q29udGFpbmVyOiBhbnk7XG4gIHB1YmxpYyBlbDogRWxlbWVudFJlZiB8IGFueSA9IG51bGw7XG4gIHB1YmxpYyBlbExhYmVsOiBFbGVtZW50UmVmIHwgYW55ID0gbnVsbDtcbiAgcHVibGljIGVsSWNvbjogRWxlbWVudCB8IGFueSA9IG51bGw7XG5cbiAgZWxlbWVudDogYW55ID0gbnVsbDtcblxuICBASW5wdXQoKSBtZGJJbnB1dERpcmVjdGl2ZTogTWRiSW5wdXREaXJlY3RpdmU7XG4gIEBJbnB1dCgpIGN1c3RvbVJlZ2V4OiBhbnk7XG4gIEBJbnB1dCgpIG1kYlZhbGlkYXRlID0gdHJ1ZTtcbiAgQElucHV0KCkgdmFsaWRhdGVTdWNjZXNzID0gdHJ1ZTtcbiAgQElucHV0KCkgdmFsaWRhdGVFcnJvciA9IHRydWU7XG4gIEBJbnB1dCgpIGZvY3VzQ2hlY2tib3ggPSB0cnVlO1xuICBASW5wdXQoKSBmb2N1c1JhZGlvID0gdHJ1ZTtcbiAgQElucHV0KCkgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN1Y2Nlc3NNZXNzYWdlOiBzdHJpbmc7XG5cbiAgaXNCcm93c2VyOiBhbnkgPSBmYWxzZTtcbiAgaXNDbGlja2VkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmdcbiAgKSB7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgb25mb2N1cygpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbExhYmVsLCAnYWN0aXZlJyk7XG4gICAgICB0aGlzLmlzQ2xpY2tlZCA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJykgb25ibHVyKCkge1xuICAgIHRoaXMudmFsaWRhdGlvbkZ1bmN0aW9uKCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxMYWJlbCwgJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgICAgdGhpcy5pc0NsaWNrZWQgPSBmYWxzZTtcbiAgICB9IGNhdGNoIChlcnJvcikge31cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NoYW5nZScpIG9uY2hhbmdlKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmNoZWNrVmFsdWUoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge31cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0Jykgb25pcHV0KCkge1xuICAgIHRoaXMudmFsaWRhdGlvbkZ1bmN0aW9uKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSkgb25rZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgVVBfQVJST1c6XG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICtldmVudC50YXJnZXQudmFsdWUgKyAxMDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERPV05fQVJST1c6XG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICtldmVudC50YXJnZXQudmFsdWUgLSAxMDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgVVBfQVJST1c6XG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICtldmVudC50YXJnZXQudmFsdWUgKyAwLjE7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBET1dOX0FSUk9XOlxuICAgICAgICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSArZXZlbnQudGFyZ2V0LnZhbHVlIC0gMC4xO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICB0aGlzLmRlbGF5ZWRSZXNpemUoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2N1dCcpIG9uY3V0KCkge1xuICAgIHRyeSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kZWxheWVkUmVzaXplKCk7XG4gICAgICB9LCAwKTtcbiAgICB9IGNhdGNoIChlcnJvcikge31cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3Bhc3RlJykgb25wYXN0ZSgpIHtcbiAgICB0cnkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGVsYXllZFJlc2l6ZSgpO1xuICAgICAgfSwgMCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcm9wJykgb25kcm9wKCkge1xuICAgIHRyeSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kZWxheWVkUmVzaXplKCk7XG4gICAgICB9LCAwKTtcbiAgICB9IGNhdGNoIChlcnJvcikge31cbiAgfVxuXG4gIHVwZGF0ZUVycm9yTXNnKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy53cm9uZ1RleHRDb250YWluZXIpIHtcbiAgICAgIHRoaXMud3JvbmdUZXh0Q29udGFpbmVyLmlubmVySFRNTCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVN1Y2Nlc3NNc2codmFsdWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLnJpZ2h0VGV4dENvbnRhaW5lcikge1xuICAgICAgdGhpcy5yaWdodFRleHRDb250YWluZXIuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRlbGF5ZWRSZXNpemUoKTtcbiAgICAgIH0sIDApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuXG4gICAgLy8gSW5pdGl0YWxpc2UgYSBuZXcgPHNwYW4+IHdyb25nL3JpZ2h0IGVsZW1lbnRzIGFuZCByZW5kZXIgaXQgYmVsb3cgdGhlIGhvc3QgY29tcG9uZW50LlxuICAgIGlmICh0aGlzLm1kYlZhbGlkYXRlKSB7XG4gICAgICB0aGlzLndyb25nVGV4dENvbnRhaW5lciA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMud3JvbmdUZXh0Q29udGFpbmVyLCAnaW5wdXRWYWwnKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMud3JvbmdUZXh0Q29udGFpbmVyLCAndGV4dC1kYW5nZXInKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCwgdGhpcy53cm9uZ1RleHRDb250YWluZXIpO1xuICAgICAgY29uc3QgdGV4dFdyb25nID0gdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZXJyb3InKTtcbiAgICAgIHRoaXMud3JvbmdUZXh0Q29udGFpbmVyLmlubmVySFRNTCA9IHRleHRXcm9uZyA/IHRleHRXcm9uZyA6ICd3cm9uZyc7XG4gICAgICBpZiAoIXRleHRXcm9uZyAmJiB0aGlzLmVycm9yTWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMud3JvbmdUZXh0Q29udGFpbmVyLmlubmVySFRNTCA9IHRoaXMuZXJyb3JNZXNzYWdlO1xuICAgICAgfVxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy53cm9uZ1RleHRDb250YWluZXIsICd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXG4gICAgICB0aGlzLnJpZ2h0VGV4dENvbnRhaW5lciA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMucmlnaHRUZXh0Q29udGFpbmVyLCAnaW5wdXRWYWwnKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMucmlnaHRUZXh0Q29udGFpbmVyLCAndGV4dC1zdWNjZXNzJyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQsIHRoaXMucmlnaHRUZXh0Q29udGFpbmVyKTtcbiAgICAgIGNvbnN0IHRleHRTdWNjZXNzID0gdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3VjY2VzcycpO1xuICAgICAgdGhpcy5yaWdodFRleHRDb250YWluZXIuaW5uZXJIVE1MID0gdGV4dFN1Y2Nlc3MgPyB0ZXh0U3VjY2VzcyA6ICdzdWNjZXNzJztcbiAgICAgIGlmICghdGV4dFN1Y2Nlc3MgJiYgdGhpcy5zdWNjZXNzTWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMucmlnaHRUZXh0Q29udGFpbmVyLmlubmVySFRNTCA9IHRoaXMuc3VjY2Vzc01lc3NhZ2U7XG4gICAgICB9XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnJpZ2h0VGV4dENvbnRhaW5lciwgJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdlcnJvck1lc3NhZ2UnKSkge1xuICAgICAgY29uc3QgbmV3RXJyb3JNc2cgPSBjaGFuZ2VzLmVycm9yTWVzc2FnZS5jdXJyZW50VmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZUVycm9yTXNnKG5ld0Vycm9yTXNnKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnc3VjY2Vzc01lc3NhZ2UnKSkge1xuICAgICAgY29uc3QgbmV3U3VjY2Vzc01zZyA9IGNoYW5nZXMuc3VjY2Vzc01lc3NhZ2UuY3VycmVudFZhbHVlO1xuICAgICAgdGhpcy51cGRhdGVTdWNjZXNzTXNnKG5ld1N1Y2Nlc3NNc2cpO1xuICAgIH1cbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLm1kYlZhbGlkYXRlICYmXG4gICAgICB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbmctdmFsaWQnKSAmJlxuICAgICAgdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25nLWRpcnR5JykgJiZcbiAgICAgICF0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY291bnRlci1zdWNjZXNzJylcbiAgICApIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdjb3VudGVyLXN1Y2Nlc3MnKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMud3JvbmdUZXh0Q29udGFpbmVyLCAndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMucmlnaHRUZXh0Q29udGFpbmVyLCAndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgdGhpcy5yaWdodFRleHRDb250YWluZXIsXG4gICAgICAgICd0b3AnLFxuICAgICAgICB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCArICdweCdcbiAgICAgICk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgdGhpcy53cm9uZ1RleHRDb250YWluZXIsXG4gICAgICAgICd0b3AnLFxuICAgICAgICB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCArICdweCdcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHRoaXMubWRiVmFsaWRhdGUgJiZcbiAgICAgIHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZy1pbnZhbGlkJykgJiZcbiAgICAgIHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZy1kaXJ0eScpICYmXG4gICAgICAhdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvdW50ZXItZGFuZ2VyJylcbiAgICApIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdjb3VudGVyLWRhbmdlcicpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5yaWdodFRleHRDb250YWluZXIsICd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy53cm9uZ1RleHRDb250YWluZXIsICd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLnJpZ2h0VGV4dENvbnRhaW5lcixcbiAgICAgICAgJ3RvcCcsXG4gICAgICAgIHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4J1xuICAgICAgKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLndyb25nVGV4dENvbnRhaW5lcixcbiAgICAgICAgJ3RvcCcsXG4gICAgICAgIHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4J1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZy1pbnZhbGlkJykgJiZcbiAgICAgICAgdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25nLXByaXN0aW5lJykgJiZcbiAgICAgICAgdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25nLXVudG91Y2hlZCcpKSB8fFxuICAgICAgdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5kaXNhYmxlZFxuICAgICkge1xuICAgICAgaWYgKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb3VudGVyLXN1Y2Nlc3MnKSkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnY291bnRlci1zdWNjZXNzJyk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMucmlnaHRUZXh0Q29udGFpbmVyLCAndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvdW50ZXItZGFuZ2VyJykpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2NvdW50ZXItZGFuZ2VyJyk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMud3JvbmdUZXh0Q29udGFpbmVyLCAndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLnZhbGlkYXRlU3VjY2Vzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2NvdW50ZXItc3VjY2VzcycpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5yaWdodFRleHRDb250YWluZXIsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIGlmICh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbmctdmFsaWQnKSkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnY291bnRlci1kYW5nZXInKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMudmFsaWRhdGVFcnJvcikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2NvdW50ZXItZGFuZ2VyJyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLndyb25nVGV4dENvbnRhaW5lciwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgaWYgKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZy1pbnZhbGlkJykpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2NvdW50ZXItc3VjY2VzcycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRpb25GdW5jdGlvbigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbmctaW52YWxpZCcpKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdjb3VudGVyLXN1Y2Nlc3MnKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2NvdW50ZXItZGFuZ2VyJyk7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZy10b3VjaGVkJykgJiZcbiAgICAgICAgdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25nLWludmFsaWQnKVxuICAgICAgKSB7XG4gICAgICAgIGlmICh0aGlzLm1kYlZhbGlkYXRlKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2NvdW50ZXItZGFuZ2VyJyk7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5yaWdodFRleHRDb250YWluZXIsICd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMud3JvbmdUZXh0Q29udGFpbmVyLCAndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICB0aGlzLnJpZ2h0VGV4dENvbnRhaW5lcixcbiAgICAgICAgICAgICd0b3AnLFxuICAgICAgICAgICAgdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIHRoaXMud3JvbmdUZXh0Q29udGFpbmVyLFxuICAgICAgICAgICAgJ3RvcCcsXG4gICAgICAgICAgICB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCArICdweCdcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbmctdG91Y2hlZCcpICYmXG4gICAgICAgIHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZy12YWxpZCcpXG4gICAgICApIHtcbiAgICAgICAgaWYgKHRoaXMubWRiVmFsaWRhdGUpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnY291bnRlci1zdWNjZXNzJyk7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5yaWdodFRleHRDb250YWluZXIsICd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLndyb25nVGV4dENvbnRhaW5lciwgJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICB0aGlzLnJpZ2h0VGV4dENvbnRhaW5lcixcbiAgICAgICAgICAgICd0b3AnLFxuICAgICAgICAgICAgdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIHRoaXMud3JvbmdUZXh0Q29udGFpbmVyLFxuICAgICAgICAgICAgJ3RvcCcsXG4gICAgICAgICAgICB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCArICdweCdcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWQtdGV4dGFyZWEtYXV0bycpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgfVxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudHlwZTtcbiAgICBpZiAodGhpcy5mb2N1c0NoZWNrYm94ICYmIHR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ29uRm9jdXNTZWxlY3QnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZm9jdXNSYWRpbyAmJiB0eXBlID09PSAncmFkaW8nKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdvbkZvY3VzU2VsZWN0Jyk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIHRoaXMuaW5pdENvbXBvbmVudCgpO1xuICAgIHRoaXMuY2hlY2tWYWx1ZSgpO1xuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZC10ZXh0YXJlYS1hdXRvJykpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsICdhdXRvJyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAnaGVpZ2h0JyxcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCArICdweCdcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZGVsYXllZFJlc2l6ZSgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgfSwgMCk7XG4gIH1cblxuICBwdWJsaWMgaW5pdENvbXBvbmVudCgpOiB2b2lkIHtcbiAgICBsZXQgaW5wdXRJZDtcbiAgICBsZXQgaW5wdXRQO1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaW5wdXRJZCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5pZDtcbiAgICAgIH0gY2F0Y2ggKGVycikge31cblxuICAgICAgdHJ5IHtcbiAgICAgICAgaW5wdXRQID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgICAgIHRoaXMuZWxMYWJlbCA9XG4gICAgICAgIGlucHV0UC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtmb3I9XCInICsgaW5wdXRJZCArICdcIl0nKSB8fCBpbnB1dFAucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcbiAgICAgIGlmICh0aGlzLmVsTGFiZWwgJiYgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlICE9PSAnJykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsTGFiZWwsICdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZWxJY29uID0gaW5wdXRQLnF1ZXJ5U2VsZWN0b3IoJ2knKSB8fCBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMuZWxJY29uKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxJY29uLCAnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja1ZhbHVlKCk6IHZvaWQge1xuICAgIGxldCB2YWx1ZSA9ICcnO1xuICAgIGlmICh0aGlzLmVsTGFiZWwgIT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgfHwgJyc7XG4gICAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxMYWJlbCwgJ2FjdGl2ZScpO1xuICAgICAgICBpZiAodGhpcy5lbEljb24pIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsSWNvbiwgJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgKHZhbHVlID09PSAnJyAmJiB0aGlzLmlzQ2xpY2tlZCkgfHxcbiAgICAgICAgKHZhbHVlID09PSAnJyAmJiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGxhY2Vob2xkZXIpIHx8XG4gICAgICAgICh2YWx1ZSA9PT0gJycgJiYgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmF0dHJpYnV0ZXMucGxhY2Vob2xkZXIpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbExhYmVsLCAnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=