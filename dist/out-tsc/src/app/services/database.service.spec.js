import { TestBed } from '@angular/core/testing';
import { DatabaseService } from './database.service';
describe('DatabaseService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(DatabaseService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=database.service.spec.js.map