package com.stpl.jobscheduler.domain;

public class CronEntity {
    private String cronType;
    private DailyFre dailyFrq;
    private WeeklyFre weeklyFrq;
    private MonthlyFre monthlyFrq;
    private CustomFre customFrq;

    /**
     * @return the dailyFrq
     */
    public DailyFre getDailyFrq() {
        return dailyFrq;
    }

    /**
     * @return the customFrq
     */
    public CustomFre getCustomFrq() {
        return customFrq;
    }

    /**
     * @param customFrq the customFrq to set
     */
    public void setCustomFrq(CustomFre customFrq) {
        this.customFrq = customFrq;
    }

    /**
     * @return the monthlyFrq
     */
    public MonthlyFre getMonthlyFrq() {
        return monthlyFrq;
    }

    /**
     * @param monthlyFrq the monthlyFrq to set
     */
    public void setMonthlyFrq(MonthlyFre monthlyFrq) {
        this.monthlyFrq = monthlyFrq;
    }

    /**
     * @return the cronType
     */
    public String getCronType() {
        return cronType;
    }

    /**
     * @param cronType the cronType to set
     */
    public void setCronType(String cronType) {
        this.cronType = cronType;
    }

    /**
     * @param dailyFrq the dailyFrq to set
     */
    public void setDailyFrq(DailyFre dailyFrq) {
        this.dailyFrq = dailyFrq;
    }

    /**
     * @return the weeklyFrq
     */
    public WeeklyFre getWeeklyFrq() {
        return weeklyFrq;
    }

    /**
     * @param weeklyFrq the weeklyFrq to set
     */
    public void setWeeklyFrq(WeeklyFre weeklyFrq) {
        this.weeklyFrq = weeklyFrq;
    }
}