package com.stpl.jobscheduler.domain;

import java.util.Date;

public class CustomFre {
    private Date customDate;
    private int hour;
    private int min;
    private int sec;

    /**
     * @return the customDate
     */
    public Date getCustomDate() {
        return customDate;
    }

    /**
     * @param customDate the customDate to set
     */
    public void setCustomDate(Date customDate) {
        this.customDate = customDate;
    }

    /**
     * @return the hour
     */
    public int getHour() {
        return hour;
    }

    /**
     * @param hour the hour to set
     */
    public void setHour(int hour) {
        this.hour = hour;
    }

    /**
     * @return the min
     */
    public int getMin() {
        return min;
    }

    /**
     * @param min the min to set
     */
    public void setMin(int min) {
        this.min = min;
    }

    /**
     * @return the sec
     */
    public int getSec() {
        return sec;
    }

    /**
     * @param sec the sec to set
     */
    public void setSec(int sec) {
        this.sec = sec;
    }

}