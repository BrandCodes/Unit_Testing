import {SelectionStore} from '../../stores/selectionStore';
import { AperturaStore } from '../aperturaStore';

describe ('aguaStore', () => {
    it('selected Item', () =>{
        const selected = new SelectionStore();

        expect(selected.taxSelection).toBe('');
        expect(selected.captureSelection).toBe('');

        selected.changeSelection('Agua');
        selected.changeSelection('Normal');

        expect(selected.taxSelection).toBe('Agua');
        expect(selected.captureSelection).toBe('Normal');
    });
    it('apertura informacion',() => {
        const aperturaE = new AperturaStore();

        expect(aperturaE.ejercicio).toBe(0);
        expect(aperturaE.mes).toBe(0);
        expect(aperturaE.fechaInicio).toBe('');
        expect(aperturaE.fechaFin).toBe('');
        expect(aperturaE.hasAperturaInformation).toBe(false);

        aperturaE.ejercicio = 2019;
        aperturaE.mes = 2;
        aperturaE.fechaInicio = '11/02/2019';
        aperturaE.fechaFin = '16/02/2019';
        expect(aperturaE.hasAperturaInformation).toBe(true);

        expect(aperturaE.ejercicio).toBe(2019);
        expect(aperturaE.mes).toBe(2);
        expect(aperturaE.fechaInicio).toBe('11/02/2019');
        expect(aperturaE.fechaFin).toBe('16/02/2019');
        expect(aperturaE.hasAperturaInformation).toBe(true);

    });
    it('', () => {

    });
});