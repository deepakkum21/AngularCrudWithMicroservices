package com.stpl.jobscheduler.web.rest;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.stpl.jobscheduler.domain.SourceSchedularTable;
import com.stpl.jobscheduler.repository.EmpSourceRepository;
import com.stpl.jobscheduler.repository.SourceSchedularTableRepository;
import com.stpl.jobscheduler.service.util.CsvUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api")
public class FileUploadController {
    private final Logger log = LoggerFactory.getLogger(FileUploadController.class);

    @Autowired
    private EmpSourceRepository empSourceRepository;

    private List<SourceSchedularTable> sourceDataList = new ArrayList<>();
    private SourceSchedularTable sourceData ;

    @Autowired 
    private SourceSchedularTableRepository sourceTableRepository;

    @PostMapping("/uploadFile")
    public void uploadFile(@RequestParam("fileUploaded") MultipartFile[] file,
            @RequestParam("delimeter") String delimeter) throws IOException {
        String status = null;
        MultipartFile multipartFile = file[0];
        log.info("-------------------" + multipartFile.getOriginalFilename());
        log.info("deleimeter====== " + delimeter);
        // File convFile = new File(multipartFile.getOriginalFilename());
        // convFile.createNewFile();
        // FileOutputStream fos = new FileOutputStream(convFile);
        // fos.write(multipartFile.getBytes());
        // FileReader fr = new FileReader(convFile);
        // BufferedReader br = new BufferedReader(fr);
        // String buffer;
        // String fulltext = "";
        // while ((buffer = br.readLine()) != null) {
        //     log.info(buffer);
        //     fulltext = fulltext + buffer;
        // }

        if (",".equalsIgnoreCase(delimeter)) {
            log.info("****************executing for " + delimeter + " delimeter");
             empSourceRepository.saveAll(CsvUtils.read(SourceSchedularTable.class, file[0].getInputStream()));
        } else {
            log.info("****************executing for " + delimeter + " delimeter");
            File convFile = new File(multipartFile.getOriginalFilename());
            convFile.createNewFile();
            try (FileOutputStream foptStream = new FileOutputStream(convFile);) {
               
                FileOutputStream fos = new FileOutputStream(convFile);
                fos.write(multipartFile.getBytes());
                FileReader fReader = new FileReader(convFile);
                try (BufferedReader bReader = new BufferedReader(fReader);) {
                    String buffer;
                    boolean isfirstLine= true;
                    while ((buffer = bReader.readLine()) != null) {
                        log.info(buffer);
                        
                        if("|".equalsIgnoreCase(delimeter)){
                            delimeter = "\\"+delimeter;
                        }
                        if (isfirstLine) {
                            log.info("its the header");
                            isfirstLine = false;
                        }else {
                            String[] stringArray = buffer.split(delimeter);
                            sourceData =new SourceSchedularTable();
                            sourceData.setEmpId(Integer.valueOf(stringArray[0]));
                            sourceData.setFullName(stringArray[1]);
                            sourceData.setEmail(stringArray[2]);
                            sourceData.setIndicator(stringArray[3]);
                            sourceData.setPhone(Long.valueOf(stringArray[4]));
                            sourceData.setContactPreference(stringArray[5]);
                           // stringArray[]
                            for (String s : stringArray) {
                                
                                log.info("----------- " + s);
                                
                                
                            }
                            sourceDataList.add(sourceData);
                        }
                        
                    }
                }
                fos.close();
                sourceTableRepository.saveAll(sourceDataList);
            }
            // br.close();
            // fos.close();
        }
        // empSourceRepository.saveAll(CsvUtils.read(SourceSchedularTable.class,
        // file[0].getInputStream()));

    }
}