import Colour from './colour.type';
import Schedule from '../time/schedule.interface';

export default interface Completion {
    strategy: 'tick' | 'percentage' | 'colour';
    completion: boolean | number | Colour;
    showIfComplete: boolean;
    autoCompleteIfSubtasksComplete: boolean;
    completionTime: Schedule
}