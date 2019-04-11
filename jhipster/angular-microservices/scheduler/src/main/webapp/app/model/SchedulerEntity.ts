import { FixedIntervalEntity } from './FixedIntervalEntity';
import { CronEntity } from './CronEntity';

export class SchedulerEntity {
    type: String;
    fixedInterval?: FixedIntervalEntity;
    cronEntity? : CronEntity;
}
