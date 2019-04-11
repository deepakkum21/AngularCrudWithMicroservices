package com.stpl.jobscheduler.domain;

import org.springframework.data.annotation.Id;

public class SchedulerEntity {
    @Id
    private String id;
    
    private String type;
    private FixedIntervalEntity fixedInterval ;
    private CronEntity cronEntity;

    public String getId() {
        return id;
    }

    /**
     * @return the cronEntity
     */
    public CronEntity getCronEntity() {
        return cronEntity;
    }

    /**
     * @param cronEntity the cronEntity to set
     */
    public void setCronEntity(CronEntity cronEntity) {
        this.cronEntity = cronEntity;
    }

    public void setId(String id) {
		this.id = id;
	}
    /**
     * @return the type
     */
    public String getType() {
        return type;
    }

    /**
     * @return the fixedInterval
     */
    public FixedIntervalEntity getFixedInterval() {
        return fixedInterval;
    }

    /**
     * @param fixedInterval the fixedInterval to set
     */
    public void setFixedInterval(FixedIntervalEntity fixedInterval) {
        this.fixedInterval = fixedInterval;
    }

    /**
     * @param type the type to set
     */
    public void setType(String type) {
        this.type = type;
    }
}