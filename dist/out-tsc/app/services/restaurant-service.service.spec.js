import { TestBed } from '@angular/core/testing';
import { RestaurantService } from './restaurant-service.service';
describe('EvenementServiceService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RestaurantService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=restaurant-service.service.spec.js.map