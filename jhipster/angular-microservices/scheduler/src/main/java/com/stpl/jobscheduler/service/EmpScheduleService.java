package com.stpl.jobscheduler.service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Calendar;
import java.util.Date;

import com.stpl.jobscheduler.domain.SchedulerEntity;
import com.stpl.jobscheduler.service.constants.SchedulerConstant;

import org.quartz.CronScheduleBuilder;
import org.quartz.JobBuilder;
import org.quartz.JobDetail;
import org.quartz.JobKey;
import org.quartz.Trigger;
import org.quartz.TriggerBuilder;
import org.quartz.impl.matchers.GroupMatcher;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.SimpleScheduleBuilder;

@Service
public class EmpScheduleService {
    private final Logger log = LoggerFactory.getLogger(EmpScheduleService.class);

    private Scheduler scheduler;

    EmpScheduleService(@Autowired Scheduler scheduler) {
        this.scheduler = scheduler;
    }

    // @Scheduled(fixedDelay = 20000)
    public void addDestinationData(SchedulerEntity schedulerEntity) {
        log.info("scheduler-------------------------:" + scheduler);
        JobDetail jobDetail = JobBuilder.newJob(EmpAddDestinationService.class).withIdentity("myJob", "group1").build();
        checkCurrentRunningJob();
        log.info("scheduler type:" + schedulerEntity.getType());
        String scheduleType = schedulerEntity.getType();
        if ("manual".equalsIgnoreCase(scheduleType)) {
            runManualJob(jobDetail);
        } else if ("interval".equalsIgnoreCase(scheduleType)) {
            runIntervalJob(schedulerEntity, jobDetail);
        } else if ("frequency".equalsIgnoreCase(scheduleType)) {
            runFrequencyJob(schedulerEntity, jobDetail);
        }

    }

    private void runFrequencyJob(SchedulerEntity schedulerEntity, JobDetail jobDetail) {
        if ("daily".equalsIgnoreCase(schedulerEntity.getCronEntity().getCronType())) {
            runDailyJob(jobDetail, schedulerEntity);
        } else if ("weekly".equalsIgnoreCase(schedulerEntity.getCronEntity().getCronType())) {
            runWeeklyJob(jobDetail, schedulerEntity);
        } else if ("monthly".equalsIgnoreCase(schedulerEntity.getCronEntity().getCronType())) {
            runMonthlyJob(jobDetail, schedulerEntity);
        } else if ("custom".equalsIgnoreCase(schedulerEntity.getCronEntity().getCronType())) {
            runCustomJob(jobDetail, schedulerEntity);
        }
    }

    private void runCustomJob(JobDetail jobDetail, SchedulerEntity schedulerEntity) {
        log.info("date for custom ========== " + schedulerEntity.getCronEntity().getCustomFrq().getCustomDate());
        Date customDate=schedulerEntity.getCronEntity().getCustomFrq().getCustomDate();
        int hour = schedulerEntity.getCronEntity().getCustomFrq().getHour();
        int min = schedulerEntity.getCronEntity().getCustomFrq().getMin();
        int sec = schedulerEntity.getCronEntity().getCustomFrq().getSec();
        Calendar cal = Calendar.getInstance();
        cal.setTime(customDate);
        LocalDate localDate = customDate.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
        int month = localDate.getMonthValue();
        int year = localDate.getYear();
        int dateOfMonth = localDate.getDayOfMonth();
        log.info("====================="+ dateOfMonth + " " + year);
        String customCronExp = getCronExpForCustom(dateOfMonth, month, year, hour, min, sec);
        log.info("===================== customCronExp "+ customCronExp);
        runCronJob(jobDetail, customCronExp);

    }

    private String getCronExpForCustom(int dateOfMonth, int month, int year, int hour, int min, int sec) {
        return sec + SchedulerConstant.WHITE_SPACE + min + SchedulerConstant.WHITE_SPACE + hour
                + SchedulerConstant.WHITE_SPACE + dateOfMonth + SchedulerConstant.WHITE_SPACE
                + month + SchedulerConstant.WHITE_SPACE + SchedulerConstant.QUESTION_MARK + SchedulerConstant.WHITE_SPACE
                + year;
    }
    

    private void runMonthlyJob(JobDetail jobDetail, SchedulerEntity schedulerEntity) {
        int date = schedulerEntity.getCronEntity().getMonthlyFrq().getDate();
        int hour = schedulerEntity.getCronEntity().getMonthlyFrq().getHour();
        int min = schedulerEntity.getCronEntity().getMonthlyFrq().getMin();
        int sec = schedulerEntity.getCronEntity().getMonthlyFrq().getSec();
        log.info("monthly timing :" + date + hour + min + sec);
        String monthlyCronExp = getCronExpForMonthly(date, hour, min, sec);
        log.info("weeklyCronExp :" + monthlyCronExp);
        runCronJob(jobDetail, monthlyCronExp);
    }

    private String getCronExpForMonthly(int date, int hour, int min, int sec) {
        return sec + SchedulerConstant.WHITE_SPACE + min + SchedulerConstant.WHITE_SPACE + hour
                + SchedulerConstant.WHITE_SPACE + date + SchedulerConstant.WHITE_SPACE
                + SchedulerConstant.ASTERISK + SchedulerConstant.WHITE_SPACE + SchedulerConstant.QUESTION_MARK + SchedulerConstant.WHITE_SPACE
                + SchedulerConstant.ASTERISK;
    }

    private void runWeeklyJob(JobDetail jobDetail, SchedulerEntity schedulerEntity) {
        String weekday = schedulerEntity.getCronEntity().getWeeklyFrq().getWeekDay();
        int hour = schedulerEntity.getCronEntity().getWeeklyFrq().getHour();
        int min = schedulerEntity.getCronEntity().getWeeklyFrq().getMin();
        int sec = schedulerEntity.getCronEntity().getWeeklyFrq().getSec();
        log.info("weekly timing :" + weekday + hour + min + sec);
        String weeklyCronExp = getCronExpForWeekly(weekday, hour, min, sec);
        log.info("weeklyCronExp :" + weeklyCronExp);
        runCronJob(jobDetail, weeklyCronExp);
    }

    private String getCronExpForWeekly(String weekday, int hour, int min, int sec) {
        return sec + SchedulerConstant.WHITE_SPACE + min + SchedulerConstant.WHITE_SPACE + hour
                + SchedulerConstant.WHITE_SPACE + SchedulerConstant.QUESTION_MARK + SchedulerConstant.WHITE_SPACE
                + SchedulerConstant.ASTERISK + SchedulerConstant.WHITE_SPACE + weekday + SchedulerConstant.WHITE_SPACE
                + SchedulerConstant.ASTERISK;
    }

    private void runDailyJob(JobDetail jobDetail, SchedulerEntity schedulerEntity) {
        int hour = schedulerEntity.getCronEntity().getDailyFrq().getHour();
        int min = schedulerEntity.getCronEntity().getDailyFrq().getMin();
        int sec = schedulerEntity.getCronEntity().getDailyFrq().getSec();
        log.info("daily timing :" + hour + min + sec);
        String dailyCronExp = getCronExpForDaily(hour, min, sec);
        log.info("dailyCronExp :" + dailyCronExp);
        runCronJob(jobDetail, dailyCronExp);

    }

    private void runCronJob(JobDetail jobDetail, String dailyCronExp) {
        try {

            Trigger triggerInterval = TriggerBuilder.newTrigger().withIdentity("cron trigger")
                    .withSchedule(CronScheduleBuilder.cronSchedule(dailyCronExp)).build();
            // Scheduler scheduler = StdSchedulerFactory.getDefaultScheduler();
            scheduler.start();
            scheduler.scheduleJob(jobDetail, triggerInterval);

        } catch (SchedulerException e) {

            e.printStackTrace();
        }
    }

    private String getCronExpForDaily(int hour, int min, int sec) {
        return sec + SchedulerConstant.WHITE_SPACE + min + SchedulerConstant.WHITE_SPACE + hour
                + SchedulerConstant.WHITE_SPACE + SchedulerConstant.ASTERISK + SchedulerConstant.WHITE_SPACE
                + SchedulerConstant.ASTERISK + SchedulerConstant.WHITE_SPACE + SchedulerConstant.QUESTION_MARK
                + SchedulerConstant.WHITE_SPACE + SchedulerConstant.ASTERISK;
    }

    private void runManualJob(JobDetail jobDetail) {
        try {
            Trigger triggerManual = TriggerBuilder.newTrigger().withIdentity("manual tigger").startNow().build();
            // Scheduler scheduler = StdSchedulerFactory.getDefaultScheduler();
            scheduler.start();
            scheduler.scheduleJob(jobDetail, triggerManual);
            try {
                Thread.sleep(100000);
                scheduler.shutdown();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        } catch (SchedulerException e) {

            e.printStackTrace();
        }
    }

    private void runIntervalJob(SchedulerEntity schedulerEntity, JobDetail jobDetail) {
        int hour = schedulerEntity.getFixedInterval().getHour();
        int min = schedulerEntity.getFixedInterval().getMin();
        int sec = schedulerEntity.getFixedInterval().getSec();
        log.info("interval :" + hour + min + sec);

        try {

            Trigger triggerInterval = TriggerBuilder.newTrigger().withIdentity("cron trigger")
                    .withSchedule(SimpleScheduleBuilder.simpleSchedule()
                            .withIntervalInSeconds(getSeconds(hour, min, sec)).repeatForever())
                    .build();
            // Scheduler scheduler = StdSchedulerFactory.getDefaultScheduler();
            scheduler.start();
            scheduler.scheduleJob(jobDetail, triggerInterval);

        } catch (SchedulerException e) {

            e.printStackTrace();
        }
    }

    private void checkCurrentRunningJob() {
        try {
            // log.info("JobGroupNames ===============" +
            // scheduler.getJobGroupNames().size());
            for (String jobGroup : scheduler.getJobGroupNames()) {
                // log.info("*************" + jobGroup);
                for (JobKey jobKey : scheduler.getJobKeys(GroupMatcher.jobGroupEquals(jobGroup))) {
                    String jobName = jobKey.getName();
                    String jobGroupName = jobKey.getGroup();
                    scheduler.deleteJob(jobKey);
                    // log.info("************* jobName" + jobName + "``````````````` jobGroupName :"
                    // + jobGroupName);
                }

            }
        } catch (SchedulerException e1) {
            e1.printStackTrace();
        }
    }

    private int getSeconds(int hour, int min, int sec) {
        return hour * 60 * min * 60 + sec;
    }
}