import { TestBed } from '@angular/core/testing';
import { RestaurantComponent } from './restaurant.component';
describe('EvenementComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RestaurantComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(RestaurantComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=restaurant.component.spec.js.map